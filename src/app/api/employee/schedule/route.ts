import { NextResponse } from "next/server";

import { fromIsoDate } from "@/lib/date";
import { updateEmployeeShiftRoleSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = updateEmployeeShiftRoleSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { userId, date, role } = parsed.data;
  const workDate = fromIsoDate(date);

  const user = await db.user.findUnique({ where: { id: userId } });
  if (!user?.pointId) {
    return NextResponse.json({ error: "Сотрудник не найден" }, { status: 404 });
  }

  const shift = await db.shift.findUnique({
    where: {
      pointId_workDate: {
        pointId: user.pointId,
        workDate,
      },
    },
    include: {
      assignments: {
        include: { user: true },
      },
    },
  });

  if (!shift) {
    return NextResponse.json(
      { error: "Смена на выбранную дату не найдена" },
      { status: 404 },
    );
  }

  const currentAssignment = shift.assignments.find(
    (item) => item.userId === user.id,
  );
  if (!currentAssignment || currentAssignment.hours <= 0) {
    return NextResponse.json(
      { error: "Нельзя менять роль в выходной день" },
      { status: 400 },
    );
  }

  await db.shiftAssignment.update({
    where: {
      shiftId_userId: {
        shiftId: shift.id,
        userId,
      },
    },
    data: {
      isOpen: role === "OPEN",
      isClose: role === "CLOSE",
    },
  });

  const assignments = await db.shiftAssignment.findMany({
    where: { shiftId: shift.id, hours: { gt: 0 } },
    include: { user: true },
    orderBy: { userId: "asc" },
  });

  const openAssignment = assignments.find((item) => item.isOpen);
  const closeAssignment = assignments.find((item) => item.isClose);

  await db.shift.update({
    where: { id: shift.id },
    data: {
      openById: openAssignment?.userId ?? null,
      closeById: closeAssignment?.userId ?? null,
    },
  });

  const ownAssignment = assignments.find((item) => item.userId === user.id);
  const coworkers = assignments
    .filter((item) => item.userId !== user.id)
    .map((item) => item.user.name);

  const openCount = assignments.filter((item) => item.isOpen).length;
  const closeCount = assignments.filter((item) => item.isClose).length;

  return NextResponse.json({
    ok: true,
    shiftCell: {
      date,
      hours: ownAssignment?.hours ?? 0,
      coworkers,
      isOpen: ownAssignment?.isOpen ?? false,
      isClose: ownAssignment?.isClose ?? false,
      openCount,
      closeCount,
      hasCoverageIssue:
        assignments.length > 0 && (openCount === 0 || closeCount === 0),
    },
  });
}
