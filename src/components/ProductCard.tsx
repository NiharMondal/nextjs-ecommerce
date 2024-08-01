import { TProductResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({
	product,
}: {
	product: TProductResponse;
}) {
	return (
		<div>
			<Link href={`/product/${product?.slug}`} className="group">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
					<Image
						width={200}
						height={300}
						alt="product-name"
						src={product?.photo}
						className="h-full w-full object-contain object-center group-hover:opacity-75"
					/>
				</div>
				<p className="mt-4 text-base text-color font-normal group-hover:underline">
					{product?.name}
				</p>
				<p className="mt-1 text-xl font-bold ">${product?.price}</p>
			</Link>
		</div>
	);
}
