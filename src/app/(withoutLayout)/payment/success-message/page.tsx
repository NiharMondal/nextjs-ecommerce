import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
export const metadata: Metadata = {
	title: "Payment Successful | Gadget Galaxy",
	description:
		"Thank you for your purchase! Your payment was successful. Check your email for order details.",
};

export default function SuccessMessage() {
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
