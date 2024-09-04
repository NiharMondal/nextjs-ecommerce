"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cartSlice";
import { CartProductType, TProductResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

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

	const handleAddProduct = (product: CartProductType) => {
		dispatch(addToCart(product));
		toast.success("Product added to your cart");
	};
	return (
		<div className="bg-white p-3 rounded-md min-h-[600px] group">
			<Link href={`/product/${product.slug}`}>
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-8 border-b ">
					<Image
						width={200}
						height={300}
						alt="product-name"
						src={product?.photo}
						className="w-full h-full object-cover object-center group-hover:opacity-75 scale-90"
					/>
				</div>
			</Link>
			<div className="space-y-4 min-h-[200px] border-b-2">
				<Link href={`/product/${product.slug}`}>
					<p className="mt-4 text-lg text-color hover:text-accent font-semibold hover:underline">
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
			</div>
			<div className="pt-4">
				<p className=" text-xl font-bold text-center text-accent">
					${product?.price}{" "}
					<span className="text-color text-sm line-through">
						{product.regularPrice}
					</span>
				</p>
				<button
					onClick={() => handleAddProduct(productInfo)}
					className=" bg-primary/10 w-full py-2 rounded-md text-primary font-bold hover:bg-primary hover:text-white duration-150 ease-in-out"
				>
					Buy Now
				</button>
			</div>
		</div>
	);
}
