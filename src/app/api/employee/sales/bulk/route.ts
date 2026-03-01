import { NextResponse } from "next/server";

import { bulkEmployeeSalesSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = bulkEmployeeSalesSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { userId, entries } = parsed.data;

  const user = await db.user.findUnique({ where: { id: userId } });
  if (!user?.pointId) {
    return NextResponse.json({ error: "Сотрудник не найден" }, { status: 404 });
  }

  const nonZero = entries.filter(
    (e) => (e.quantity ?? 0) > 0 || (e.amount ?? 0) > 0,
  );

  if (nonZero.length === 0) {
    return NextResponse.json({ ok: true, created: 0 });
  }

  const result = await db.dailySale.createMany({
    data: nonZero.map((e) => ({
      userId,
      directionId: e.directionId,
      pointId: user.pointId!,
      saleDate: new Date(e.date),
      quantity: e.quantity,
      amount: e.amount,
    })),
  });

  return NextResponse.json({ ok: true, created: result.count });
}
