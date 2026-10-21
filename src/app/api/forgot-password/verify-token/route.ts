import { prisma } from "@/lib/prismaDB";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
	const body = await request.json();
	const { token } = body;

	if (!token) {
		return new NextResponse("Brakujące Pole", { status: 400 });
	}

	const user = await prisma.user.findUnique({
		where: {
			passwordResetToken: token,
			passwordResetTokenExp: {
				gte: new Date(),
			},
		},
	});

	if (!user) {
		return new NextResponse("Nieprawidłowy lub wygasły token", { status: 400 });
	}

	return NextResponse.json(user);
};
