import { NextResponse } from "next/server";

import { fromIsoDate } from "@/lib/date";
import { db } from "@/server/db";
import { getEmployeeDashboard } from "@/server/queries/dashboard";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const monthStartParam = searchParams.get("monthStart");

  if (!userId) {
    return NextResponse.json({ error: "userId обязателен" }, { status: 400 });
  }

  const monthRef = monthStartParam
    ? /^\d{4}-\d{2}-\d{2}$/.test(monthStartParam)
      ? fromIsoDate(monthStartParam)
      : new Date(monthStartParam)
    : undefined;
  const data = await getEmployeeDashboard(db, userId, monthRef);

  if (!data) {
    return NextResponse.json(
      { error: "Пользователь не найден" },
      { status: 404 },
    );
  }

  return NextResponse.json({ data });
}
