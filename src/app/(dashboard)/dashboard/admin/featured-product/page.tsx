"use client";
import {
	useDeleteFeaturedProductMutation,
	useGetFeaturedProductQuery,
} from "@/redux/api/featuredAndOfferApi";
import React from "react";
import { toast } from "react-toastify";

export default function FeaturedProductPage() {
	const { data: featuredProducts, isLoading } = useGetFeaturedProductQuery();

	const [deleteHotOffer] = useDeleteFeaturedProductMutation();

	//handle delete
	const handleDeleteOfferProduct = async (id: string) => {
		try {
			const res = await deleteHotOffer(id).unwrap();
			if (res.success) {
				toast.success(res.message);
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};

	return (
		<div className="space-y-5">
			<h3>Featured Products List</h3>

			<div className="bg-white p-5 rounded-md overflow-auto">
				{isLoading && <p>Please wait...</p>}
				{featuredProducts && featuredProducts.result.length < 0 && (
					<p>No product found!</p>
				)}
				<table className="w-full text-nowrap">
					<thead className="text-left border-b-2 ">
						<tr>
							<th>Product Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{featuredProducts?.result.map((p) => {
							return (
								<tr className="border-b-2" key={p.id}>
									<td className="py-4">{p.product.name}</td>
									<td>{p.product.price}</td>
									<td>{p.product.inStock}</td>
									<td>
										<button
											onClick={() =>
												handleDeleteOfferProduct(p.id)
											}
											className="btn border-2 border-accent hover:bg-accent hover:text-white"
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
