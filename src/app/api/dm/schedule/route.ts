import { NextResponse } from "next/server";

import { fromIsoDate } from "@/lib/date";
import { updateScheduleSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = updateScheduleSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { pointId, monthStart, rows } = parsed.data;

  for (const row of rows) {
    const workDate = fromIsoDate(row.date);
    const shift = await db.shift.upsert({
      where: {
        pointId_workDate: {
          pointId,
          workDate,
        },
      },
      update: {},
      create: {
        pointId,
        workDate,
      },
    });

    if (row.hours === 0) {
      await db.shiftAssignment.deleteMany({
        where: {
          shiftId: shift.id,
          userId: row.employeeId,
        },
      });
      continue;
    }

    await db.shiftAssignment.upsert({
      where: {
        shiftId_userId: {
          shiftId: shift.id,
          userId: row.employeeId,
        },
      },
      update: {
        hours: row.hours,
      },
      create: {
        shiftId: shift.id,
        userId: row.employeeId,
        hours: row.hours,
      },
    });
  }

  return NextResponse.json({ ok: true, monthStart });
}
