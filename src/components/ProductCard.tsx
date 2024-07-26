import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }: any) {
	return (
		<div>
			<Link href={""} className="group">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
					<Image
						width={200}
						height={300}
						alt="product-name"
						src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
						className="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 className="mt-4 text-base text-color font-normal group-hover:underline">
					Hello
				</h3>
				<p className="mt-1 text-lg font-medium ">price</p>
			</Link>
		</div>
	);
}
