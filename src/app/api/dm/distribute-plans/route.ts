import { NextResponse } from "next/server";

import { fromIsoDate } from "@/lib/date";
import { distributeEmployeePlansSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = distributeEmployeePlansSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { pointId, monthStart: monthStartStr } = parsed.data;
  const monthStart = fromIsoDate(monthStartStr);

  const [employees, pointPlans] = await Promise.all([
    db.user.findMany({
      where: {
        pointId,
        role: { in: ["EMPLOYEE", "INTERN", "DM"] },
      },
      orderBy: { name: "asc" },
    }),
    db.pointPlan.findMany({
      where: { pointId, monthStart },
    }),
  ]);

  if (employees.length === 0) {
    return NextResponse.json({ ok: true });
  }

  if (pointPlans.length === 0) {
    return NextResponse.json(
      { error: "Сначала задайте план точки" },
      { status: 400 },
    );
  }

  const employeeCount = employees.length;

  for (const employee of employees) {
    const existingPlan = await db.employeePlan.findUnique({
      where: {
        employeeId_monthStart: {
          employeeId: employee.id,
          monthStart,
        },
      },
      include: { goals: true },
    });

    const employeePlan = await db.employeePlan.upsert({
      where: {
        employeeId_monthStart: {
          employeeId: employee.id,
          monthStart,
        },
      },
      update: { pointId },
      create: {
        pointId,
        employeeId: employee.id,
        monthStart,
      },
    });

    const existingGoalsByDirectionId = new Map(
      (existingPlan?.goals ?? []).map((goal) => [goal.directionId, goal]),
    );

    await db.$transaction(
      pointPlans.map((plan) => {
        const target = Math.ceil(plan.target / employeeCount);
        const existingGoal = existingGoalsByDirectionId.get(plan.directionId);

        return db.personalPlanGoal.upsert({
          where: {
            employeePlanId_directionId: {
              employeePlanId: employeePlan.id,
              directionId: plan.directionId,
            },
          },
          update: { target },
          create: {
            employeePlanId: employeePlan.id,
            directionId: plan.directionId,
            target,
            isPriority: existingGoal?.isPriority ?? false,
          },
        });
      }),
    );
  }

  return NextResponse.json({ ok: true });
}
