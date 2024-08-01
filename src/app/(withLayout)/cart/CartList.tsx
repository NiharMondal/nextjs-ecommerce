"use client";
import ProductQuantityInput from "@/components/shared/ProductQuantityInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeItem, clearCart } from "@/redux/slice/cartSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import EmptyCart from "./EmptyCart";

export default function CartList() {
	const dispatch = useAppDispatch();
	const { cartItems, totalAmount } = useAppSelector((state) => state.cart);

	const handleClear = () => {
		const check = window.confirm("Do you want to clear your cart?");
		if (check) {
			dispatch(clearCart());
		}
	};
	if (cartItems.length < 1) return <EmptyCart />;
	return (
		<div className="space-y-3">
			{cartItems.map((item) => (
				<div
					key={item.id}
					className="flex items-center justify-between py-5 border-b-2"
				>
					<div className="w-1/3 flex gap-x-5 items-center">
						<div className="hidden md:block overflow-hidden">
							<Image
								src={item.photo}
								width={100}
								height={100}
								alt={item.name}
								className="rounded"
							/>
						</div>
						<div>
							<h4 className="text-primary">{item.name}</h4>
							<p>
								Unit Price:{" "}
								<span className="font-bold">{item.price}</span>
							</p>
							<button
								onClick={() => dispatch(removeItem(item.id))}
								className="mt-4 text-red-500 bg-red-50 px-4 py-1"
							>
								Remove
							</button>
						</div>
					</div>
					<ProductQuantityInput product={item} />
					<div>{item.price * item.productQuantity}</div>
				</div>
			))}

			<div className="flex justify-between items-center">
				<button className="btn bg-red-500" onClick={handleClear}>
					Clear
				</button>
				<div>
					<h2>Sub Total: {totalAmount}</h2>
					<button>Checkout</button>
				</div>
			</div>
		</div>
	);
}
