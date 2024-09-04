"use client";
import { useGetLatestOrderQuery } from "@/redux/api/orderApi";
import React from "react";

export default function LatestOrder() {
	const { data: latestOrders, isLoading } = useGetLatestOrderQuery();
	return (
		<div className="p-5 bg-white">
			<h2>Latest Orders</h2>
			<div className="mt-8 overflow-auto">
				{isLoading && <p>Please wait...</p>}
				{!latestOrders?.result?.length && <p>No data found!</p>}
				{latestOrders?.result?.length && (
					<table className="w-full  whitespace-nowrap">
						<tbody>
							{latestOrders?.result?.map((lo: any) => (
								<tr
									className="border-b-2 border-gray-100"
									key={lo?.id}
								>
									<td className="py-2">{lo?.user?.name}</td>
									<td>{lo?.user?.email}</td>
									<td>${lo?.totalPrice}</td>
								
									<td>{lo?.createdAt.split("T")[0]}</td>
									
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}
