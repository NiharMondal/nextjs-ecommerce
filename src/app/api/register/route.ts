import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
	const { name, email, password, password_confirmation } = await req.json();

	try {
		if (!name || !email || !password) {
			return NextResponse.json("All fields are required", { status: 400 });
		}

		if (password !== password_confirmation) {
			return NextResponse.json("Password does not match", { status: 400 });
		}

		const user = await prisma.users.findFirst({
			where: { email: email },
		});

		if (user)
			return NextResponse.json("Email is alreay taken", {
				status: 302,
			});

		//making hash password
		const hashedPass = await bcrypt.hash(password, 10);

		const createdUser = await prisma.users.create({
			data: {
				email,
				name,
				password: hashedPass,
			},
		});
		const response = {
			name: createdUser.name,
			email: createdUser.email,
		};
		return NextResponse.json(response, { status: 201 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
