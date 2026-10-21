import bcrypt from "bcrypt";
import { prisma } from "@/lib/prismaDB";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body = await request.json();
	const { email, password } = body;

	if (!email || !password) {
		return new NextResponse("Brakujące Pole", { status: 400 });
	}

	const formatedEmail = email.toLowerCase();

	const user = await prisma.user.findUnique({
		where: {
			email: formatedEmail,
		},
	});

	if (!user) {
		throw new Error("Adres e-mail nie istnieje");
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		await prisma.user.update({
			where: {
				email: formatedEmail,
			},
			data: {
				password: hashedPassword,
				passwordResetToken: null,
				passwordResetTokenExp: null,
			},
		});

		return NextResponse.json("Zaktualizowano hasło", { status: 200 });
	} catch (error) {
		return new NextResponse("Internal Error", { status: 500 });
	}
}
