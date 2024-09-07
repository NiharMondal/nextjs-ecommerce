"use client";
import { useAddOrderMutation } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/slice/authSlice";
import { clearCart } from "@/redux/slice/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function SuccessPage() {
	const router = useRouter();
	const dispatch = useDispatch();
	const user: any = useAppSelector(selectedUser);
	const [addOrder] = useAddOrderMutation();
	const { cartItems, totalAmount } = useAppSelector((state) => state.cart);

	const reformItems = cartItems.map((item) => ({
		productId: item?.id,
		name: item?.name,
		quantity: item?.productQuantity,
		price: item?.price,
	}));
	const forOrderApi = {
		userId: user?.id,
		totalPrice: totalAmount,
		items: reformItems,
	};
	const makeOder = async () => {
		if (!cartItems.length) {
			router.replace("/payment/success-message");
		} else {
			const res = await addOrder(forOrderApi).unwrap();
			if (res.success) {
				dispatch(clearCart());
			}
		}
	};

	useEffect(() => {
		makeOder();
	}, [cartItems.length]);
	return (
		<div className="flex items-center gap-5 flex-wrap justify-between h-screen max-w-6xl mx-auto px-4 lg:px-0 pb-20">
			<div>
				<h1>Thank You!</h1>
				<p>You have just placed an order! 🎇</p>

				<h5 className="mt-5 text-lg">What you want to do next?</h5>
				<div className="flex gap-x-7 mt-4 ">
					<Link
						href="/"
						className="py-2 px-4 border-2 border-primary"
					>
						Go back home
					</Link>
					<Link href="/product" className="btn primary text-white">
						Explore more
					</Link>
				</div>
			</div>
			<div className="relative order-first md:order-last">
				<Image
					src="/png/celebration.svg"
					width={500}
					height={500}
					alt="success-celebration"
				/>
			</div>
		</div>
	);
}
