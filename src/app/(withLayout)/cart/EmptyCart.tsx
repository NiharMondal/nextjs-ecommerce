import Link from "next/link";
import React from "react";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
export default function EmptyCart() {
	return (
		<div className="w-full min-h-[300px] flex items-center justify-center">
			<div>
                <EnvelopeOpenIcon className="size-20 w-fit mx-auto bg-background p-3 rounded-full"/>
				<p className="text-center my-3 text-accent">Your cart is Empty!</p>
				<Link href="/product">
					<button className="btn primary">Back to Shopping</button>
				</Link>
			</div>
		</div>
	);
}
