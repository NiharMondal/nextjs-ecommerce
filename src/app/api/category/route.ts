import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: Request) {
	try {
		const result = await prisma.category.findMany({});
		return NextResponse.json(
			{
				success: true,
				message: "Category fetched successfully",
				data: result,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: "Something went wrong!" },
			{ status: 500 }
		);
	}
}

export async function POST(req: Request) {
	const { name } = await req.json();

	try {
		const category = await prisma.category.findFirst({
			where: {
				name: name,
			},
		});
		if (category) {
			return NextResponse.json(
				{ success: false, message: "Category already exists!" },
				{ status: 301 }
			);
		}

		const result = await prisma.category.create({
			data: {
				name: name,
			},
		});
		return NextResponse.json(
			{
				success: true,
				message: "Category created successfully",
				data: result,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);

		return NextResponse.json(
			{ success: false, message: "Something went wrong!" },
			{ status: 500 }
		);
	}
}
