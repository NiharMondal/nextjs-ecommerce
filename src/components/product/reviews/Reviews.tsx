"use client"
import React from "react";
import { TReviewsResponse } from "@/types";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import avatar from "../../../../public/img/head.png";
import ReviewModal from "./ReviewModal";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/slice/authSlice";
type ReviewProps = {
	reviews: TReviewsResponse[];
	productId: string;
}
export default function Reviews({ reviews,productId }:ReviewProps) {
	const user:any = useAppSelector(selectedUser);

	return (
		<>
			<div className="bg-white p-5 rounded-md">
				<div className="md:flex flex-wrap items-center justify-between w-full border-b pb-3">
					<div>
						<h3>Reviews ({reviews.length})</h3>
						<p>
							Get specific details about this product from
							customers who own it.
						</p>
					</div>

					<ReviewModal userId={user?.id} productId={productId} />
				</div>
				{reviews.length > 0 ? (
					<div className="space-y-3 divide-y w-full ">
						{reviews.map((review) => (
							<div className="py-4 flex gap-3" key={review.id}>
								<div className="max-h-[60px] max-w-[60px]">
									<Image
										src={avatar || review.user.avatar}
										height={100}
										width={100}
										alt="avatar"
										className="h-full w-full rounded-full"
									/>
								</div>
								<div className="w-full">
									<div className="flex justify-between items-center">
										<h5 className="font-bold text-primary">
											{review?.user?.name}
										</h5>
										<p className="text-accent font-bold">
											{review.rating}
										</p>
									</div>
									<p className="">{review.message}</p>
								</div>
							</div>
						))}
					</div>
				) : (
					<NoReviewFlag />
				)}
			</div>
		</>
	);
}

const NoReviewFlag = () => {
	return (
		<div className="flex flex-col items-center justify-center h-[200px]">
			<div className="p-5 bg-primary/5 rounded-full">
				<ClipboardDocumentListIcon className="size-12 text-primary" />
			</div>
			<p className="font-semibold text-sm mt-2">
				This product has no reviews yet. Be the first one to write a
				review.
			</p>
		</div>
	);
};
