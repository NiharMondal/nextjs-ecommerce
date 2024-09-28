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
		<div className="p-3 bg-white rounded-md group space-y-3">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-8 border-b">
				<Image
					width={200}
					height={300}
					alt="product-name"
					src={product?.photo}
					className="w-full h-full object-cover object-center group-hover:opacity-75 scale-90"
				/>
			</div>
			<div className="space-y-3">
				<p className="text-lg text-color hover:text-accent font-semibold hover:underline ">
					<Link href={`/product/${product.slug}`}>
						{product?.name} {product?.processor_model}
						{product?.generation}
					</Link>
				</p>
				<p className="mt-2 text-xl font-bold text-center text-accent">
					${product?.price}
				</p>
			</div>
		</div>
	);
}
