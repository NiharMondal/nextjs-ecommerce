"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cartSlice";
import { CartProductType } from "@/types";

import React from "react";

export default function AddToCart({ product }: { product: CartProductType }) {
	const dispatch = useAppDispatch();

	return (
		<button
			onClick={() => dispatch(addToCart(product))}
			className="btn primary text-white"
		>
			Buy Now
		</button>
	);
}
