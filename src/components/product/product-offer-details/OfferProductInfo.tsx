import { THotOfferResponse } from "@/types";
import React from "react";

export default function OfferProductInfo({ product }: { product: THotOfferResponse }) {
	return (
		<>
			<h3 className=" text-primary">{product?.product?.name}</h3>
			<div className="whitespace-nowrap  flex flex-wrap items-center gap-3 *:bg-gray-200 *:py-1 *:px-3 *:rounded-full">
				<p className="text-primary">
					Discount:{" "}
					<span className="font-semibold">{product?.discount}%</span>
				</p>
				<p className="text-primary">
					Offered Price:{" "}
					<span className="font-semibold">${product?.price}</span>
				</p>
				<p className="line-through">
					Price:{" "}
					<span className="font-semibold">
						${product?.product?.price}
					</span>
				</p>
				<p>
					Status:
					<span className="font-semibold">
						{product?.product?.inStock > 0 ? " In Stock" : " Out of Stock"}
					</span>
				</p>
				<p>
					Brand:{" "}
					<span className="font-semibold">
						{product?.product?.brand.toUpperCase()}
					</span>
				</p>
			</div>
		</>
	);
}
