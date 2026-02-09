"use client";

import { Building2, LayoutList, ShieldCheck, UserRoundCog } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { AppShell } from "@/components/dashboard/app-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useAuthStore } from "@/store/auth-store";

type AdminResponse = {
  data: {
    totals: {
      points: number;
      users: number;
      employees: number;
      dms: number;
    };
    points: Array<{
      id: string;
      code: string;
      name: string;
      address: string;
      users: Array<{
        id: string;
        name: string;
        code: string;
        role: "ADMIN" | "DM" | "EMPLOYEE" | "INTERN";
        isActive: boolean;
      }>;
    }>;
  };
};

type AdminTab = "summary" | "create" | "points";

export default function AdminPage() {
  const router = useRouter();
  const { session } = useAuthStore();

  const [tab, setTab] = useState<AdminTab>("summary");
  const [data, setData] = useState<AdminResponse["data"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [pointCode, setPointCode] = useState("");
  const [pointName, setPointName] = useState("");
  const [pointAddress, setPointAddress] = useState("");
  const [dmName, setDmName] = useState("");
  const [dmCode, setDmCode] = useState("");

  const loadData = async () => {
    if (!session) return;

    const res = await fetch(`/api/admin/dashboard?userId=${session.userId}`);
    const json = (await res.json()) as AdminResponse;
    setData(json.data);
    setLoading(false);
  };

  useEffect(() => {
    if (!session) {
      router.replace("/");
      return;
    }
    if (session.role !== "ADMIN") {
      router.replace("/");
      return;
    }
    void loadData();
  }, [session?.userId]);

  const createPoint = async () => {
    setSaving(true);
    await fetch("/api/admin/point", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: pointCode,
        name: pointName,
        address: pointAddress,
        dmName,
        dmCode,
      }),
    });

    setPointCode("");
    setPointName("");
    setPointAddress("");
    setDmName("");
    setDmCode("");
    await loadData();
    setSaving(false);
  };

  if (!session || loading || !data) {
    return <main className="text-muted-foreground p-8">Загрузка...</main>;
  }

  return (
    <AppShell
      title="Админка"
      subtitle="Управление сетью точек"
      nav={[
        {
          id: "summary",
          label: "Сводка",
          icon: <ShieldCheck className="h-4 w-4" />,
          onClick: () => setTab("summary"),
          active: tab === "summary",
        },
        {
          id: "create",
          label: "Создать точку",
          icon: <LayoutList className="h-4 w-4" />,
          onClick: () => setTab("create"),
          active: tab === "create",
        },
        {
          id: "points",
          label: "Список точек",
          icon: <Building2 className="h-4 w-4" />,
          onClick: () => setTab("points"),
          active: tab === "points",
        },
        {
          id: "users",
          label: "Пользователи",
          icon: <UserRoundCog className="h-4 w-4" />,
          onClick: () => setTab("points"),
          active: tab === "points",
        },
      ]}
    >
      <Tabs value={tab} onValueChange={(value) => setTab(value as AdminTab)}>
        <TabsContent value="summary" className="grid gap-3 md:grid-cols-4">
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="pb-2">
              <CardDescription>Точек</CardDescription>
              <CardTitle>{data.totals.points}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="pb-2">
              <CardDescription>Пользователей</CardDescription>
              <CardTitle>{data.totals.users}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="pb-2">
              <CardDescription>Сотрудников</CardDescription>
              <CardTitle>{data.totals.employees}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="pb-2">
              <CardDescription>ДМ</CardDescription>
              <CardTitle>{data.totals.dms}</CardTitle>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="create">
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader>
              <CardTitle>Новая точка + ДМ</CardTitle>
              <CardDescription>
                Код точки 6 цифр, код ДМ 7 символов
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-1">
                <Label>Код точки</Label>
                <Input
                  value={pointCode}
                  onChange={(e) => setPointCode(e.target.value)}
                  className="border-white/10 bg-[#262626]"
                />
              </div>
              <div className="space-y-1">
                <Label>Название точки</Label>
                <Input
                  value={pointName}
                  onChange={(e) => setPointName(e.target.value)}
                  className="border-white/10 bg-[#262626]"
                />
              </div>
              <div className="space-y-1">
                <Label>Адрес</Label>
                <Input
                  value={pointAddress}
                  onChange={(e) => setPointAddress(e.target.value)}
                  className="border-white/10 bg-[#262626]"
                />
              </div>
              <div className="space-y-1">
                <Label>Имя ДМ</Label>
                <Input
                  value={dmName}
                  onChange={(e) => setDmName(e.target.value)}
                  className="border-white/10 bg-[#262626]"
                />
              </div>
              <div className="space-y-1">
                <Label>Код ДМ</Label>
                <Input
                  value={dmCode}
                  onChange={(e) => setDmCode(e.target.value.toUpperCase())}
                  className="border-white/10 bg-[#262626]"
                />
              </div>
              <div className="flex items-end">
                <Button
                  className="w-full"
                  onClick={createPoint}
                  disabled={saving}
                >
                  {saving ? "Создаю..." : "Создать"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="points">
          <section className="space-y-3">
            {data.points.map((point) => (
              <Card key={point.id} className="rounded-lg bg-[#1c1c1c]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building2 className="text-primary h-4 w-4" />
                    {point.name} ({point.code})
                  </CardTitle>
                  <CardDescription>{point.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto rounded-lg border border-white/10">
                    <table className="min-w-[700px] text-base">
                      <thead>
                        <tr className="bg-[#2a2a2a]">
                          <th className="p-2 text-left">Имя</th>
                          <th className="p-2">Роль</th>
                          <th className="p-2">Код</th>
                          <th className="p-2">Статус</th>
                        </tr>
                      </thead>
                      <tbody>
                        {point.users.map((user) => (
                          <tr
                            key={user.id}
                            className="odd:bg-[#232323] even:bg-[#1f1f1f]"
                          >
                            <td className="p-2">{user.name}</td>
                            <td className="p-2 text-center">{user.role}</td>
                            <td className="p-2 text-center">{user.code}</td>
                            <td className="p-2 text-center">
                              {user.isActive ? "Активен" : "Отключен"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
}
