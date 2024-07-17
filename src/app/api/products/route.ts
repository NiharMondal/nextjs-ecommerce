import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const category = searchParams.get("category") as string;
	const pageCount = searchParams.get("page");
	const page = Number(pageCount) || 1;

	//setting static limit
	const limit = 6;

	const skip = (page - 1) * limit;

	try {
		// if (category) {
		// 	const products = await prisma.products.findMany({
		// 		where: {
		// 			category: category,
		// 		},
		// 	});
		// 	const total = await prisma.products.count();
		// 	return NextResponse.json({ total, data: products }, { status: 200 });
		// }

		//without category but with pagination and product limitation
		const products = await prisma.products.findMany({
			take: limit,
			skip,
		});
		const total = await prisma.products.count();

		return NextResponse.json({ total, data: products }, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}

export async function POST(req: Request) {
	const productInfo = await req.json();

	try {
		const product = await prisma.products.create({
			data: {
				...productInfo,
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Product created successfully",
				result: product,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);

		return NextResponse.json(
			{ success: false, message: "Something went wrong" },
			{ status: 500 }
		);
	}
}
