import React from "react";
import { backend_url } from "@/url";
import { TProductResponse, TServerResponse } from "@/types";
import DetailsWrapper from "@/components/product/product-details/DetailsWrapper";

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
		<section className="overflow-hidden">
			<DetailsWrapper product={product} />

			<div className="mt-5 max-w-7xl mx-auto">
				<div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-5">
					<div className="md:col-span-2 space-y-5">
						<div className=" bg-white rounded-md p-5 space-y-3">
							<h3>Description</h3>
							<h3>
								{product?.name} {product?.processor_model}{" "}
								{product?.generation} {product?.display}
							</h3>

							<p>{product?.description}</p>
						</div>

						<div className="bg-white p-5 rounded-md">
							<div className="md:flex flex-wrap items-center justify-between">
								<div>
									<h3>Reviews ({product?.rating})</h3>
									<p>
										Get specific details about this product
										from customers who own it.
									</p>
								</div>
								<div>
									<button className="btn border-2 border-primary hover:bg-primary text-primary hover:text-white">Write a Review</button>
								</div>
								<div>	

								</div>
							</div>
						</div>
					</div>
					<div>Related product</div>
				</div>
			</div>
		</section>
	);
}
