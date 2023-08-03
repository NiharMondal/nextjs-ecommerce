"use client";

import { FAKE_PRODUCTS } from "@/mock/productData";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, increment } from "@/redux/slice/cartSlice";
import { TProduct } from "@/types";
export default function ProductPage({ params }: { params: { slug: string } }) {
	const dispatch = useAppDispatch();
	const product: TProduct | undefined = FAKE_PRODUCTS.find(
		(p) => p.id.toString() === params.slug
	);
	
	return (
		<section className="mt-20 lg:max-w-4xl xl:max-w-6xl mx-auto px-4">
			<div className="grid grid-cols-1  sm:grid-cols-2 gap-4 lg:gap-8">
				{product && (
					<>
						<div className="p-1 bg-gray-400 ">
							<img
								src={product?.image}
								alt="product"
								className="bg-gray-100 dark:bg-gray-800 w-full rounded shadow-sm h-[500px] scale-90"
							/>
						</div>
						<div>
							<h1>{product?.title}</h1>
							<p className="mt-5 text-zinc-500">{product?.description}</p>
							<p className="mt-3 font-extrabold text-emerald-500">
								${product?.price}
							</p>

							<button
								className="btn mt-5 cursor-pointer"
								onClick={() => dispatch(addToCart(product))}
							>
								Add To Cart
							</button>
						</div>
					</>
				)}
			</div>
		</section>
	);
}
