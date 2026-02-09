"use client";

import {
  AlertTriangle,
  BarChart3,
  ClipboardCopy,
  Clock3,
  CalendarRange,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  LayoutDashboard,
  LoaderCircle,
  PlusCircle,
  ReceiptText,
  ScrollText,
  Target,
  UserRound,
  Wallet,
} from "lucide-react";
import { toBlob } from "html-to-image";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AppShell } from "@/components/dashboard/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { fromIsoDate, toIsoDate, toMonthStart } from "@/lib/date";
import { downloadCsv } from "@/lib/export";
import { useAuthStore } from "@/store/auth-store";

type EmployeeDashboardResponse = {
  data: {
    monthStart: string;
    user: { id: string; name: string; code: string; role: string };
    point: { id: string; name: string; address: string; code: string };
    summary: {
      totalHours: number;
      totalShifts: number;
      estimatedSalary: number;
      pointPlanPercent: number;
      personalPlanPercent: number;
    };
    shiftCells: Array<{
      date: string;
      hours: number;
      coworkers: string[];
      isOpen: boolean;
      isClose: boolean;
      openCount: number;
      closeCount: number;
      hasCoverageIssue: boolean;
    }>;
    dayColumns: string[];
    directionRows: Array<{
      directionId: string;
      key: string;
      title: string;
      plan: number;
      fact: number;
      forecast: number;
      dayPlan: number;
      unit: "PIECES" | "MONEY";
      days: Array<{ date: string; value: number }>;
    }>;
    personalRows: Array<{
      directionId: string;
      title: string;
      unit: "PIECES" | "MONEY";
      target: number;
      fact: number;
      progress: number;
      isPriority: boolean;
    }>;
    dailyChart: Array<{ date: string; pieces: number; money: number }>;
  };
  error?: string;
};

type EmployeeTab =
  | "overview"
  | "schedule"
  | "point-plan"
  | "personal"
  | "stats";

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const monthLabel = (isoDate: string) => {
  const dt = fromIsoDate(isoDate);
  return dt.toLocaleDateString("ru-RU", { month: "long", year: "numeric" });
};

const dayLabel = (isoDate: string) => {
  const dt = fromIsoDate(isoDate);
  return dt.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit" });
};

export default function EmployeePage() {
  const router = useRouter();
  const { session } = useAuthStore();

  const [tab, setTab] = useState<EmployeeTab>("overview");
  const [data, setData] = useState<EmployeeDashboardResponse["data"] | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [monthStart, setMonthStart] = useState(toIsoDate(toMonthStart()));

  const [saleOpen, setSaleOpen] = useState(false);
  const [directionId, setDirectionId] = useState("");
  const [quantity, setQuantity] = useState("0");
  const [amount, setAmount] = useState("0");
  const [savingSale, setSavingSale] = useState(false);

  const [statsDirectionId, setStatsDirectionId] = useState("");
  const [savingShiftDate, setSavingShiftDate] = useState("");
  const [copyingPlanScreenshot, setCopyingPlanScreenshot] = useState(false);

  const pointPlanScrollerRef = useRef<HTMLDivElement | null>(null);
  const pointPlanCaptureRef = useRef<HTMLDivElement | null>(null);
  const todayPlanHeaderRef = useRef<HTMLTableCellElement | null>(null);

  const loadData = async (targetMonth: string) => {
    if (!session) {
      router.replace("/");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `/api/employee/dashboard?userId=${session.userId}&monthStart=${targetMonth}`,
        { cache: "no-store" },
      );
      const json = (await res.json()) as EmployeeDashboardResponse;

      if (!res.ok || !json.data) {
        throw new Error(json.error ?? "Не удалось загрузить данные сотрудника");
      }

      setData(json.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Не удалось загрузить данные сотрудника",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!session) {
      router.replace("/");
      return;
    }

    if (!["EMPLOYEE", "INTERN", "DM"].includes(session.role)) {
      router.replace("/");
      return;
    }

    void loadData(monthStart);
  }, [session?.userId, monthStart]);

  useEffect(() => {
    if (!data || statsDirectionId) {
      return;
    }
    setStatsDirectionId(data.directionRows[0]?.directionId ?? "");
  }, [data, statsDirectionId]);

  useEffect(() => {
    if (!data || directionId) {
      return;
    }
    setDirectionId(data.directionRows[0]?.directionId ?? "");
  }, [data, directionId]);

  useEffect(() => {
    if (tab !== "point-plan") {
      return;
    }

    const scroller = pointPlanScrollerRef.current;
    const todayCell = todayPlanHeaderRef.current;
    if (!scroller || !todayCell) {
      return;
    }

    const targetLeft = Math.max(0, todayCell.offsetLeft - 520);
    scroller.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [tab, data?.dayColumns]);

  const selectedDirection = useMemo(
    () => data?.directionRows.find((row) => row.directionId === directionId),
    [data?.directionRows, directionId],
  );

  const selectedStatsDirection = useMemo(
    () =>
      data?.directionRows.find((row) => row.directionId === statsDirectionId),
    [data?.directionRows, statsDirectionId],
  );

  const statsData = useMemo(() => {
    if (!selectedStatsDirection) {
      return [];
    }

    return selectedStatsDirection.days.map((day) => ({
      date: day.date,
      fact: day.value,
      plan: selectedStatsDirection.dayPlan,
    }));
  }, [selectedStatsDirection]);

  const shiftByDate = useMemo(() => {
    return new Map((data?.shiftCells ?? []).map((item) => [item.date, item]));
  }, [data?.shiftCells]);

  const calendarGrid = useMemo(() => {
    if (!data?.dayColumns.length) {
      return [] as Array<{ type: "empty" } | { type: "day"; date: string }>;
    }

    const first = fromIsoDate(data.dayColumns[0]!);
    const mondayBasedOffset = (first.getDay() + 6) % 7;
    const result: Array<{ type: "empty" } | { type: "day"; date: string }> = [];

    for (let i = 0; i < mondayBasedOffset; i += 1) {
      result.push({ type: "empty" });
    }

    for (const date of data.dayColumns) {
      result.push({ type: "day", date });
    }

    while (result.length % 7 !== 0) {
      result.push({ type: "empty" });
    }

    return result;
  }, [data?.dayColumns]);

  const getShiftStatus = (
    shift: EmployeeDashboardResponse["data"]["shiftCells"][number] | undefined,
  ) => {
    if (!shift || shift.hours === 0) {
      return {
        label: "Выходной",
        textClass: "text-slate-400",
        badgeClass: "border-white/10 bg-[#2a2a2a] text-slate-300",
      };
    }
    if (shift.isOpen) {
      return {
        label: "Открываюсь",
        textClass: "text-emerald-300",
        badgeClass: "border-emerald-300/40 bg-emerald-500/15 text-emerald-200",
      };
    }
    if (shift.isClose) {
      return {
        label: "Закрываюсь",
        textClass: "text-amber-300",
        badgeClass: "border-amber-300/40 bg-amber-500/15 text-amber-200",
      };
    }
    return {
      label: "Рабочая смена",
      textClass: "text-slate-200",
      badgeClass: "border-primary/40 bg-primary/15 text-primary",
    };
  };

  const getCoverageWarning = (
    shift: EmployeeDashboardResponse["data"]["shiftCells"][number] | undefined,
  ) => {
    if (!shift?.hasCoverageIssue) {
      return "";
    }
    if (shift.openCount === 0 && shift.closeCount === 0) {
      return "Нужны и открывающий, и закрывающий";
    }
    if (shift.openCount === 0) {
      return "Нет сотрудника на открытие";
    }
    return "Нет сотрудника на закрытие";
  };

  const handleHorizontalWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) {
      return;
    }
    e.currentTarget.scrollLeft += e.deltaY;
    e.preventDefault();
  };

  const updateShiftRole = async (date: string, role: "OPEN" | "CLOSE") => {
    if (!session) {
      return;
    }

    setSavingShiftDate(date);
    setError("");

    try {
      const res = await fetch("/api/employee/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: session.userId,
          date,
          role,
        }),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        error?: string;
        shiftCell?: EmployeeDashboardResponse["data"]["shiftCells"][number];
      };

      if (!res.ok || !json.ok || !json.shiftCell) {
        throw new Error(json.error ?? "Не удалось сохранить роль смены");
      }
      const nextCell = json.shiftCell;

      setData((prev) => {
        if (!prev) {
          return prev;
        }
        return {
          ...prev,
          shiftCells: prev.shiftCells.map((item) =>
            item.date === date ? nextCell : item,
          ),
        };
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Не удалось сохранить роль смены",
      );
    } finally {
      setSavingShiftDate("");
    }
  };

  const copyPointPlanScreenshot = async () => {
    if (copyingPlanScreenshot) {
      return;
    }

    const scroller = pointPlanScrollerRef.current;
    const captureNode = pointPlanCaptureRef.current;
    const todayCell = todayPlanHeaderRef.current;

    if (!scroller || !captureNode) {
      return;
    }

    setCopyingPlanScreenshot(true);
    setError("");

    const previousScrollLeft = scroller.scrollLeft;
    try {
      if (todayCell) {
        scroller.scrollTo({ left: Math.max(0, todayCell.offsetLeft - 520) });
        await new Promise((resolve) => setTimeout(resolve, 140));
      }

      const captureWidth = Math.max(captureNode.clientWidth, 1600);
      const captureHeight = Math.round(
        (captureNode.clientHeight * captureWidth) /
          Math.max(captureNode.clientWidth, 1),
      );

      const blob = await toBlob(captureNode, {
        width: captureNode.clientWidth,
        height: captureNode.clientHeight,
        canvasWidth: captureWidth,
        canvasHeight: captureHeight,
        pixelRatio: 2,
        backgroundColor: "#1c1c1c",
        cacheBust: true,
      });

      if (!blob) {
        throw new Error("Не удалось сформировать изображение");
      }

      if (navigator.clipboard && typeof ClipboardItem !== "undefined") {
        await navigator.clipboard.write([
          new ClipboardItem({ [blob.type]: blob }),
        ]);
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `plan-tochki-${monthStart}.png`;
        link.click();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Не удалось скопировать скрин таблицы",
      );
    } finally {
      scroller.scrollTo({ left: previousScrollLeft });
      setCopyingPlanScreenshot(false);
    }
  };

  const submitSale = async () => {
    if (!session || !data || !selectedDirection) {
      return;
    }

    const payload = {
      userId: session.userId,
      directionId,
      quantity:
        selectedDirection.unit === "PIECES" ? Number(quantity) || 0 : null,
      amount: selectedDirection.unit === "MONEY" ? Number(amount) || 0 : null,
    };

    setSavingSale(true);
    const res = await fetch("/api/employee/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      await loadData(monthStart);
      setQuantity("0");
      setAmount("0");
      setSaleOpen(false);
    }

    setSavingSale(false);
  };

  const exportPointPlan = () => {
    if (!data) return;

    const headers = [
      "Направление",
      "План",
      "Факт",
      "План/день",
      "Прогноз",
      ...data.dayColumns.map((d) => dayLabel(d)),
    ];

    const rows = data.directionRows.map((row) => [
      row.title,
      row.plan,
      Math.round(row.fact),
      row.dayPlan,
      `${row.forecast}%`,
      ...row.days.map((day) => (day.value === 0 ? "" : Math.round(day.value))),
    ]);

    downloadCsv(`plan-tochki-${monthStart}.csv`, headers, rows);
  };

  const exportSchedule = () => {
    if (!data) return;

    const headers = ["Дата", "День", "Часы", "Статус", "Коллеги"];
    const rows = data.dayColumns.map((date) => {
      const shift = shiftByDate.get(date);
      const status = getShiftStatus(shift).label;

      return [
        date,
        fromIsoDate(date).toLocaleDateString("ru-RU", { weekday: "long" }),
        shift?.hours ?? 0,
        status,
        shift?.coworkers.join(", ") || "-",
      ];
    });

    downloadCsv(`grafik-${monthStart}.csv`, headers, rows);
  };

  const goPrevMonth = () => {
    const dt = fromIsoDate(monthStart);
    setMonthStart(toIsoDate(new Date(dt.getFullYear(), dt.getMonth() - 1, 1)));
  };

  const goNextMonth = () => {
    const dt = fromIsoDate(monthStart);
    setMonthStart(toIsoDate(new Date(dt.getFullYear(), dt.getMonth() + 1, 1)));
  };

  if (!session) {
    return null;
  }

  if (loading && !data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#101010] p-8">
        <div className="rounded-lg border border-white/10 bg-[#1c1c1c] px-5 py-4 text-base text-slate-300">
          Синхронизация сводки...
        </div>
      </main>
    );
  }

  if (error && !data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#101010] p-8">
        <div className="rounded-lg border border-rose-400/30 bg-[#1c1c1c] p-5 text-slate-200">
          <p className="mb-3 flex items-center gap-2 text-base">
            <AlertTriangle className="h-4 w-4 text-rose-300" />
            {error}
          </p>
          <Button onClick={() => void loadData(monthStart)}>Повторить</Button>
        </div>
      </main>
    );
  }

  if (!data) {
    return null;
  }

  const todayIso = toIsoDate(new Date());

  return (
    <AppShell
      title="Личный кабинет"
      subtitle="Сотрудник"
      pointLabel={`${data.point.name} • ${data.point.address}`}
      headerActions={
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={goPrevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="rounded-md border border-white/10 bg-[#242424] px-3 py-1 text-sm text-slate-200">
            {monthLabel(monthStart)}
          </div>
          <Button variant="outline" size="sm" onClick={goNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button className="ml-2" onClick={() => setSaleOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Продажа
          </Button>
        </div>
      }
      nav={[
        {
          id: "overview",
          label: "Сводка",
          icon: <LayoutDashboard className="h-4 w-4" />,
          onClick: () => setTab("overview"),
          active: tab === "overview",
        },
        {
          id: "schedule",
          label: "График",
          icon: <CalendarRange className="h-4 w-4" />,
          onClick: () => setTab("schedule"),
          active: tab === "schedule",
        },
        {
          id: "point-plan",
          label: "План точки",
          icon: <ClipboardList className="h-4 w-4" />,
          onClick: () => setTab("point-plan"),
          active: tab === "point-plan",
        },
        {
          id: "personal-plan",
          label: "Личный план",
          icon: <ClipboardList className="h-4 w-4" />,
          onClick: () => setTab("personal"),
          active: tab === "personal",
        },
        {
          id: "stats",
          label: "Статистика",
          icon: <BarChart3 className="h-4 w-4" />,
          onClick: () => setTab("stats"),
          active: tab === "stats",
        },
        {
          id: "motivation",
          label: "Мотивация",
          icon: <ScrollText className="h-4 w-4" />,
          onClick: () => router.push("/motivation-rules"),
        },
      ]}
    >
      <Tabs value={tab} onValueChange={(value) => setTab(value as EmployeeTab)}>
        {error ? (
          <div className="mb-3 rounded-md border border-rose-400/35 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
            {error}
          </div>
        ) : null}
        <TabsContent value="overview" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-3 md:grid-cols-4"
          >
            <Card className="rounded-lg bg-[#1c1c1c]">
              <CardHeader className="pb-2">
                <CardDescription className="flex items-center justify-between gap-2">
                  <span>Сотрудник</span>
                  <UserRound className="h-4 w-4 text-slate-400" />
                </CardDescription>
                <CardTitle>{data.user.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300">
                Код: {data.user.code}
              </CardContent>
            </Card>
            <Card className="rounded-lg bg-[#1c1c1c]">
              <CardHeader className="pb-2">
                <CardDescription className="flex items-center justify-between gap-2">
                  <span>Примерный доход</span>
                  <Wallet className="h-4 w-4 text-slate-400" />
                </CardDescription>
                <CardTitle>
                  {data.summary.estimatedSalary.toLocaleString("ru-RU")} ₽
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="rounded-lg bg-[#1c1c1c]">
              <CardHeader className="pb-2">
                <CardDescription className="flex items-center justify-between gap-2">
                  <span>Часы / смены</span>
                  <Clock3 className="h-4 w-4 text-slate-400" />
                </CardDescription>
                <CardTitle>
                  {data.summary.totalHours} / {data.summary.totalShifts}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="rounded-lg bg-[#1c1c1c]">
              <CardHeader className="pb-2">
                <CardDescription className="flex items-center justify-between gap-2">
                  <span>Личный план</span>
                  <Target className="h-4 w-4 text-slate-400" />
                </CardDescription>
                <CardTitle>{data.summary.personalPlanPercent}%</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>

          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Календарь месяца</CardTitle>
                <CardDescription>{monthLabel(monthStart)}</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={exportSchedule}>
                Экспорт CSV
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-2 grid grid-cols-7 gap-2 text-center text-xs text-slate-400">
                {weekDays.map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarGrid.map((cell, idx) => {
                  if (cell.type === "empty") {
                    return (
                      <div
                        key={`empty-${idx}`}
                        className="h-24 rounded-md bg-[#141414]"
                      />
                    );
                  }

                  const shift = shiftByDate.get(cell.date);
                  const isToday = cell.date === todayIso;
                  const isOff = !shift || shift.hours === 0;
                  const status = getShiftStatus(shift);

                  return (
                    <div
                      key={cell.date}
                      className={`rounded-md border p-2 text-xs ${
                        isToday
                          ? "border-primary/60 bg-primary/15"
                          : "border-white/10 bg-[#242424]"
                      } ${isOff ? "opacity-55" : "opacity-100"}`}
                    >
                      <div className="mb-1 flex items-center justify-between">
                        <span className="font-semibold">
                          {fromIsoDate(cell.date).getDate()}
                        </span>
                        {isToday ? (
                          <Badge variant="outline">Сегодня</Badge>
                        ) : null}
                      </div>
                      <p className={status.textClass}>{status.label}</p>
                      <p>{isOff ? "0 ч" : `${shift.hours} ч`}</p>
                      <p className="mt-1 truncate text-[11px] text-slate-400">
                        Коллеги:{" "}
                        {shift?.coworkers.length
                          ? shift.coworkers.join(", ")
                          : "нет"}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader>
              <CardTitle>Ключевые направления</CardTitle>
              <CardDescription>
                Сильный фокус на приоритеты от ДМ
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 md:grid-cols-2">
              {data.personalRows
                .filter((x) => x.isPriority)
                .map((row) => (
                  <div
                    key={row.directionId}
                    className="rounded-md border border-white/10 bg-[#242424] p-3"
                  >
                    <div className="mb-2 flex items-center justify-between text-base">
                      <span className="font-semibold">{row.title}</span>
                      <Badge className="bg-primary/20 text-primary">
                        Приоритет
                      </Badge>
                    </div>
                    <div className="text-base text-slate-200">
                      Факт: {row.fact.toLocaleString("ru-RU")} из{" "}
                      {row.target.toLocaleString("ru-RU")}
                    </div>
                    <div className="mt-1 text-sm text-slate-400">
                      Выполнение: {row.progress}%
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Календарь смен</CardTitle>
                <CardDescription>
                  Для рабочих дней можно переключать роль открытия/закрытия.
                  Если на дне нет открывающего или закрывающего, карточка
                  подсвечивается красным.
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={exportSchedule}>
                Экспорт CSV
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-3 text-base font-semibold text-slate-200">
                {monthLabel(monthStart)}
              </div>
              <div className="mb-2 grid grid-cols-7 gap-2 text-center text-sm text-slate-400">
                {weekDays.map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarGrid.map((cell, idx) => {
                  if (cell.type === "empty") {
                    return (
                      <div
                        key={`empty-card-${idx}`}
                        className="h-36 rounded-md bg-[#141414]"
                      />
                    );
                  }

                  const shift = shiftByDate.get(cell.date);
                  const isToday = cell.date === todayIso;
                  const isOff = !shift || shift.hours === 0;
                  const hasCoverageIssue = Boolean(shift?.hasCoverageIssue);
                  const coverageWarning = getCoverageWarning(shift);
                  const status = getShiftStatus(shift);

                  if (isOff) {
                    return (
                      <div
                        key={`schedule-${cell.date}`}
                        className={`rounded-lg border border-white/15 bg-[#202020] p-3 text-sm ${
                          isToday ? "ring-primary/45 ring-1" : ""
                        }`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-base font-semibold text-slate-200">
                            {dayLabel(cell.date)}
                          </span>
                          {isToday ? (
                            <Badge variant="outline">Сегодня</Badge>
                          ) : null}
                        </div>
                        <p className="text-xs text-slate-400">
                          Коллеги:{" "}
                          {shift?.coworkers.length
                            ? shift.coworkers.join(", ")
                            : "нет"}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={`schedule-${cell.date}`}
                      className={`rounded-lg border p-3 text-sm ${
                        hasCoverageIssue
                          ? "border-rose-400/60 bg-rose-500/12"
                          : isToday
                            ? "border-primary/60 bg-primary/15"
                            : "border-white/10 bg-[#242424]"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-base font-semibold">
                          {dayLabel(cell.date)}
                        </span>
                        {isToday ? (
                          <Badge variant="outline">Сегодня</Badge>
                        ) : null}
                      </div>
                      <Badge variant="outline" className={status.badgeClass}>
                        {status.label}
                      </Badge>
                      <p className="mt-2 text-slate-200">
                        Часов в смене: {shift?.hours ?? 0}
                      </p>
                      <p className="mt-2 text-xs text-slate-400">
                        Коллеги:{" "}
                        {shift?.coworkers.length
                          ? shift.coworkers.join(", ")
                          : "нет"}
                      </p>
                      {coverageWarning ? (
                        <p className="mt-2 text-xs text-rose-300">
                          {coverageWarning}
                        </p>
                      ) : null}
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          disabled={savingShiftDate === cell.date}
                          className={
                            shift?.isOpen
                              ? "border-emerald-300/70 bg-emerald-500/20 text-emerald-100"
                              : "border-white/15 bg-[#252525]"
                          }
                          onClick={() =>
                            void updateShiftRole(cell.date, "OPEN")
                          }
                        >
                          {savingShiftDate === cell.date && shift?.isOpen ? (
                            <LoaderCircle className="mr-1 h-3.5 w-3.5 animate-spin" />
                          ) : null}
                          Открываю
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          disabled={savingShiftDate === cell.date}
                          className={
                            shift?.isClose
                              ? "border-amber-300/70 bg-amber-500/20 text-amber-100"
                              : "border-white/15 bg-[#252525]"
                          }
                          onClick={() =>
                            void updateShiftRole(cell.date, "CLOSE")
                          }
                        >
                          {savingShiftDate === cell.date && shift?.isClose ? (
                            <LoaderCircle className="mr-1 h-3.5 w-3.5 animate-spin" />
                          ) : null}
                          Закрываю
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="point-plan">
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>План точки</CardTitle>
                <CardDescription>
                  0 в дневных ячейках скрыт для читаемости
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={exportPointPlan}>
                  Экспорт CSV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={copyingPlanScreenshot}
                  onClick={() => void copyPointPlanScreenshot()}
                >
                  {copyingPlanScreenshot ? (
                    <LoaderCircle className="mr-1 h-4 w-4 animate-spin" />
                  ) : (
                    <ClipboardCopy className="mr-1 h-4 w-4" />
                  )}
                  Скопировать график
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div
                ref={pointPlanCaptureRef}
                className="overflow-hidden rounded-xl border border-white/10"
              >
                <div
                  ref={pointPlanScrollerRef}
                  className="app-scrollbar overflow-x-auto pb-2"
                  onWheel={handleHorizontalWheel}
                >
                  <table className="w-full min-w-max text-base">
                    <thead>
                      <tr className="bg-[#2a2a2a]">
                        <th className="sticky left-0 z-30 min-w-[260px] bg-[#2a2a2a] p-3 text-left">
                          Направление
                        </th>
                        <th
                          className="sticky z-30 min-w-[130px] bg-[#2a2a2a] p-3"
                          style={{ left: 260 }}
                        >
                          План
                        </th>
                        <th
                          className="sticky z-30 min-w-[130px] bg-[#2a2a2a] p-3"
                          style={{ left: 390 }}
                        >
                          Факт
                        </th>
                        <th
                          className="sticky z-30 min-w-[140px] bg-[#2a2a2a] p-3"
                          style={{ left: 520 }}
                        >
                          План/день
                        </th>
                        <th
                          className="sticky z-30 min-w-[140px] bg-[#2a2a2a] p-3"
                          style={{ left: 660 }}
                        >
                          Прогноз
                        </th>
                        {data.dayColumns.map((day) => (
                          <th
                            key={day}
                            ref={day === todayIso ? todayPlanHeaderRef : null}
                            className={`min-w-[92px] p-3 text-sm ${
                              day === todayIso ? "bg-primary/15" : ""
                            }`}
                          >
                            {dayLabel(day)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.directionRows.map((row, rowIndex) => (
                        <tr
                          key={row.directionId}
                          className={
                            rowIndex % 2 === 0 ? "bg-[#232323]" : "bg-[#1f1f1f]"
                          }
                        >
                          <td
                            className={`sticky left-0 z-20 p-3 font-medium ${
                              rowIndex % 2 === 0
                                ? "bg-[#232323]"
                                : "bg-[#1f1f1f]"
                            }`}
                          >
                            {row.title}
                          </td>
                          <td
                            className={`sticky z-20 p-3 text-right ${
                              rowIndex % 2 === 0
                                ? "bg-[#232323]"
                                : "bg-[#1f1f1f]"
                            }`}
                            style={{ left: 260 }}
                          >
                            {row.plan.toLocaleString("ru-RU")}
                          </td>
                          <td
                            className={`sticky z-20 p-3 text-right ${
                              rowIndex % 2 === 0
                                ? "bg-[#232323]"
                                : "bg-[#1f1f1f]"
                            }`}
                            style={{ left: 390 }}
                          >
                            {Math.round(row.fact).toLocaleString("ru-RU")}
                          </td>
                          <td
                            className={`sticky z-20 p-3 text-right ${
                              rowIndex % 2 === 0
                                ? "bg-[#232323]"
                                : "bg-[#1f1f1f]"
                            }`}
                            style={{ left: 520 }}
                          >
                            {row.dayPlan.toLocaleString("ru-RU")}
                          </td>
                          <td
                            className={`sticky z-20 p-3 text-right ${
                              rowIndex % 2 === 0
                                ? "bg-[#232323]"
                                : "bg-[#1f1f1f]"
                            } ${
                              row.forecast >= 100
                                ? "text-blue-300"
                                : "text-rose-300"
                            }`}
                            style={{ left: 660 }}
                          >
                            {row.forecast}%
                          </td>
                          {row.days.map((day) => (
                            <td
                              key={day.date}
                              className={`p-3 text-center text-sm text-slate-200 ${
                                day.date === todayIso ? "bg-primary/12" : ""
                              }`}
                            >
                              {day.value === 0
                                ? ""
                                : Math.round(day.value).toLocaleString("ru-RU")}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personal">
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader>
              <CardTitle>Личный план от ДМ</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 md:grid-cols-2">
              {data.personalRows.map((row) => (
                <div
                  key={row.directionId}
                  className="rounded-md border border-white/10 bg-[#242424] p-3 text-base"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="truncate pr-2 font-semibold">{row.title}</p>
                    {row.isPriority ? (
                      <Badge className="bg-primary/20 text-primary">
                        Приоритет
                      </Badge>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between text-base text-slate-200">
                    <span>
                      {row.fact.toLocaleString("ru-RU")} /{" "}
                      {row.target.toLocaleString("ru-RU")}
                    </span>
                    <span>{row.progress}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="flex flex-row items-center justify-between gap-3">
              <div>
                <CardTitle>Динамика по направлению</CardTitle>
                <CardDescription>
                  Выберите направление. Подписи дат и месяца отображаются
                  полностью.
                </CardDescription>
              </div>
              <Select
                value={statsDirectionId}
                onValueChange={setStatsDirectionId}
              >
                <SelectTrigger className="w-[320px] border-white/10 bg-[#262626]">
                  <SelectValue placeholder="Выберите направление" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-[#1f1f1f]">
                  {data.directionRows.map((row) => (
                    <SelectItem key={row.directionId} value={row.directionId}>
                      {row.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsData} barCategoryGap={14}>
                  <CartesianGrid
                    stroke="rgba(170,170,170,0.18)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="date"
                    stroke="rgba(230,230,230,0.7)"
                    tickFormatter={(value: string) =>
                      fromIsoDate(value).toLocaleDateString("ru-RU", {
                        day: "2-digit",
                        month: "2-digit",
                      })
                    }
                  />
                  <YAxis yAxisId="left" stroke="rgba(230,230,230,0.7)" />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.04)" }}
                    labelFormatter={(value: string) =>
                      fromIsoDate(value).toLocaleDateString("ru-RU", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                    }
                    formatter={(value: number, name: string) => [
                      value.toLocaleString("ru-RU"),
                      name,
                    ]}
                    contentStyle={{
                      background: "rgba(28,28,28,0.98)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: 10,
                    }}
                  />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="fact"
                    name="Факт"
                    fill="var(--chart-1)"
                    radius={[6, 6, 0, 0]}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="plan"
                    name="План/день"
                    fill="var(--chart-2)"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={saleOpen} onOpenChange={setSaleOpen}>
        <DialogContent className="border-white/10 bg-[#1c1c1c] sm:max-w-[640px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ReceiptText className="text-primary h-5 w-5" />
              Добавить продажу
            </DialogTitle>
            <DialogDescription>
              Данные сохраняются сразу и обновляют сводку текущего месяца.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3 md:grid-cols-[1fr_220px_auto] md:items-end">
            <div className="space-y-1">
              <Label>Направление</Label>
              <Select value={directionId} onValueChange={setDirectionId}>
                <SelectTrigger className="border-white/15 bg-[#262626]">
                  <SelectValue placeholder="Выберите направление" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-[#1f1f1f]">
                  {data.directionRows.map((row) => (
                    <SelectItem key={row.directionId} value={row.directionId}>
                      {row.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedDirection?.unit === "PIECES" ? (
              <div className="space-y-1">
                <Label>Количество, шт</Label>
                <Input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  min={0}
                  className="border-white/15 bg-[#262626]"
                />
              </div>
            ) : null}

            {selectedDirection?.unit === "MONEY" ? (
              <div className="space-y-1">
                <Label>Сумма, ₽</Label>
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  min={0}
                  className="border-white/15 bg-[#262626]"
                />
              </div>
            ) : null}

            <Button
              disabled={!selectedDirection || savingSale}
              onClick={submitSale}
              className="md:w-[180px]"
            >
              {savingSale ? "Сохраняю..." : "Добавить"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}
