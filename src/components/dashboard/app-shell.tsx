"use client";

import { LogOut, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth-store";

type NavItem = {
  id: string;
  label: string;
  icon: ReactNode;
  onClick: () => void;
  active?: boolean;
};

type AppShellProps = {
  title: string;
  subtitle?: string;
  pointLabel?: string;
  nav: NavItem[];
  children: ReactNode;
  headerActions?: ReactNode;
};

export function AppShell({
  title,
  subtitle,
  pointLabel,
  nav,
  children,
  headerActions,
}: AppShellProps) {
  const router = useRouter();
  const { session, logout } = useAuthStore();

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#101010] p-0">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid flex-1 gap-3 bg-[#111111] p-3 backdrop-blur-xl md:grid-cols-[280px_1fr] md:gap-4 md:p-4"
      >
        <aside className="space-y-5 rounded-xl bg-[#1c1c1c] p-4">
          <div>
            <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
              T2 SALES HUB
            </p>
            <h2 className="mt-1 text-xl font-semibold">{title}</h2>
            {subtitle ? (
              <p className="text-muted-foreground text-sm">{subtitle}</p>
            ) : null}
          </div>

          {pointLabel ? (
            <div className="rounded-lg border border-white/10 bg-[#242424] p-3 text-sm text-slate-300">
              <MapPin className="text-primary mb-1 h-4 w-4" />
              {pointLabel}
            </div>
          ) : null}

          <nav className="flex flex-row flex-wrap gap-2 md:flex-col">
            {nav.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={item.onClick}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition md:px-4 md:py-3 md:text-lg [&>svg]:h-4 [&>svg]:w-4 md:[&>svg]:h-5 md:[&>svg]:w-5",
                  item.active
                    ? "border-primary/70 bg-primary/20 text-foreground"
                    : "hover:border-primary/60 border-white/10 bg-[#161616] text-slate-300 hover:bg-[#1f1f1f]",
                )}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              logout();
              router.replace("/");
            }}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#161616] text-sm text-slate-300 transition hover:border-rose-400/60 hover:bg-rose-500/15 hover:text-rose-100 md:h-12 md:text-lg"
          >
            <LogOut className="h-5 w-5" />
            Выйти
          </button>
        </aside>

        <section className="min-w-0 rounded-xl bg-[#1c1c1c] p-4 md:p-6">
          <header className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <h1 className="text-2xl font-semibold">{title}</h1>
              <p className="text-muted-foreground text-sm">{session?.name}</p>
            </div>
            {headerActions ? <div>{headerActions}</div> : null}
          </header>
          {children}
        </section>
      </motion.div>
    </div>
  );
}
