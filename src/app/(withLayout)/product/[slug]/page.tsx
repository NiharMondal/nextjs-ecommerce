import React from "react";
import { TProductResponse, TServerResponse } from "@/types";
import DetailsWrapper from "@/components/product/product-details/DetailsWrapper";
import RelatedProduct from "@/components/product/reviews/RelatedProduct";
import { config } from "@/config";
import type { Metadata } from "next";

type Props = {
	params: { slug: string };
	// searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// read route params
	const slug = params.slug;

	// fetch data
	const product = await fetch(`${config.backend_url}/product/${slug}`).then(
		(res) => res.json()
	);

	return {
		title: `${product?.result.name} | Gadget Galaxy`,
	};
}
const productDetails = async (
	slug: string
): Promise<TServerResponse<TProductResponse>> => {
	const res = await fetch(`${config.backend_url}/product/${slug}`, {
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
	const reviewData = {
		rating: product?.rating,
		reviews: product?.reviews,
	};
	return (
		<>
			<DetailsWrapper product={product} />

			<div className="mt-5 max-w-7xl mx-auto">
				<div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-5 pb-5">
					<div className="lg:col-span-2 space-y-5">
						<div className=" bg-white rounded-md p-5 space-y-3">
							<h4>Specification</h4>
							<table className="w-full text-left text-gray-600">
								<tr>
									<td className="py-2 font-medium ">
										Processor Brand
									</td>
									<td className="capitalize">
										{product.brand}
									</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Processor Model
									</td>
									<td>{product.processor_model}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Generation
									</td>
									<td>{product.generation}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Display Size
									</td>
									<td>{product.display_size}"</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Display Type
									</td>
									<td>{product.display_type}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Display Resulation
									</td>
									<td>{product.display}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">RAM</td>
									<td>{product.ram}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										RAM Type
									</td>
									<td>{product.ram_type}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Storage Capacity
									</td>
									<td>
										{product.ssd} SSD{" "}
										{product.hdd && (
											<span>&amp; {product.hdd} HDD</span>
										)}
									</td>
								</tr>
							</table>
						</div>
						<div className=" bg-white rounded-md p-5 space-y-3">
							<h3>Description</h3>
							<h4>
								{product?.name} {product?.processor_model}{" "}
								{product?.generation} {product?.display}
							</h4>

							<p>{product?.description}</p>
						</div>

						{/* <Reviews reviews={product?.reviews} /> */}
					</div>
					<RelatedProduct productId={slug}/>
				</div>
			</div>
		</>
	);
}
