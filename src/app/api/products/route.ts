import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const category = searchParams.get("category") as string;
	try {
		if (category) {
			const products = await prisma.products.findMany({
				where: {
					category: category,
				},
			});
			return NextResponse.json(products, { status: 200 });
		} else {
			const allProducts = await prisma.products.findMany();
			return NextResponse.json(allProducts, { status: 200 });
		}
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
