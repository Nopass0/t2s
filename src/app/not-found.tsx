import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101010] p-6">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#1c1c1c] p-6 text-slate-200">
        <p className="mb-2 text-lg font-semibold">Страница не найдена</p>
        <p className="mb-5 text-sm text-slate-400">
          Возможно, ссылка устарела или вы перешли по неверному адресу.
        </p>
        <Button asChild>
          <Link href="/">На главную</Link>
        </Button>
      </div>
    </main>
  );
}
