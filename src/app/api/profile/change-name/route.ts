import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismaDB";
export async function POST(request: any) {
  const body = await request.json();
  const { name, id } = body;

  if (!id || !name) {
    return NextResponse.json("Brakujace Pola", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return NextResponse.json("Brak użytkownika", { status: 400 });
  }

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  return NextResponse.json("Nazwa została pomyślnie zmieniona", { status: 200 });
}
