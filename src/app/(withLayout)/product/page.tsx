import Filter from "@/components/product/Filter";
import ProductCard from "@/components/ProductCard";
import { TProduct, TProductResponse } from "@/types";
import { TServerResponse } from "@/types";
import React from "react";

const url = "http://localhost:5000/api/v1/product";
const fetchProduct = async (): Promise<TServerResponse<TProductResponse[]>> => {
	const res = await fetch(url, {
		method: "GET",
		cache: "no-cache",
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
export default async function ProductPage() {
	const products = await fetchProduct();

	return (
		<section className="max-w-7xl mx-auto">
			<div className="py-10 md:py-20 px-4">
				<div className="flex gap-x-4">
					{/* left side  */}
					<div className="hidden md:block">
						<div className="min-w-[250px]">
							<Filter />
						</div>
					</div>
					{/* right side  */}
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
						{products.result.map((product, index) => (
							<ProductCard product={product} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
