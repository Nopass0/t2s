import { NextResponse } from "next/server";

import { createPointSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = createPointSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { code, name, address, dmCode, dmName } = parsed.data;

  const point = await db.point.create({
    data: {
      code,
      name,
      address,
    },
  });

  await db.user.create({
    data: {
      pointId: point.id,
      role: "DM",
      code: dmCode,
      name: dmName,
    },
  });

  return NextResponse.json({ ok: true, pointId: point.id });
}
