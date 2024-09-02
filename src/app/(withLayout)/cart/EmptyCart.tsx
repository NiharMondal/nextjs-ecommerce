import Link from "next/link";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
export default function EmptyCart() {
	return (
		<div className="w-full min-h-[300px] flex items-center justify-center">
			<div>
				<ShoppingCartIcon className="size-20 w-fit mx-auto bg-background p-3 rounded-full" />
				<p className="text-center my-3 text-accent">
					Your cart is Empty!
				</p>
				<Link href="/product">
					<button className="btn primary text-white">
						Back to Shopping
					</button>
				</Link>
			</div>
		</div>
	);
}
