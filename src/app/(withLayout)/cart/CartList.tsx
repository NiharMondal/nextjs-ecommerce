"use client";
import ProductQuantityInput from "@/components/shared/ProductQuantityInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeItem, clearCart } from "@/redux/slice/cartSlice";
import Image from "next/image";
import React from "react";
import EmptyCart from "./EmptyCart";
import Link from "next/link";
import { config } from "@/config";
import { loadStripe } from "@stripe/stripe-js";
import { selectedUser } from "@/redux/slice/authSlice";
import { useAddOrderMutation } from "@/redux/api/orderApi";
import { toast } from "react-toastify";

export default function CartList() {
	
	const dispatch = useAppDispatch();
	
	const { cartItems, totalAmount } = useAppSelector((state) => state.cart);

	const handleClear = () => {
		const check = window.confirm("Do you want to clear your cart?");
		if (check) {
			dispatch(clearCart());
		}
	};

	const reformItems = cartItems.map((item) => ({
		productId: item?.id,
		name: item?.name,
		quantity: item?.productQuantity,
		price: item?.price,
	}));
	
	//make payment
	const makePayment = async () => {
		try {
			

			//load stripe published key
			const stripe = await loadStripe(
				config.stripe_published_key as string
			);
			const response = await fetch(`${config.backend_url}/checkout`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(reformItems),
			});

			const session = await response.json();
			await stripe?.redirectToCheckout({
				sessionId: session?.result?.id,
			});
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<div className="space-y-3">
			<CartProductList />
			{cartItems?.length > 0 && (
				<div className="flex justify-between ">
					<div>
						<button
							className="btn bg-red-500 text-white hover:bg-red-600"
							onClick={handleClear}
						>
							Clear
						</button>
					</div>
					<div>
						<h2>Sub Total: {totalAmount}</h2>
						<div className="text-right space-x-8 mt-5">
							<Link href="/product">
								<button className="btn border-2 border-secondary hover:bg-secondary hover:text-white">
									Back to shopping
								</button>
							</Link>
							<button
								onClick={makePayment}
								className="btn primary text-white"
							>
								Checkout
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

const CartProductList = () => {
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector((state) => state.cart);

	if (cartItems?.length < 1) return <EmptyCart />;
	return (
		<>
			{cartItems?.map((item) => (
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
		</>
	);
};
