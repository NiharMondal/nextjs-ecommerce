"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cartSlice";
import { TProductResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({
	product,
}: {
	product: TProductResponse;
}) {
	const dispatch = useAppDispatch();

	const productInfo = {
		id: product.id,
		name: product.name,
		photo: product.photo,
		price: product.price,
		productQuantity: 1,
	};
	return (
		<div className="bg-white pb-5 rounded-md">
			<Link href={`/product/${product.slug}`}>
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
					<Image
						width={200}
						height={300}
						alt="product-name"
						src={product?.photo}
						className="w-full h-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
			</Link>
			<div className="px-4 space-y-4">
				<Link href={`/product/${product.slug}`}>
					<p className="mt-4 text-xl text-color hover:text-accent font-semibold hover:underline">
						{product?.name}
					</p>
				</Link>
				<ul className="list-disc pl-5">
					<li>
						Processor: {product.processor_model}{" "}
						{product.generation}
					</li>
					<li>
						Ram: {product.ram},{product.ram_type}
					</li>
					<li>
						Display: {product.display_size}" {product.display}
					</li>
				</ul>
				<p className=" text-xl font-bold text-center text-accent">
					${product?.price}{" "}
					<span className="text-color text-sm line-through">
						{product.regularPrice}
					</span>
				</p>
				<button
					onClick={() => dispatch(addToCart(productInfo))}
					className=" bg-primary/10 w-full py-2 rounded-md text-primary font-bold hover:bg-primary hover:text-white duration-150 ease-in-out"
				>
					Buy Now
				</button>
			</div>
		</div>
	);
}
