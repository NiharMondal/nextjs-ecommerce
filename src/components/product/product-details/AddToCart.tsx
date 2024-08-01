"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cartSlice";

import React from "react";
export type CartProductType = {
	id: string;
	name: string;
	photo: string;
	price: number;
	productQuantity: any;
};
export default function AddToCart({ product }: { product: CartProductType }) {
	const dispatch = useAppDispatch();

	return (
		<button
			onClick={() => dispatch(addToCart(product))}
			className="btn primary"
		>
			Buy Now
		</button>
	);
}
