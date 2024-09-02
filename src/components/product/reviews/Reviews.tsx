import React from "react";
import { TReviews } from "@/types";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

export default function Reviews() {
	return (
		<div className="bg-white p-5 rounded-md">
			<div className="md:flex flex-wrap items-center justify-between w-full border-b pb-3">
				<div>
					<h3>Reviews ({0})</h3>
					<p>
						Get specific details about this product from customers
						who own it.
					</p>
				</div>

				<div>
					<button className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white">
						Write a Review
					</button>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center h-[200px]">
				<div className="p-5 bg-primary/5 rounded-full">
					<ClipboardDocumentListIcon className="size-12 text-primary" />
				</div>
				<p className="font-semibold text-sm mt-2">
					This product has no reviews yet. Be the first one to write a
					review.
				</p>
			</div>
		</div>
	);
}
