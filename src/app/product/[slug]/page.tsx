import { featuredProuducts } from "@/mock/mockData";
import Image from "next/image";
import React from "react";

export default function ProductPage({ params }: { params: { slug: string } }) {
	const product = featuredProuducts.find((p) => p.id === params.slug);

	return (
		<section className="mt-8 lg:max-w-4xl xl:max-w-6xl mx-auto px-4">
			<div className="grid grid-cols-1  sm:grid-cols-2 gap-4 lg:gap-8">
				<div>
					<Image
						src={product?.cover!}
						height={500}
						width={500}
						sizes="100vh"
						alt="product"
						className="bg-gray-100 dark:bg-gray-800 w-full rounded shadow-sm h-full"
					/>
				</div>
				<div>
					<h1>{product?.name}</h1>
					<p>${product?.price}</p>
					<input
						type="number"
						defaultValue={1}
						className="p-4 bg-gray-100 dark:bg-gray-600 rounded mt-5"
					/>
					<br />
					<button className="text-center w-full py-3 border border-gray-300 dark:border-gray mt-5 uppercase">
						add to cart
					</button>
					<p className="mt-5">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
						corporis exercitationem veritatis, nisi quaerat quo, odio
						voluptatum natus, fugit inventore quasi. Iste, delectus
						laudantium. Enim, assumenda vitae soluta dignissimos alias
						eligendi vero, earum officia error impedit, aliquid incidunt
						cupiditate eius!
					</p>
				</div>
			</div>
		</section>
	);
}
