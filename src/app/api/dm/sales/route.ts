import { NextResponse } from "next/server";

import { bulkAddSalesSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = bulkAddSalesSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { pointId, saleDate, entries } = parsed.data;

  const point = await db.point.findUnique({ where: { id: pointId } });
  if (!point) {
    return NextResponse.json({ error: "Точка не найдена" }, { status: 404 });
  }

  const nonZero = entries.filter(
    (e) => (e.quantity ?? 0) > 0 || (e.amount ?? 0) > 0,
  );

  if (nonZero.length === 0) {
    return NextResponse.json({ ok: true, created: 0 });
  }

  const result = await db.dailySale.createMany({
    data: nonZero.map((e) => ({
      userId: e.userId,
      directionId: e.directionId,
      pointId,
      saleDate: new Date(saleDate),
      quantity: e.quantity,
      amount: e.amount,
    })),
  });

  return NextResponse.json({ ok: true, created: result.count });
}
