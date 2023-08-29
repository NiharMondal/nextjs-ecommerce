import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const productId = params.id;

	try {
		const products = await prisma.products.findUnique({
			where: {
				id: productId,
			},
		});

		return NextResponse.json(products, { status: 200 });
	} catch (error) {
		NextResponse.json(error, { status: 500 });
	}
}
