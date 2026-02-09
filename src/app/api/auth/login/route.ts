import { NextResponse } from "next/server";

import { loginSchema } from "@/lib/schemas";
import { env } from "@/env";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const payload = await req.json();
  const parsed = loginSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { pointCode, employeeCode, adminKey } = parsed.data;

  const user = await db.user.findUnique({
    where: { code: employeeCode },
    include: { point: true },
  });

  if (!user || !user.isActive) {
    return NextResponse.json(
      { error: "Неверный код точки или код сотрудника" },
      { status: 401 },
    );
  }

  if (user.role === "ADMIN") {
    if (adminKey !== env.ADMIN_ACCESS_KEY) {
      return NextResponse.json(
        { error: "Неверный ключ админа" },
        { status: 401 },
      );
    }

    return NextResponse.json({
      session: {
        userId: user.id,
        pointId: user.point?.id ?? "",
        role: user.role,
        name: user.name,
        code: user.code,
        pointName: user.point?.name ?? "Все точки",
        pointAddress: user.point?.address ?? "",
      },
    });
  }

  if (!pointCode || !user.point || user.point.code !== pointCode) {
    return NextResponse.json(
      { error: "Неверный код точки или код сотрудника" },
      { status: 401 },
    );
  }

  return NextResponse.json({
    session: {
      userId: user.id,
      pointId: user.point.id,
      role: user.role,
      name: user.name,
      code: user.code,
      pointName: user.point.name,
      pointAddress: user.point.address,
    },
  });
}
