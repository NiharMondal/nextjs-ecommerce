"use client";

import { useRouter } from "next/navigation";

export const metadata = {
	title: "Cancel | Classy Garments",
	description: "Cancel page. When you cancel the paymet",
};

export default function CancelPage() {
	const router = useRouter();
	return (
		<section className="grid place-items-center ">
			<div className="mt-20">
				<h1>Unfortunately Your payment was cancel! </h1>
				<h4 className="italic">
					Want to buy your desired products!
				</h4>
				

				<button
					className="border border-blue-500 px-4 py-2 rounded mt-8 capitalize group bg-blue-500 font-medium"
					onClick={() => router.push("/cart")}
				>
					click here{" "}
					<span className="group-hover:inline-flex  hidden">&rarr;</span>{" "}
				</button>
			</div>
		</section>
	);
}
