import { NextResponse } from "next/server";

import { createStaffSchema, deleteStaffSchema, updateStaffSchema } from "@/lib/schemas";
import { db } from "@/server/db";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = createStaffSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { pointId, code, name, role } = parsed.data;

  await db.user.create({
    data: {
      pointId,
      code,
      name,
      role,
    },
  });

  return NextResponse.json({ ok: true });
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const parsed = updateStaffSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  const { id, name, code, role, isActive } = parsed.data;

  await db.user.update({
    where: { id },
    data: {
      name,
      code,
      role,
      isActive,
    },
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const parsed = deleteStaffSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Невалидные данные" },
      { status: 400 },
    );
  }

  await db.user.delete({ where: { id: parsed.data.id } });

  return NextResponse.json({ ok: true });
}
