"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cartSlice";
import { CartProductType } from "@/types";

import React from "react";
import { toast } from "react-toastify";

export default function AddToCart({ product }: { product: CartProductType }) {
	const dispatch = useAppDispatch();
	const handleAddProduct = (product: CartProductType) => {
		dispatch(addToCart(product));
		toast.success("Product added to your cart");
	};
	return (
		<button
			onClick={() => handleAddProduct(product)}
			className="btn primary text-white"
		>
			Buy Now
		</button>
	);
}
