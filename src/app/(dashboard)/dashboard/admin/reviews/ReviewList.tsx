"use client";
import {
	useDeleteReviewMutation,
	useGetReviewQuery,
} from "@/redux/api/productReviewApi";
import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";



export default function ReviewList() {
	const { data: reviews } = useGetReviewQuery();
	const [deleteReview] = useDeleteReviewMutation();
	if (!reviews?.result.length) return <p>No data found!</p>;

	const handleDelete = async (id: string) => {
		try {
			await deleteReview(id);

			toast.success("Review deleted successfully");
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<div className="bg-white p-5 rounded">
			<table className="w-full text-left">
				<thead className="border-b ">
					<th className="pb-3">Product Name</th>
					<th>User</th>
					<th>Comment</th>
					<th>Rating</th>
					<th>Action</th>
				</thead>
				<tbody>
					{reviews?.result?.map((review) => (
						<tr key={review.id}>
							<td className="py-2">{review?.product?.name}</td>
							<td>{review?.user?.name}</td>
							<td>{review.message.substring(0, 100)}</td>
							<td>{review.rating}</td>
							<td  onClick={() => handleDelete(review.id)}>
								<TrashIcon width={20} className="text-accent cursor-pointer" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
