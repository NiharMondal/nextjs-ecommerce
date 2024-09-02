"use client";
import React from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "@/redux/hooks";
import { decreaseQuantity, increaseQuantity } from "@/redux/slice/cartSlice";
import { CartProductType } from "@/types";


export default function ProductQuantityInput({
	product,
}: {
	product: CartProductType;
}) {
	const dispatch = useAppDispatch();

	return (
		<div className="flex items-center ">
			<button
				className="p-2 border"
				onClick={() => dispatch(decreaseQuantity(product.id))}
			>
				<MinusIcon width={15} />
			</button>
			<div className="py-1 px-3 border">{product.productQuantity}</div>
			<button
				className="p-2 border"
				onClick={() => dispatch(increaseQuantity(product.id))}
			>
				<PlusIcon width={15} />
			</button>
		</div>
	);
}
