"use client";
import Loading from "@/app/loading";
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
	return <Loading />;
}
