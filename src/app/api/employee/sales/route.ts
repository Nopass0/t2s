import { NextResponse } from "next/server";

import { addSaleSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = addSaleSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { userId, directionId, quantity, amount } = parsed.data;

  const user = await db.user.findUnique({ where: { id: userId } });
  if (!user?.pointId) {
    return NextResponse.json({ error: "Сотрудник не найден" }, { status: 404 });
  }

  const direction = await db.direction.findUnique({
    where: { id: directionId },
  });
  if (!direction) {
    return NextResponse.json(
      { error: "Направление не найдено" },
      { status: 404 },
    );
  }

  const created = await db.dailySale.create({
    data: {
      userId,
      directionId,
      pointId: user.pointId,
      saleDate: new Date(),
      quantity,
      amount,
    },
  });

  return NextResponse.json({
    ok: true,
    sale: {
      id: created.id,
      directionId: created.directionId,
      quantity: created.quantity,
      amount: created.amount,
      saleDate: created.saleDate,
      unit: direction.unit,
    },
  });
}
