import {
  MetricUnit,
  type PrismaClient,
  type UserRole,
} from "../../../generated/prisma";

import { daysInMonth, toIsoDate, toMonthStart } from "@/lib/date";
import { estimateSalary } from "@/lib/salary";

const buildDayColumns = (monthStart: Date) => {
  const totalDays = daysInMonth(monthStart);
  return Array.from({ length: totalDays }, (_, i) => {
    const day = i + 1;
    return new Date(monthStart.getFullYear(), monthStart.getMonth(), day);
  });
};

const buildDirectionRows = ({
  directions,
  pointPlans,
  sales,
  dayColumns,
}: {
  directions: Array<{
    id: string;
    title: string;
    unit: MetricUnit;
    key: string;
  }>;
  pointPlans: Array<{ directionId: string; target: number }>;
  sales: Array<{
    directionId: string;
    quantity: number | null;
    amount: number | null;
    saleDate: Date;
  }>;
  dayColumns: Date[];
}) => {
  const planByDirectionId = new Map(
    pointPlans.map((plan) => [plan.directionId, plan.target]),
  );
  const unitByDirectionId = new Map(
    directions.map((direction) => [direction.id, direction.unit]),
  );
  const totalByDirectionId = new Map<string, number>();
  const dayByDirectionId = new Map<string, Map<string, number>>();

  for (const sale of sales) {
    const unit = unitByDirectionId.get(sale.directionId);
    if (!unit) {
      continue;
    }

    const value =
      unit === MetricUnit.PIECES ? (sale.quantity ?? 0) : (sale.amount ?? 0);
    totalByDirectionId.set(
      sale.directionId,
      (totalByDirectionId.get(sale.directionId) ?? 0) + value,
    );

    const dayKey = toIsoDate(sale.saleDate);
    const directionDay = dayByDirectionId.get(sale.directionId) ?? new Map();
    directionDay.set(dayKey, (directionDay.get(dayKey) ?? 0) + value);
    dayByDirectionId.set(sale.directionId, directionDay);
  }

  const dayKeys = dayColumns.map((day) => toIsoDate(day));

  return directions.map((direction) => {
    const plan = planByDirectionId.get(direction.id) ?? 0;
    const fact = totalByDirectionId.get(direction.id) ?? 0;
    const forecast = plan > 0 ? Math.round((fact / plan) * 100) : 0;
    const directionDays = dayByDirectionId.get(direction.id) ?? new Map();

    const days = dayKeys.map((dayKey) => ({
      date: dayKey,
      value: directionDays.get(dayKey) ?? 0,
    }));

    return {
      directionId: direction.id,
      key: direction.key,
      title: direction.title,
      plan,
      fact,
      forecast,
      unit: direction.unit,
      dayPlan: Math.round(plan / Math.max(dayColumns.length, 1)),
      days,
    };
  });
};

const calcPlanPercent = (rows: Array<{ plan: number; fact: number }>) => {
  const totalPlan = rows.reduce((acc, row) => acc + row.plan, 0);
  const totalFact = rows.reduce((acc, row) => acc + row.fact, 0);
  if (totalPlan === 0) {
    return 0;
  }
  return Math.round((totalFact / totalPlan) * 100);
};

export const getEmployeeDashboard = async (
  db: PrismaClient,
  userId: string,
  monthRef?: Date,
) => {
  const monthStart = toMonthStart(monthRef);
  const monthEnd = new Date(
    monthStart.getFullYear(),
    monthStart.getMonth() + 1,
    1,
  );

  const user = await db.user.findUnique({
    where: { id: userId },
    include: { point: true },
  });

  if (!user?.pointId || !user.point) {
    return null;
  }

  const [directions, pointPlans, sales, personalSales, shifts, employeePlan] =
    await Promise.all([
      db.direction.findMany({ orderBy: { title: "asc" } }),
      db.pointPlan.findMany({
        where: { pointId: user.pointId, monthStart },
      }),
      db.dailySale.findMany({
        where: {
          pointId: user.pointId,
          saleDate: { gte: monthStart, lt: monthEnd },
        },
      }),
      db.dailySale.findMany({
        where: {
          userId: user.id,
          saleDate: { gte: monthStart, lt: monthEnd },
        },
        include: { direction: true },
        orderBy: { saleDate: "asc" },
      }),
      db.shift.findMany({
        where: {
          pointId: user.pointId,
          workDate: { gte: monthStart, lt: monthEnd },
        },
        orderBy: { workDate: "asc" },
        include: {
          assignments: {
            include: { user: true },
          },
        },
      }),
      db.employeePlan.findUnique({
        where: {
          employeeId_monthStart: {
            employeeId: user.id,
            monthStart,
          },
        },
        include: {
          goals: {
            include: { direction: true },
          },
        },
      }),
    ]);

  const dayColumns = buildDayColumns(monthStart);
  const dayKeys = dayColumns.map((date) => toIsoDate(date));

  const directionRows = buildDirectionRows({
    directions,
    pointPlans,
    sales,
    dayColumns,
  });

  const shiftByDate = new Map(
    shifts.map((shift) => [toIsoDate(shift.workDate), shift]),
  );

  const shiftCells = dayKeys.map((key) => {
    const shift = shiftByDate.get(key);
    const assignment = shift?.assignments.find(
      (item) => item.userId === user.id,
    );
    const workingAssignments =
      shift?.assignments.filter((item) => item.hours > 0) ?? [];
    const coworkers = workingAssignments
      .filter((item) => item.userId !== user.id)
      .map((item) => item.user.name);
    const openCount = workingAssignments.filter((item) => item.isOpen).length;
    const closeCount = workingAssignments.filter((item) => item.isClose).length;
    const hasCoverageIssue =
      workingAssignments.length > 0 && (openCount === 0 || closeCount === 0);

    return {
      date: key,
      hours: assignment?.hours ?? 0,
      coworkers,
      isOpen: assignment?.isOpen ?? false,
      isClose: assignment?.isClose ?? false,
      openCount,
      closeCount,
      hasCoverageIssue,
    };
  });

  const totalHours = shiftCells.reduce((acc, item) => acc + item.hours, 0);
  const totalShifts = shiftCells.filter((item) => item.hours > 0).length;

  const personalFactByDirectionId = new Map<string, number>();
  const personalChartByDate = new Map<
    string,
    { pieces: number; money: number }
  >();
  for (const sale of personalSales) {
    const value =
      sale.direction.unit === MetricUnit.PIECES
        ? (sale.quantity ?? 0)
        : (sale.amount ?? 0);
    personalFactByDirectionId.set(
      sale.directionId,
      (personalFactByDirectionId.get(sale.directionId) ?? 0) + value,
    );

    const dayKey = toIsoDate(sale.saleDate);
    const prev = personalChartByDate.get(dayKey) ?? { pieces: 0, money: 0 };
    prev.pieces += sale.quantity ?? 0;
    prev.money += sale.amount ?? 0;
    personalChartByDate.set(dayKey, prev);
  }

  const personalRows = (employeePlan?.goals ?? []).map((goal) => {
    const fact = personalFactByDirectionId.get(goal.directionId) ?? 0;

    return {
      directionId: goal.directionId,
      title: goal.direction.title,
      unit: goal.direction.unit,
      target: goal.target,
      fact,
      progress: goal.target > 0 ? Math.round((fact / goal.target) * 100) : 0,
      isPriority: goal.isPriority,
    };
  });

  const personalPlanPercent = calcPlanPercent(
    personalRows.map((item) => ({ plan: item.target, fact: item.fact })),
  );
  const pointPlanPercent = calcPlanPercent(
    directionRows.map((item) => ({ plan: item.plan, fact: item.fact })),
  );

  const dailyChart = dayKeys.map((key) => ({
    date: key,
    pieces: personalChartByDate.get(key)?.pieces ?? 0,
    money: personalChartByDate.get(key)?.money ?? 0,
  }));

  const creditDirection = directions.find((item) => item.key === "CREDIT");
  const creditAmount = creditDirection
    ? (personalFactByDirectionId.get(creditDirection.id) ?? 0)
    : 0;

  const estimatedSalary = estimateSalary({
    workedHours: totalHours,
    role: user.role,
    pointPlanPercent,
    personalPlanPercent,
    hasCreditsOnPoint: Boolean(creditDirection),
    creditAmount,
  });

  return {
    monthStart: toIsoDate(monthStart),
    user: {
      id: user.id,
      name: user.name,
      code: user.code,
      role: user.role,
    },
    point: {
      id: user.point.id,
      name: user.point.name,
      address: user.point.address,
      code: user.point.code,
    },
    summary: {
      totalHours,
      totalShifts,
      estimatedSalary,
      pointPlanPercent,
      personalPlanPercent,
    },
    shiftCells,
    dayColumns: dayKeys,
    directionRows,
    personalRows,
    dailyChart,
  };
};

export const getDmDashboard = async (
  db: PrismaClient,
  userId: string,
  monthRef?: Date,
) => {
  const monthStart = toMonthStart(monthRef);
  const monthEnd = new Date(
    monthStart.getFullYear(),
    monthStart.getMonth() + 1,
    1,
  );

  const dm = await db.user.findUnique({
    where: { id: userId },
    include: { point: true },
  });

  if (!dm?.pointId || !dm.point || (dm.role !== "DM" && dm.role !== "ADMIN")) {
    return null;
  }

  const [employees, directions, pointPlans, sales, employeePlans, shifts] =
    await Promise.all([
      db.user.findMany({
        where: {
          pointId: dm.pointId,
          role: { in: ["EMPLOYEE", "INTERN", "DM"] },
        },
        orderBy: { name: "asc" },
      }),
      db.direction.findMany({ orderBy: { title: "asc" } }),
      db.pointPlan.findMany({ where: { pointId: dm.pointId, monthStart } }),
      db.dailySale.findMany({
        where: {
          pointId: dm.pointId,
          saleDate: { gte: monthStart, lt: monthEnd },
        },
      }),
      db.employeePlan.findMany({
        where: { pointId: dm.pointId, monthStart },
        include: {
          employee: true,
          goals: { include: { direction: true } },
        },
      }),
      db.shift.findMany({
        where: {
          pointId: dm.pointId,
          workDate: { gte: monthStart, lt: monthEnd },
        },
        include: {
          assignments: true,
        },
        orderBy: { workDate: "asc" },
      }),
    ]);

  const dayColumns = buildDayColumns(monthStart);
  const dayKeys = dayColumns.map((day) => toIsoDate(day));

  const directionRows = buildDirectionRows({
    directions,
    pointPlans,
    sales,
    dayColumns,
  });

  const employeeFactByDirectionId = new Map<string, Map<string, number>>();
  const unitByDirectionId = new Map(
    directions.map((direction) => [direction.id, direction.unit]),
  );

  for (const sale of sales) {
    const unit = unitByDirectionId.get(sale.directionId);
    if (!unit) {
      continue;
    }

    const value =
      unit === MetricUnit.PIECES ? (sale.quantity ?? 0) : (sale.amount ?? 0);
    const factByDirection =
      employeeFactByDirectionId.get(sale.userId) ?? new Map();
    factByDirection.set(
      sale.directionId,
      (factByDirection.get(sale.directionId) ?? 0) + value,
    );
    employeeFactByDirectionId.set(sale.userId, factByDirection);
  }

  const employeePlanById = new Map(
    employeePlans.map((plan) => [plan.employeeId, plan]),
  );

  const hoursByDayByEmployeeId = new Map<string, Map<string, number>>();

  const hoursByEmployeeId = new Map<
    string,
    { hours: number; shifts: number }
  >();
  for (const shift of shifts) {
    const dayKey = toIsoDate(shift.workDate);
    for (const assignment of shift.assignments) {
      const dayByEmployee = hoursByDayByEmployeeId.get(dayKey) ?? new Map();
      dayByEmployee.set(assignment.userId, assignment.hours);
      hoursByDayByEmployeeId.set(dayKey, dayByEmployee);

      const prev = hoursByEmployeeId.get(assignment.userId) ?? {
        hours: 0,
        shifts: 0,
      };
      const next = {
        hours: prev.hours + assignment.hours,
        shifts: prev.shifts + (assignment.hours > 0 ? 1 : 0),
      };
      hoursByEmployeeId.set(assignment.userId, next);
    }
  }

  const people = employees.map((employee) => {
    const plans = employeePlanById.get(employee.id);
    const employeeFacts =
      employeeFactByDirectionId.get(employee.id) ?? new Map();
    const planRows = (plans?.goals ?? []).map((goal) => {
      const fact = employeeFacts.get(goal.directionId) ?? 0;
      return { plan: goal.target, fact };
    });

    const personalPlanPercent = calcPlanPercent(planRows);

    return {
      id: employee.id,
      name: employee.name,
      role: employee.role,
      code: employee.code,
      hours: hoursByEmployeeId.get(employee.id)?.hours ?? 0,
      shifts: hoursByEmployeeId.get(employee.id)?.shifts ?? 0,
      personalPlanPercent,
      isActive: employee.isActive,
    };
  });

  const scheduleRows = people.map((person) => {
    const days = dayKeys.map((key) => {
      const dayByEmployee = hoursByDayByEmployeeId.get(key);
      return {
        date: key,
        hours: dayByEmployee?.get(person.id) ?? 0,
      };
    });

    return {
      employeeId: person.id,
      name: person.name,
      role: person.role,
      hoursTotal: days.reduce((acc, day) => acc + day.hours, 0),
      shiftsTotal: days.filter((day) => day.hours > 0).length,
      days,
    };
  });

  return {
    monthStart: toIsoDate(monthStart),
    point: {
      id: dm.point.id,
      name: dm.point.name,
      address: dm.point.address,
      code: dm.point.code,
    },
    directions: directions.map((item) => ({
      id: item.id,
      title: item.title,
      unit: item.unit,
      key: item.key,
    })),
    directionRows,
    pointPlans,
    employeePlans: employeePlans.map((plan) => ({
      employeeId: plan.employeeId,
      employeeName: plan.employee.name,
      goals: plan.goals.map((goal) => ({
        fact:
          employeeFactByDirectionId
            .get(plan.employeeId)
            ?.get(goal.directionId) ?? 0,
        progress: (() => {
          const fact =
            employeeFactByDirectionId
              .get(plan.employeeId)
              ?.get(goal.directionId) ?? 0;
          return goal.target > 0 ? Math.round((fact / goal.target) * 100) : 0;
        })(),
        directionId: goal.directionId,
        title: goal.direction.title,
        target: goal.target,
        isPriority: goal.isPriority,
      })),
    })),
    people,
    dayColumns: dayKeys,
    scheduleRows,
  };
};

export const getAdminDashboard = async (db: PrismaClient, userId: string) => {
  const admin = await db.user.findUnique({ where: { id: userId } });
  if (!admin || admin.role !== "ADMIN") {
    return null;
  }

  const [points, users] = await Promise.all([
    db.point.findMany({ orderBy: { createdAt: "desc" } }),
    db.user.findMany({
      include: { point: true },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const usersByPointId = new Map<string, typeof users>();
  for (const user of users) {
    if (!user.pointId) {
      continue;
    }
    const pointUsers = usersByPointId.get(user.pointId) ?? [];
    pointUsers.push(user);
    usersByPointId.set(user.pointId, pointUsers);
  }

  const groupedByPoint = points.map((point) => ({
    id: point.id,
    code: point.code,
    name: point.name,
    address: point.address,
    users: (usersByPointId.get(point.id) ?? []).map((user) => ({
      id: user.id,
      name: user.name,
      code: user.code,
      role: user.role as UserRole,
      isActive: user.isActive,
    })),
  }));

  return {
    totals: {
      points: points.length,
      users: users.length,
      employees: users.filter((item) => item.role === "EMPLOYEE").length,
      dms: users.filter((item) => item.role === "DM").length,
    },
    points: groupedByPoint,
  };
};
