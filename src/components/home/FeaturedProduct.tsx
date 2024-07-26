import React from "react";
import ProductCard from "../ProductCard";

export default function FeaturedProduct() {
	return (
		<section className="py-10 md:py-20">
			<div className="max-w-7xl mx-auto px-4 2xl:px-0">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
					{[...Array(5)].map((product, index) => (
						<ProductCard product={product} key={index} />
					))}
				</div>
			</div>
		</section>
	);
}
