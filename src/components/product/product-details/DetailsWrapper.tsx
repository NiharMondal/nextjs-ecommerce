import { TProductResponse } from "@/types";
import React from "react";
import ProductInfo from "./ProductInfo";
import KeyFeatures from "./KeyFeatures";
import Image from "next/image";
import AddToCart from "./AddToCart";

export default function DetailsWrapper({
	product,
}: {
	product: TProductResponse;
}) {
	const productInfo = {
		id: product?.id,
		name: product.name,
		photo: product.photo,
		price: product.price,
		productQuantity: product.productQuantity,
	};
	return (
		<div className="bg-white shadow-md px-5">
			<div className="mx-auto max-w-7xl px-0 py-10 md:px-10 ">
				<div className=" grid grid-cols-1 md:grid-cols-3 gap-10 h-fit place-items-center md:place-items-start">
					<div className="self-center">
						<Image
							src={product?.photo}
							width={400}
							height={400}
							alt={product?.name}
						/>
					</div>
					<div className="md:col-span-2 space-y-5">
						<ProductInfo product={product} />
						<KeyFeatures product={product} />

						<AddToCart product={productInfo}/>
					</div>
				</div>
			</div>
		</div>
	);
}
