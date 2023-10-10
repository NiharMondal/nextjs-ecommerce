"use client";
import { signOut, useSession } from "next-auth/react";

import { redirect } from "next/navigation";

export const metadata = {
	title: "Payment | Classy Garments",
	description:
		"Payment page. shows all products and also categorised products",
};

export default function PaymentPage() {
	const { data: session } = useSession();
	if (!session?.user) redirect("/login");
	return (
		<div>
			<h3>Hello there</h3>
			{JSON.stringify(session)}
			<div>
				<button
					className="mt-4 px-4 py-2 border-2"
					onClick={() => signOut()}
				>
					logout
				</button>

				<div>
					thanks for your payment
				</div>
			</div>
		</div>
	);
}
