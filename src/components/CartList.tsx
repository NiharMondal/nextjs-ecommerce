"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
	clearCart,
	decreaseQuantity,
	getTotalAmount,
	increaseQuantity,
	removeItem,
} from "@/redux/slice/cartSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

import {
	TrashIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function CartList() {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const { cartItems, totalAmount } = useAppSelector((state) => state.cart);

	useEffect(() => {
		dispatch(getTotalAmount());
	}, [cartItems]);

	//go back
	const goBack = () => {
		router.back();
	};

	//price fruction
	const getRidOfFruction = (price: number, quantity: number) => {
		const totalProductAmount = price * quantity;
		return totalProductAmount.toFixed(2);
	};

	//make payment
	const makePayment = async () => {
		//livehost address
		const url = "https://nextjs-ecommerce-two-ashen.vercel.app";
		// const url = "http://localhost:3000/";
		const stripe = await loadStripe(
			"pk_test_51NprDyEuV5fOCajBjV53aCsJSQHJuh8wOOtUchlpmduNrOrXGhDX5OKa4wNHE2xUXE6p1fyjw9okfwH8L1cRjVLy00vpJmLXNT"
		);

		const response = await fetch(`${url}/api/checkout-payment`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(cartItems),
		});

		const session = await response.json();

		await stripe?.redirectToCheckout({
			sessionId: session.id,
		});
	};
	return (
		<div className="container flex flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
			<ul className="flex flex-col divide-y divide-blue-400">
				{cartItems.length > 0 ? (
					cartItems.map((product) => {
						return (
							<li
								key={product.id}
								className="flex flex-col py-6 sm:flex-row sm:justify-between"
							>
								<div className="flex w-full space-x-2 sm:space-x-4">
									<Image
										width={200}
										height={200}
										className="h-20 w-20 flex-shrink-0 rounded object-fill outline-none dark:border-transparent sm:h-32 sm:w-32"
										src={product.image}
										alt={product.title}
									/>
									<div className="flex w-full flex-col justify-between pb-4">
										<div className="flex w-full justify-between space-x-2 pb-2">
											<div className="space-y-1">
												<h4 className="text-lg font-semibold leading-snug sm:pr-8">
													{product.title.slice(0, 70)}
												</h4>
												<p className="text-lg">${product.price}</p>
											</div>
											<div className="text-right">
												<p className="text-lg font-semibold">
													{getRidOfFruction(
														product.price,
														product.productQuantity
													)}
												</p>
											</div>
										</div>
										<div className="flex items-center justify-between text-sm">
											<button
												onClick={() =>
													dispatch(removeItem(product.id))
												}
												type="button"
												className="flex items-center space-x-2 px-2 py-1 pl-0"
											>
												<TrashIcon className="w-5 h-5" />
												<span>Remove</span>
											</button>
											<div className="w-20 flex justify-between">
												<button
													onClick={() =>
														dispatch(decreaseQuantity(product.id))
													}
												>
													<ChevronLeftIcon className="h-4 w-4" />
												</button>
												<span>{product.productQuantity}</span>
												<button
													onClick={() =>
														dispatch(increaseQuantity(product.id))
													}
												>
													<ChevronRightIcon className="h-4 w-4" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
						);
					})
				) : (
					<div className="text-center space-y-4">
						<h2>Your cart is empty</h2>
						<button
							onClick={goBack}
							type="button"
							className="rounded-md border border-blue-500 hover:bg-blue-500/80 px-3 py-2 text-sm "
						>
							Back to shop
						</button>
					</div>
				)}
			</ul>

			<div className="border-t border-blue-400 pt-5">
				{cartItems.length > 0 ? (
					<div className="flex justify-between items-end">
						<div className="mr-2">
							<button
								className="uppercase px-4 lg:px-8 py-2  rounded bg-red-500 hover:bg-red-600 text-white"
								onClick={() => dispatch(clearCart())}
							>
								clear
							</button>
						</div>
						<div className="space-y-3">
							<div className="space-y-1 text-right">
								<p className="tracking-wider">
									Total amount:{" "}
									<span className="font-semibold">
										{totalAmount.toFixed(2)}
									</span>
								</p>
							</div>
							<div className="flex justify-end space-x-4">
								<button
									onClick={goBack}
									type="button"
									className="rounded-md border border-blue-500 
									bg-blue-500 hover:bg-blue-500/80 px-3 py-2 text-white font-semibold"
								>
									Back to shop
								</button>
								<button
									onClick={makePayment}
									type="button"
									className="rounded-md border border-pink-400 px-3 py-2 hover:bg-pink-400 hover:text-white"
								>
									Checkout
								</button>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
