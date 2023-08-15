import { NextRequest, NextResponse } from "next/server";

import {prisma} from "@/lib/db";
import bcrypt from "bcrypt";
import { registerSchema } from "@/validator/authSchema";
import vine, { errors } from "@vinejs/vine";
import { ErrorReporter } from "@/validator/errorReporter";

interface RequestBody {
	username: string;
	email: string;
	password: string;
	password_confirmation: string;
}

export async function POST(req: NextRequest) {
	const data: RequestBody = await req.json();

	try {
		const validator = vine.compile(registerSchema);

		validator.errorReporter = () => new ErrorReporter();

		const output = await validator.validate(data);

		const user = await prisma.users.findFirst({
			where: { email: data.email },
		});

		if (user)
			return NextResponse.json(
				{ error: "Email is alreay taken" },
				{
					status: 302,
				}
			);

		const hashedPass = await bcrypt.hash(data.password, 10);

		await prisma.users.create({
			data: {
				email: output.email,
				username: output.username,
				password: hashedPass,
			},
		});

		return NextResponse.json({ status: 201 });
	} catch (error) {
		if (error instanceof errors.E_VALIDATION_ERROR) {
			return NextResponse.json(error.messages, { status: 400 });
		}
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
