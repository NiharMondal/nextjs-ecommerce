import React from "react";
import { Metadata } from "next";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { FAKE_PRODUCTS } from "@/mock/productData";
import Product from "@/components/Product";
import { TProduct } from "@/types";


export const metadata: Metadata = {
	title: "myCommerce | Category",
	description: "Prpduct category page",
};

export default async function page({ params }: { params: { slug: string } }) {
	const filterProduct: TProduct[] = FAKE_PRODUCTS.filter(
		(product) => product.category === params.slug
	);

	return (
		<React.Fragment>
			<div className="flex items-center justify-between ">
				<div>
					<h1 className="capitalize">{params.slug}</h1>
				</div>
				<div className="flex gap-4">
					<div className="flex items-center  font-bold border-2 border-teal-300 px-4 py-2">
						<Bars3BottomLeftIcon className="h-6 w-6" />
						<span className="ml-4">Filter</span>
					</div>
					<div className="flex items-center  justify-between font-bold  border-2 border-teal-300 px-4 py-2 w-full">
						<Bars3BottomLeftIcon className="h-6 w-6" />
						<span className="ml-4">Sort</span>
					</div>
				</div>
			</div>

			<div className="mt-8 w-full">
				<Product product={filterProduct} />
			</div>
		</React.Fragment>
	);
}
