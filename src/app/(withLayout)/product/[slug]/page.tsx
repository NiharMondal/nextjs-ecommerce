import React from "react";
import { backend_url } from "@/url";
import { TProductResponse, TServerResponse } from "@/types";
import DetailsWrapper from "@/components/product/product-details/DetailsWrapper";
import Reviews from "@/components/product/reviews/Reviews";
import RelatedProduct from "@/components/product/reviews/RelatedProduct";

const productDetails = async (
	slug: string
): Promise<TServerResponse<TProductResponse>> => {
	const res = await fetch(`${backend_url}/product/${slug}`, {
		method: "GET",
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
export default async function ProductDetails({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const { result: product } = await productDetails(slug);

	return (
		<>
			<DetailsWrapper product={product} />

			<div className="mt-5 max-w-7xl mx-auto">
				<div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
					<div className="lg:col-span-2 space-y-5">
						<div className=" bg-white rounded-md p-5 space-y-3">
							<h3>Description</h3>
							<h3>
								{product?.name} {product?.processor_model}{" "}
								{product?.generation} {product?.display}
							</h3>

							<p>{product?.description}</p>
						</div>

						<Reviews product={product} />
					</div>
					<RelatedProduct />
				</div>
			</div>
		</>
	);
}
