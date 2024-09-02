
import React from "react";
import CartList from "./CartList";

export const metadata = {
	title: "Shopping Cart | Gadget Galaxy",
	description:
		"Review your selected items and proceed to checkout. Secure and easy shopping at Gadget Galaxy.",
};
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
