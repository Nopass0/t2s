"use client";

import {
  AlertTriangle,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  ClipboardPen,
  ScrollText,
  Settings2,
  SquarePen,
  UserPlus,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { fromIsoDate, toIsoDate, toMonthStart } from "@/lib/date";
import { downloadCsv } from "@/lib/export";
import { roleLabel } from "@/lib/roles";
import { type SessionRole, useAuthStore } from "@/store/auth-store";

type DmResponse = {
  data: {
    monthStart: string;
    point: { id: string; name: string; address: string; code: string };
    dayColumns: string[];
    scheduleRows: Array<{
      employeeId: string;
      name: string;
      role: "DM" | "EMPLOYEE" | "INTERN";
      hoursTotal: number;
      shiftsTotal: number;
      days: Array<{ date: string; hours: number }>;
    }>;
    directionRows: Array<{
      directionId: string;
      title: string;
      plan: number;
      fact: number;
      forecast: number;
    }>;
    directions: Array<{
      id: string;
      title: string;
    }>;
    employeePlans: Array<{
      employeeId: string;
      employeeName: string;
      goals: Array<{
        directionId: string;
        title: string;
        target: number;
        isPriority: boolean;
        fact: number;
        progress: number;
      }>;
    }>;
    people: Array<{
      id: string;
      name: string;
      role: "DM" | "EMPLOYEE" | "INTERN";
      code: string;
      hours: number;
      shifts: number;
      personalPlanPercent: number;
      isActive: boolean;
    }>;
  };
};

type DmTab = "schedule" | "point-plan" | "employee-plan" | "team";

const weekShort = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

const monthLabel = (isoDate: string) => {
  const dt = fromIsoDate(isoDate);
  return dt.toLocaleDateString("ru-RU", { month: "long", year: "numeric" });
};

export default function DmPage() {
  const router = useRouter();
  const { session } = useAuthStore();

  const [tab, setTab] = useState<DmTab>("schedule");
  const [monthStart, setMonthStart] = useState(toIsoDate(toMonthStart()));
  const [data, setData] = useState<DmResponse["data"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [scheduleDirty, setScheduleDirty] = useState(false);
  const [pointPlanDirty, setPointPlanDirty] = useState(false);
  const [employeePlanDirty, setEmployeePlanDirty] = useState(false);

  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [staffName, setStaffName] = useState("");
  const [staffCode, setStaffCode] = useState("");
  const [staffRole, setStaffRole] = useState<"EMPLOYEE" | "INTERN">("EMPLOYEE");

  const loadData = async (targetMonth: string) => {
    if (!session) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/dm/dashboard?userId=${session.userId}&monthStart=${targetMonth}`,
        { cache: "no-store" },
      );
      const json = (await res.json()) as DmResponse & { error?: string };
      if (!res.ok || !json.data) {
        throw new Error(json.error ?? "Не удалось загрузить кабинет ДМ");
      }

      setData(json.data);
      setScheduleDirty(false);
      setPointPlanDirty(false);
      setEmployeePlanDirty(false);
      setSelectedEmployeeId((prev) => {
        if (
          prev &&
          json.data.employeePlans.some((plan) => plan.employeeId === prev)
        ) {
          return prev;
        }

        return json.data.employeePlans[0]?.employeeId ?? "";
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Не удалось загрузить кабинет ДМ",
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

    if (session.role !== "DM" && session.role !== "ADMIN") {
      router.replace("/");
      return;
    }

    void loadData(monthStart);
  }, [session?.userId, monthStart]);

  const saveSchedule = async () => {
    if (!data) return;
    setSaving(true);
    await fetch("/api/dm/schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pointId: data.point.id,
        monthStart,
        rows: data.scheduleRows.flatMap((row) =>
          row.days.map((day) => ({
            employeeId: row.employeeId,
            date: day.date,
            hours: day.hours,
          })),
        ),
      }),
    });
    setScheduleDirty(false);
    setSaving(false);
  };

  const savePointPlan = async () => {
    if (!data) return;
    setSaving(true);
    await fetch("/api/dm/point-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pointId: data.point.id,
        monthStart,
        items: data.directionRows.map((row) => ({
          directionId: row.directionId,
          target: row.plan,
        })),
      }),
    });
    setPointPlanDirty(false);
    setSaving(false);
  };

  const saveEmployeePlan = async () => {
    if (!data || !selectedEmployeeId) return;
    const selected = data.employeePlans.find(
      (plan) => plan.employeeId === selectedEmployeeId,
    );
    if (!selected) return;

    setSaving(true);
    await fetch("/api/dm/employee-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pointId: data.point.id,
        employeeId: selectedEmployeeId,
        monthStart,
        items: selected.goals.map((goal) => ({
          directionId: goal.directionId,
          target: goal.target,
          isPriority: goal.isPriority,
        })),
      }),
    });
    setEmployeePlanDirty(false);
    setSaving(false);
  };

  const addStaff = async () => {
    if (!data) return;
    setSaving(true);

    await fetch("/api/dm/staff", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pointId: data.point.id,
        name: staffName,
        code: staffCode,
        role: staffRole,
      }),
    });

    setStaffName("");
    setStaffCode("");
    await loadData(monthStart);
    setSaving(false);
  };

  const toggleActive = async (id: string, nextValue: boolean) => {
    if (!data) return;
    const staff = data.people.find((person) => person.id === id);
    if (!staff) return;

    setSaving(true);
    await fetch("/api/dm/staff", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        name: staff.name,
        code: staff.code,
        role: staff.role,
        isActive: nextValue,
      }),
    });

    await loadData(monthStart);
    setSaving(false);
  };

  const selectedPlan = useMemo(
    () =>
      data?.employeePlans.find(
        (plan) => plan.employeeId === selectedEmployeeId,
      ),
    [data?.employeePlans, selectedEmployeeId],
  );

  const todayIso = toIsoDate(new Date());

  const exportSchedule = () => {
    if (!data) return;

    const headers = [
      "Сотрудник",
      "Роль",
      ...data.dayColumns.map((d) => d.slice(8, 10)),
      "Часов",
      "Смен",
    ];

    const rows = data.scheduleRows.map((row) => [
      row.name,
      roleLabel[row.role as SessionRole],
      ...row.days.map((day) => day.hours),
      row.hoursTotal,
      row.shiftsTotal,
    ]);

    downloadCsv(`grafik-dm-${monthStart}.csv`, headers, rows);
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
          Синхронизация кабинета ДМ...
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

  return (
    <AppShell
      title="Кабинет ДМ"
      subtitle="Управление точкой"
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
          {saving ? (
            <span className="ml-2 text-xs text-slate-400">Сохраняю…</span>
          ) : null}
        </div>
      }
      nav={[
        {
          id: "schedule",
          label: "График",
          icon: <CalendarClock className="h-4 w-4" />,
          onClick: () => setTab("schedule"),
          active: tab === "schedule",
        },
        {
          id: "point-plan",
          label: "План точки",
          icon: <ClipboardPen className="h-4 w-4" />,
          onClick: () => setTab("point-plan"),
          active: tab === "point-plan",
        },
        {
          id: "employee-plan",
          label: "Личные планы",
          icon: <SquarePen className="h-4 w-4" />,
          onClick: () => setTab("employee-plan"),
          active: tab === "employee-plan",
        },
        {
          id: "team",
          label: "Команда",
          icon: <Users className="h-4 w-4" />,
          onClick: () => setTab("team"),
          active: tab === "team",
        },
        {
          id: "motivation",
          label: "Мотивация",
          icon: <ScrollText className="h-4 w-4" />,
          onClick: () => router.push("/motivation-rules"),
        },
      ]}
    >
      <Tabs value={tab} onValueChange={(value) => setTab(value as DmTab)}>
        <TabsContent value="schedule">
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="flex flex-row items-center justify-between gap-3">
              <div>
                <CardTitle>План-график месяца</CardTitle>
                <CardDescription>
                  После изменения нажмите «Сохранить в БД».
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => void saveSchedule()}
                  disabled={!scheduleDirty || saving}
                >
                  Сохранить в БД
                </Button>
                <Button variant="outline" size="sm" onClick={exportSchedule}>
                  Экспорт CSV
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max text-base">
                    <thead>
                      <tr className="bg-[#2a2a2a]">
                        <th className="sticky left-0 z-20 min-w-[280px] bg-[#2a2a2a] p-3 text-left">
                          ФИО сотрудника
                        </th>
                        {data.dayColumns.map((day) => (
                          <th
                            key={day}
                            className={`min-w-[58px] p-2 text-center ${day === todayIso ? "bg-primary/15" : ""}`}
                          >
                            {day.slice(8, 10)}
                          </th>
                        ))}
                        <th className="min-w-[110px] p-3">Часов</th>
                        <th className="min-w-[100px] p-3">Смен</th>
                      </tr>
                      <tr className="bg-[#262626] text-slate-400">
                        <th className="sticky left-0 z-20 bg-[#262626] p-2 text-left text-sm">
                          Роль
                        </th>
                        {data.dayColumns.map((day) => {
                          const weekday =
                            weekShort[fromIsoDate(day).getDay()] ?? "";
                          return (
                            <th
                              key={`${day}-week`}
                              className={`p-2 text-sm font-normal ${day === todayIso ? "bg-primary/10" : ""}`}
                            >
                              {weekday}
                            </th>
                          );
                        })}
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {data.scheduleRows.map((row) => (
                        <tr
                          key={row.employeeId}
                          className="odd:bg-[#232323] even:bg-[#1f1f1f]"
                        >
                          <td className="sticky left-0 z-10 bg-[#232323] p-3">
                            <p className="font-semibold">{row.name}</p>
                            <p className="text-sm text-slate-400 uppercase">
                              {roleLabel[row.role as SessionRole]}
                            </p>
                          </td>
                          {row.days.map((day) => (
                            <td
                              key={day.date}
                              className={`p-2 ${day.date === todayIso ? "bg-primary/10" : ""}`}
                            >
                              <Input
                                value={day.hours}
                                onChange={(e) => {
                                  const next = Math.min(
                                    16,
                                    Math.max(0, Number(e.target.value) || 0),
                                  );
                                  setData((prev) => {
                                    if (!prev) return prev;

                                    const nextSnapshot = {
                                      ...prev,
                                      scheduleRows: prev.scheduleRows.map(
                                        (item) => {
                                          if (
                                            item.employeeId !== row.employeeId
                                          )
                                            return item;
                                          const nextDays = item.days.map((d) =>
                                            d.date === day.date
                                              ? { ...d, hours: next }
                                              : d,
                                          );
                                          return {
                                            ...item,
                                            days: nextDays,
                                            hoursTotal: nextDays.reduce(
                                              (acc, x) => acc + x.hours,
                                              0,
                                            ),
                                            shiftsTotal: nextDays.filter(
                                              (x) => x.hours > 0,
                                            ).length,
                                          };
                                        },
                                      ),
                                    };
                                    setScheduleDirty(true);
                                    return nextSnapshot;
                                  });
                                }}
                                type="number"
                                min={0}
                                max={16}
                                className="h-9 rounded-md border-white/10 bg-[#262626] p-1 text-center"
                              />
                            </td>
                          ))}
                          <td className="p-3 text-center font-semibold">
                            {row.hoursTotal}
                          </td>
                          <td className="p-3 text-center font-semibold">
                            {row.shiftsTotal}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="point-plan">
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader>
              <CardTitle>План точки по направлениям</CardTitle>
              <CardDescription>
                После изменения нажмите «Сохранить в БД».
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-3 flex justify-end">
                <Button
                  size="sm"
                  onClick={() => void savePointPlan()}
                  disabled={!pointPlanDirty || saving}
                >
                  Сохранить в БД
                </Button>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[920px] text-base">
                    <thead>
                      <tr className="bg-[#2a2a2a]">
                        <th className="p-3 text-left">Направление</th>
                        <th className="p-3">План</th>
                        <th className="p-3">Факт</th>
                        <th className="p-3">Прогноз</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.directionRows.map((row) => (
                        <tr
                          key={row.directionId}
                          className="odd:bg-[#232323] even:bg-[#1f1f1f]"
                        >
                          <td className="p-3 font-medium">{row.title}</td>
                          <td className="p-3">
                            <Input
                              type="number"
                              min={0}
                              value={row.plan}
                              className="h-10 rounded-md border-white/10 bg-[#262626]"
                              onChange={(e) => {
                                const next = Number(e.target.value) || 0;
                                setData((prev) => {
                                  if (!prev) return prev;

                                  const nextSnapshot = {
                                    ...prev,
                                    directionRows: prev.directionRows.map(
                                      (item) =>
                                        item.directionId === row.directionId
                                          ? {
                                              ...item,
                                              plan: next,
                                              forecast:
                                                next > 0
                                                  ? Math.round(
                                                      (item.fact / next) * 100,
                                                    )
                                                  : 0,
                                            }
                                          : item,
                                    ),
                                  };
                                  setPointPlanDirty(true);
                                  return nextSnapshot;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3 text-right">
                            {Math.round(row.fact).toLocaleString("ru-RU")}
                          </td>
                          <td
                            className={`p-3 text-right ${row.forecast >= 100 ? "text-blue-300" : "text-rose-300"}`}
                          >
                            {row.forecast}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employee-plan">
          <Card className="rounded-lg bg-[#1c1c1c]">
            <CardHeader className="flex flex-row items-center justify-between gap-3">
              <div>
                <CardTitle>Личный план сотрудника</CardTitle>
                <CardDescription>
                  Внесите правки и нажмите «Сохранить в БД».
                </CardDescription>
              </div>
              <NativeSelect
                value={selectedEmployeeId}
                onChange={(e) => setSelectedEmployeeId(e.target.value)}
                className="w-[300px] border-white/10 bg-[#262626]"
              >
                <NativeSelectOption value="" disabled>
                  Выберите сотрудника
                </NativeSelectOption>
                {data.employeePlans.map((plan) => (
                  <NativeSelectOption key={plan.employeeId} value={plan.employeeId}>
                    {plan.employeeName}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </CardHeader>
            <CardContent>
              <div className="mb-3 flex justify-end">
                <Button
                  size="sm"
                  onClick={() => void saveEmployeePlan()}
                  disabled={!employeePlanDirty || saving || !selectedPlan}
                >
                  Сохранить в БД
                </Button>
              </div>
              {!selectedPlan ? (
                <p className="text-sm text-slate-400">
                  Выберите сотрудника для редактирования плана
                </p>
              ) : (
                <div className="grid gap-2 md:grid-cols-2">
                  {selectedPlan.goals.map((goal) => (
                    <div
                      key={goal.directionId}
                      className="grid grid-cols-[1fr_120px_140px] items-center gap-3 rounded-md border border-white/10 bg-[#242424] p-3 text-base"
                    >
                      <div>
                        <p className="truncate font-semibold">{goal.title}</p>
                        <p className="text-xs text-slate-400">
                          Факт: {Math.round(goal.fact).toLocaleString("ru-RU")}{" "}
                          • {goal.progress}%
                        </p>
                      </div>
                      <Input
                        type="number"
                        value={goal.target}
                        min={0}
                        className="h-9 rounded-md border-white/10 bg-[#262626]"
                        onChange={(e) => {
                          const next = Number(e.target.value) || 0;
                          setData((prev) => {
                            if (!prev) return prev;
                            const nextSnapshot = {
                              ...prev,
                              employeePlans: prev.employeePlans.map((plan) =>
                                plan.employeeId === selectedPlan.employeeId
                                  ? {
                                      ...plan,
                                      goals: plan.goals.map((item) =>
                                        item.directionId === goal.directionId
                                          ? { ...item, target: next }
                                          : item,
                                      ),
                                    }
                                  : plan,
                              ),
                            };
                            setEmployeePlanDirty(true);
                            return nextSnapshot;
                          });
                        }}
                      />
                      <label className="flex items-center gap-3 text-base">
                        <Checkbox
                          checked={goal.isPriority}
                          onCheckedChange={(checked) => {
                            setData((prev) => {
                              if (!prev) return prev;
                              const nextSnapshot = {
                                ...prev,
                                employeePlans: prev.employeePlans.map((plan) =>
                                  plan.employeeId === selectedPlan.employeeId
                                    ? {
                                        ...plan,
                                        goals: plan.goals.map((item) =>
                                          item.directionId === goal.directionId
                                            ? {
                                                ...item,
                                                isPriority: Boolean(checked),
                                              }
                                            : item,
                                        ),
                                      }
                                    : plan,
                                ),
                              };
                              setEmployeePlanDirty(true);
                              return nextSnapshot;
                            });
                          }}
                        />
                        Приоритет
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-lg bg-[#1c1c1c]">
              <CardHeader>
                <CardTitle>Сотрудники точки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {data.people.map((person) => {
                  const personal = data.employeePlans.find(
                    (p) => p.employeeId === person.id,
                  );
                  const priorityDone = (personal?.goals ?? []).filter(
                    (g) => g.isPriority && g.progress >= 100,
                  ).length;
                  const priorityTotal = (personal?.goals ?? []).filter(
                    (g) => g.isPriority,
                  ).length;

                  return (
                    <div
                      key={person.id}
                      className="flex items-center justify-between rounded-md border border-white/10 bg-[#242424] p-3 text-base"
                    >
                      <div>
                        <p className="font-semibold">{person.name}</p>
                        <p className="text-sm text-slate-400">
                          {person.code} •{" "}
                          {roleLabel[person.role as SessionRole]}
                        </p>
                        <p className="text-xs text-slate-400">
                          Личный план: {person.personalPlanPercent}% •
                          Приоритеты: {priorityDone}/{priorityTotal}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {person.personalPlanPercent}%
                        </Badge>
                        <Button
                          size="sm"
                          variant={person.isActive ? "secondary" : "outline"}
                          onClick={() =>
                            toggleActive(person.id, !person.isActive)
                          }
                        >
                          {person.isActive ? "Отключить" : "Включить"}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="rounded-lg bg-[#1c1c1c]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="text-primary h-4 w-4" />
                  Добавить сотрудника
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Label>Имя</Label>
                  <Input
                    value={staffName}
                    onChange={(e) => setStaffName(e.target.value)}
                    className="border-white/10 bg-[#262626]"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Код (7 символов)</Label>
                  <Input
                    value={staffCode}
                    onChange={(e) => setStaffCode(e.target.value.toUpperCase())}
                    className="border-white/10 bg-[#262626]"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Роль</Label>
                  <NativeSelect
                    value={staffRole}
                    onChange={(e) =>
                      setStaffRole(e.target.value as "EMPLOYEE" | "INTERN")
                    }
                    className="w-full border-white/10 bg-[#262626]"
                  >
                    <NativeSelectOption value="EMPLOYEE">
                      Сотрудник
                    </NativeSelectOption>
                    <NativeSelectOption value="INTERN">Стажер</NativeSelectOption>
                  </NativeSelect>
                </div>
                <Button className="w-full" onClick={addStaff} disabled={saving}>
                  <Settings2 className="mr-2 h-4 w-4" />
                  Создать
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
}
