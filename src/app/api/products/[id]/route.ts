import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const productId = params.id;

	try {
		if (!productId) {
			return NextResponse.json("Invalid Id", { status: 404 });
		}
		const products = await prisma.products.findUnique({
			where: {
				id: productId,
			},
		});

		return NextResponse.json(products, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
