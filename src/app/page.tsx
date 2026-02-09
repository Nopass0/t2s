"use client";

import { motion } from "motion/react";
import { Building2, KeyRound, Shield, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { loginSchema } from "@/lib/schemas";
import { type SessionPayload, useAuthStore } from "@/store/auth-store";

export default function LoginPage() {
  const router = useRouter();
  const { pointCode, session, setPointCode, clearPointCode, setSession } =
    useAuthStore();
  const autoLoginRef = useRef("");

  const [pointValue, setPointValue] = useState(pointCode);
  const [employeeCode, setEmployeeCode] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasPoint = useMemo(() => pointCode.length === 6, [pointCode]);
  const maybeAdmin = employeeCode.toUpperCase().startsWith("ADM");

  const submit = async () => {
    if (loading) {
      return;
    }

    setError("");
    const enteredPointCode = hasPoint ? pointCode : pointValue;
    const payload = {
      pointCode: enteredPointCode.length > 0 ? enteredPointCode : undefined,
      employeeCode,
      adminKey: adminKey || undefined,
    };

    const parsed = loginSchema.safeParse(payload);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Проверьте поля");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const json = (await res.json()) as {
        error?: string;
        session?: SessionPayload;
      };

      if (!res.ok || !json.session) {
        setError(json.error ?? "Ошибка входа");
        return;
      }

      if (parsed.data.pointCode) {
        setPointCode(parsed.data.pointCode);
      }
      setSession(json.session);

      if (json.session.role === "ADMIN") {
        router.push("/admin");
        return;
      }

      if (json.session.role === "DM") {
        router.push("/dm");
        return;
      }

      router.push("/employee");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!session) {
      return;
    }

    if (session.role === "ADMIN") {
      router.replace("/admin");
      return;
    }

    if (session.role === "DM") {
      router.replace("/dm");
      return;
    }

    router.replace("/employee");
  }, [session, router]);

  useEffect(() => {
    const currentPointCode = hasPoint ? pointCode : pointValue;
    const canAutoLogin =
      currentPointCode.length === 6 &&
      employeeCode.length === 7 &&
      !maybeAdmin &&
      !loading;

    if (!canAutoLogin) {
      if (
        currentPointCode.length < 6 ||
        employeeCode.length < 7 ||
        maybeAdmin
      ) {
        autoLoginRef.current = "";
      }
      return;
    }

    const key = `${currentPointCode}:${employeeCode}`;
    if (autoLoginRef.current === key) {
      return;
    }

    autoLoginRef.current = key;
    void submit();
  }, [employeeCode, pointValue, pointCode, hasPoint, maybeAdmin, loading]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101010]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="w-full max-w-[1280px] px-3 py-0"
      >
        <Card className="overflow-hidden rounded-2xl border border-white/10 bg-[#1c1c1c] py-0 backdrop-blur-xl">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 bg-[#181818] p-6 md:border-r md:border-b-0 md:p-8">
              <p className="text-muted-foreground mb-2 text-xs tracking-[0.2em] uppercase">
                T2 Sales Hub
              </p>
              <h1 className="flex items-center gap-2 text-2xl font-semibold">
                <Building2 className="text-primary h-6 w-6" />
                Вход в систему
              </h1>
              <p className="text-muted-foreground mt-2 text-sm">
                Синхронизация графика, KPI и мотивации точки в одном кабинете.
              </p>

              <div className="text-muted-foreground mt-6 rounded-xl border border-white/10 bg-[#161616] p-3 text-xs">
                Вход выполняется по кодам сотрудников вашей точки.
              </div>
            </div>

            <div className="p-6 md:p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Авторизация</CardTitle>
                <CardDescription>
                  Код точки сохраняется в localStorage и не запрашивается
                  повторно.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5 px-0 pb-0">
                {!hasPoint ? (
                  <div className="space-y-2">
                    <p className="text-muted-foreground flex items-center gap-2 text-xs">
                      <KeyRound className="h-4 w-4" />
                      Код точки (6 цифр, для `ADM` можно не вводить)
                    </p>
                    <div className="overflow-x-auto pb-1">
                      <InputOTP
                        maxLength={6}
                        value={pointValue}
                        onChange={setPointValue}
                      >
                        <InputOTPGroup>
                          {Array.from({ length: 6 }).map((_, idx) => (
                            <InputOTPSlot
                              key={idx}
                              index={idx}
                              className="h-11 w-11 border-white/15 bg-[#202020] text-lg sm:h-14 sm:w-14 sm:text-xl"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </div>
                ) : (
                  <div className="text-muted-foreground text-xs">
                    Код точки сохранен:{" "}
                    <span className="text-foreground/90">{pointCode}</span>
                    <button
                      type="button"
                      onClick={clearPointCode}
                      className="ml-3 underline decoration-dotted underline-offset-4 opacity-70 transition hover:opacity-100"
                    >
                      сменить код точки
                    </button>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-muted-foreground flex items-center gap-2 text-xs">
                    <UserRound className="h-4 w-4" />
                    Код сотрудника (7 символов)
                  </p>
                  <div className="overflow-x-auto pb-1">
                    <InputOTP
                      maxLength={7}
                      value={employeeCode}
                      onChange={(value) => setEmployeeCode(value.toUpperCase())}
                    >
                      <InputOTPGroup>
                        {Array.from({ length: 7 }).map((_, idx) => (
                          <InputOTPSlot
                            key={idx}
                            index={idx}
                            className="h-11 w-11 border-white/15 bg-[#202020] text-lg uppercase sm:h-14 sm:w-14 sm:text-xl"
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  {!maybeAdmin ? (
                    <p className="text-xs text-slate-400">
                      Вход произойдет автоматически после ввода 7-го символа.
                    </p>
                  ) : null}
                </div>

                {maybeAdmin ? (
                  <div className="space-y-2">
                    <p className="text-muted-foreground flex items-center gap-2 text-xs">
                      <Shield className="h-4 w-4" />
                      Ключ админки
                    </p>
                    <Input
                      type="password"
                      value={adminKey}
                      onChange={(e) => setAdminKey(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          void submit();
                        }
                      }}
                      placeholder="Введите ключ из .env"
                      className="h-12 border-white/15 bg-[#202020] text-base"
                    />
                    <p className="text-xs text-slate-400">
                      Для входа в админку нажмите `Enter` после ввода ключа.
                    </p>
                  </div>
                ) : null}

                {error ? (
                  <p className="text-sm text-rose-300">{error}</p>
                ) : null}
                {loading ? (
                  <p className="text-sm text-slate-300">Проверка...</p>
                ) : null}
              </CardContent>
            </div>
          </div>
        </Card>
      </motion.div>
    </main>
  );
}
