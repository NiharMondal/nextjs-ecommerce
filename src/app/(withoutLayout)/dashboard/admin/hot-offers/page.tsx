"use client";
import {
	useDeleteHotOfferMutation,
	useGetOfferedProductQuery,
} from "@/redux/api/featuredAndOfferApi";
import { countRemainingDays } from "@/utils/countDays";
import React from "react";
import { toast } from "react-toastify";

export default function HotOffersPage() {
	const { data: hotOfferProduct, isLoading } = useGetOfferedProductQuery();

	const [deleteHotOffer] = useDeleteHotOfferMutation();

	//handle delete
	const handleDeleteOfferProduct = async (id: string) => {
		try {
			const res = await deleteHotOffer(id).unwrap();
			if (res.success) {
				toast.success(res.message);
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	return (
		<div className="space-y-5">
			<h3>Hot Offers Product List</h3>

			<div className="bg-white p-5 rounded-md overflow-auto">
				{isLoading && <p>Please wait...</p>}
				{hotOfferProduct && hotOfferProduct.result.length < 0 && (
					<p>No product found!</p>
				)}
				<table className="w-full text-nowrap">
					<thead className="text-left border-b-2 ">
						<tr>
							<th>Product Name</th>
							<th>Duration</th>
							<th>End Date</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{hotOfferProduct?.result.map((p) => {
							const endDate = countRemainingDays(p.endDate);
							return (
								<tr className="border-b-2" key={p.id}>
									<td className="py-4">{p.product.name}</td>
									<td>{endDate} Days</td>
									<td>{p.endDate}</td>
									<td>
										<button
											onClick={() =>
												handleDeleteOfferProduct(p.id)
											}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
