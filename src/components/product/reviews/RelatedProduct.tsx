"use client";
import { useGetRelatedProductQuery } from "@/redux/api/productApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RelatedProduct({ productId }: { productId: string }) {
	const { data: relatedProducts } = useGetRelatedProductQuery(productId);

	return (
		<div className="p-5 bg-white rounded-md h-fit">
			<h3 className="text-center border-b-2 pb-2">Related Product</h3>

			<div className="space-y-3 mt-5">
				{!relatedProducts?.result?.length && (
					<p className="text-gray-500 text-lg">
						No related products found!
					</p>
				)}
				{relatedProducts?.result.map((rp) => (
					<div className="grid grid-cols-3 border-b py-2" key={rp.id}>
						<Image
							src={rp?.photo}
							width={100}
							height={100}
							alt={rp.name}
							className="w-2/3 h-[50px] object-cover object-center"
						/>
						<div className="space-y-3 col-span-2">
							<p className=" hover:text-accent hover:underline">
								<Link href={`/product/${rp?.slug}`}>
									{rp?.name}
								</Link>
							</p>

							<p className="text-accent">${rp?.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

