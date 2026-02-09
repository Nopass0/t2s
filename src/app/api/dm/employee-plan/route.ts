import { NextResponse } from "next/server";

import { fromIsoDate } from "@/lib/date";
import { updateEmployeePlanSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = updateEmployeePlanSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { pointId, employeeId, monthStart, items } = parsed.data;
  const month = fromIsoDate(monthStart);

  const employeePlan = await db.employeePlan.upsert({
    where: {
      employeeId_monthStart: {
        employeeId,
        monthStart: month,
      },
    },
    update: { pointId },
    create: {
      pointId,
      employeeId,
      monthStart: month,
    },
  });

  await db.$transaction(
    items.map((item) =>
      db.personalPlanGoal.upsert({
        where: {
          employeePlanId_directionId: {
            employeePlanId: employeePlan.id,
            directionId: item.directionId,
          },
        },
        update: {
          target: item.target,
          isPriority: item.isPriority,
        },
        create: {
          employeePlanId: employeePlan.id,
          directionId: item.directionId,
          target: item.target,
          isPriority: item.isPriority,
        },
      }),
    ),
  );

  return NextResponse.json({ ok: true });
}
