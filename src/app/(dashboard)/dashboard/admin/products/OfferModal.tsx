"use client";
import { useAddToHotOfferMutation } from "@/redux/api/featuredAndOfferApi";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Dialog, DialogPanel } from "@headlessui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TCreateHotOffer } from "@/types";

export default function OfferModal({ id }: { id: string }) {
	const { register, handleSubmit } = useForm<TCreateHotOffer>();
	//for modal
	let [isOpen, setIsOpen] = useState(false);

	const [addToHotOffer] = useAddToHotOfferMutation();
	//add offer product to data base
	const createOffer: SubmitHandler<TCreateHotOffer> = async (data) => {
		data.discount = Number(data.discount);
		data.productId = id;

		try {
			const res = await addToHotOffer(data).unwrap();
			if (res.success) {
				toast.success(res.message);
				setIsOpen(false);
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="btn primary-outline"
			>
				Add to Offer
			</button>

			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					<DialogPanel className="max-w-lg space-y-4 border bg-white p-8 rounded-md">
						<form
							onSubmit={handleSubmit(createOffer)}
							className="space-y-4"
						>
							<div className="flex flex-col">
								<label htmlFor="discount">Discount</label>
								<input
									id="discount"
									type="number"
									placeholder="20% discount"
									{...register("discount", {
										required: true,
									})}
								/>
							</div>

							<div className="flex flex-col">
								<label htmlFor="endDate">End Date</label>
								<input
									id="endDate"
									type="date"
									{...register("endDate", { required: true })}
								/>
							</div>
							<button
								type="submit"
								className="btn primary text-white"
							>
								Create Offer Product
							</button>
						</form>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
