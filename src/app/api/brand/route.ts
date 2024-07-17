import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: Request) {
	try {
		const brands = await prisma.brand.findMany({});
		return NextResponse.json(
			{
				success: true,
				message: "Brands fetched successfully",
				data: brands,
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
		const brand = await prisma.brand.findFirst({
			where: {
				name: name,
			},
		});
		if (brand) {
			return NextResponse.json(
				{ success: false, message: "Brand already exists!" },
				{ status: 301 }
			);
		}
		const result = await prisma.brand.create({
			data: {
				name: name,
			},
		});
		return NextResponse.json(
			{ success: true, message: "Brand created successfully", data: result },
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
