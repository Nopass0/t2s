import { NextResponse } from "next/server";

import { employeeCodeSchema } from "@/lib/schemas";
import { db } from "@/server/db";
import { z } from "zod";

const schema = z.object({
  pointId: z.string().min(1),
  name: z.string().min(2),
  code: employeeCodeSchema,
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { pointId, name, code } = parsed.data;

  await db.user.create({
    data: {
      pointId,
      name,
      code,
      role: "DM",
    },
  });

  return NextResponse.json({ ok: true });
}
