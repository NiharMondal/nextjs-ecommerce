"use client";
import { THotOfferResponse } from "@/types";
import Image from "next/image";
import React from "react";
import ProductInfo from "../product-details/ProductInfo";
import AddToCart from "../product-details/AddToCart";
import KeyFeatures from "../product-details/KeyFeatures";
import OfferProductInfo from "./OfferProductInfo";
import OfferKeyFeatures from "./OfferKeyFeatures";

export default function OfferDetailsWrapper({
	product,
}: {
	product: THotOfferResponse;
}) {
	const productInfo = {
		id: product?.id,
		price: product?.price,
		name: product?.product?.name,
		photo: product?.product?.photo,
		productQuantity: product?.product?.productQuantity,
	};

	return (
		<div className="bg-white shadow-md px-5">
			<div className="mx-auto max-w-7xl px-0 py-10 md:px-10 ">
				<div className=" grid grid-cols-1 md:grid-cols-3 gap-10 h-fit place-items-center md:place-items-start">
					<div className="self-center">
						<Image
							src={product?.product?.photo}
							width={400}
							height={400}
							alt={"image"}
						/>
					</div>
					<div className="md:col-span-2 space-y-5">
						<OfferProductInfo product={product} />
						<OfferKeyFeatures product={product} />

						<AddToCart product={productInfo} />
					</div>
				</div>
			</div>
		</div>
	);
}
