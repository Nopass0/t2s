"use client";

import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101010] p-6">
      <div className="w-full max-w-lg rounded-2xl border border-rose-400/30 bg-[#1c1c1c] p-6 text-slate-200">
        <div className="mb-4 flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-rose-300" />
          <p className="text-lg font-semibold">Ошибка загрузки</p>
        </div>
        <p className="mb-5 text-sm text-slate-300">
          {error.message || "Что-то пошло не так. Попробуйте повторить."}
        </p>
        <Button onClick={reset}>Повторить</Button>
      </div>
    </main>
  );
}
