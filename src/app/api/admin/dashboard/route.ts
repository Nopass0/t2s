import { NextResponse } from "next/server";

import { db } from "@/server/db";
import { getAdminDashboard } from "@/server/queries/dashboard";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "userId обязателен" }, { status: 400 });
  }

  const data = await getAdminDashboard(db, userId);

  if (!data) {
    return NextResponse.json({ error: "Админ не найден" }, { status: 404 });
  }

  return NextResponse.json({ data });
}
