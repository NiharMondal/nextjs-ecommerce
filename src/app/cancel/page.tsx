import Link from "next/link";

export default function CancelPage() {
	return (
		<section className="grid place-items-center ">
			<div className="mt-20">
				<h1>Unfortunately Your payment was cancel! </h1>
				<h4 className="italic">Want to buy your desired products!</h4>

				<button className="border border-blue-500 px-4 py-2 rounded mt-8 capitalize group bg-blue-500 font-medium">
					<Link href="/cart">click here </Link>
					<span className="group-hover:inline-flex  hidden">
						&rarr;
					</span>{" "}
				</button>
			</div>
		</section>
	);
}
