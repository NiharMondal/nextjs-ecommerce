import { TProductResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedCard({
	product,
}: {
	product: TProductResponse;
}) {
	return (
		<div>
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
				<Image
					width={200}
					height={300}
					alt="product-name"
					src={product?.photo}
					className="w-full h-full object-cover object-center group-hover:opacity-75"
				/>
			</div>
			<Link href={`/product/${product.slug}`}>
				<p className="mt-4 text-xl text-color hover:text-accent font-semibold hover:underline">
					{product?.name}
				</p>
			</Link>
			<p className="mt-1 text-xl font-bold ">${product?.price}</p>
		</div>
	);
}
