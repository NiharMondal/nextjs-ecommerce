import ProductQuantityInput from "@/components/shared/ProductQuantityInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCartItems } from "@/redux/slice/cartSlice";
import Image from "next/image";
import React from "react";
import CartList from "./CartList";

export default function CartPage() {
	return (
		<>
			<div className="max-w-7xl mx-auto py-20">
				<div className="bg-white p-8 ">
					<h3 className="pb-3 border-b-2 ">Shopping Cart</h3>
					
					<CartList/>
				</div>
			</div>
		</>
	);
}
