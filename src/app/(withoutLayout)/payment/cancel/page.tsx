import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const metadata: Metadata = {
	title: "Payment Cancelled | Gadget Galaxy",
	description:
		"Your payment was cancelled. Return to the shopping cart to complete your purchase.",
};

export default function CancelPage() {
	return (
		<div className="relative h-screen">
			<Image
				className="absolute inset-0 h-full w-full object-contain object-center"
				height={400}
				width={400}
				src="/png/cancel.png"
				alt="cancel-image"
			/>
			<Link href="/cart">
				<button className="btn primary text-white absolute top-1/2 left-1/2">
					Go to Cart
				</button>
			</Link>
		</div>
	);
}
