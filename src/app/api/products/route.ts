import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

interface Product {
	id: string;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	rating: {
		count: number;
		rate: number;
	};
}

export async function POST(req: Request) {
	try {
		const body: Omit<Product, "id"> = await req.json();

		const product = await prisma.products.create({
			data: {
				category: body.category,
				description: body.description,
				image: body.image,
				price: body.price,
				title: body.title,
				rating: {
					count: body.rating.count,
					rate: body.rating.rate,
				},
			},
		});

		return NextResponse.json(product, { status: 201 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
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
		}
		const allProducts = await prisma.products.findMany();
		return NextResponse.json(allProducts, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
