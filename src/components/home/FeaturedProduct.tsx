"use client";
import React from "react";
import { useGetFeaturedProductQuery } from "@/redux/api/featuredAndOfferApi";
import FeaturedCard from "../FeaturedCard";

export default function FeaturedProduct() {
	const { data: featuredProduct } = useGetFeaturedProductQuery();

	return (
		<section className="py-10 md:py-20">
			<div className="max-w-7xl mx-auto px-4 2xl:px-0">
				<div className="text-center mb-12 space-y-1">
					<h2>Featured Products</h2>
					<p className="font-medium">
						Check & Get Your Desired Product!
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
					{featuredProduct?.result?.map((product) => (
						<FeaturedCard
							product={product.product}
							key={product.id}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
