"use client";
import { TReviews } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ReviewModalProsp = {
	userId: string;
	productId: string;
};

export default function ReviewModal({ userId, productId }: ReviewModalProsp) {
	const router = useRouter();

	const { register, handleSubmit } = useForm<TReviews>();

	// modal state
	const [isOpen, setIsOpen] = useState(false);

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	const handleSubmitReview: SubmitHandler<TReviews> = (data) => {
		(data.productId = productId), (data.userId = userId);
        console.log(data)
		// if (!userId) {
		// 	router.push("/sign-in");
		// } else {
		// 	console.log(data);
		// }
	};
	return (
		<>
			<button
				className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white"
				onClick={open}
			>
				Write a Review
			</button>
			<Dialog
				open={isOpen}
				as="div"
				className="relative z-10"
				onClose={close}
			>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<DialogPanel
							transition
							className="w-full max-w-md rounded-xl bg-primary p-6 "
						>
							<form
								onSubmit={handleSubmit(handleSubmitReview)}
								className="space-y-3"
							>
								<div className="space-y-1">
									<label
										htmlFor="rating"
										className="text-white"
									>
										Rating
									</label>
									<input
										id="rating"
										type="number"
										placeholder="Max number is 5"
										{...register("rating", {
											required: true,
										})}
									/>
								</div>
								<div className="space-y-1">
									<label
										htmlFor="message"
										className="text-white"
									>
										Message
									</label>
									<textarea
										id="message"
										rows={4}
										placeholder="Write your message here"
										className="min-w-full"
										{...register("message", {
											required: true,
										})}
									/>
								</div>

								<button className="text-white bg-secondary px-4 py-2 rounded-md  hover:shadow-lg">
									Submit Review
								</button>
							</form>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
}
