import { NextResponse } from "next/server";

import { fromIsoDate } from "@/lib/date";
import { updatePointPlanSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = updatePointPlanSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { pointId, monthStart, items } = parsed.data;
  const month = fromIsoDate(monthStart);

  await db.$transaction(
    items.map((item) =>
      db.pointPlan.upsert({
        where: {
          pointId_directionId_monthStart: {
            pointId,
            directionId: item.directionId,
            monthStart: month,
          },
        },
        update: { target: item.target },
        create: {
          pointId,
          directionId: item.directionId,
          monthStart: month,
          target: item.target,
        },
      }),
    ),
  );

  return NextResponse.json({ ok: true });
}
