"use client";
import { useAllOrdersQuery } from "@/redux/api/orderApi";
import React from "react";

export default function Transaction() {
	const { data: orders,isLoading } = useAllOrdersQuery();
	return (
		<div className="space-y-3">
			<h4>Brief details of Transaction information</h4>
			<div className="bg-white p-5 rounded-md">
        {isLoading && <p>Please wait...</p>}
				{!orders?.result.length && <p>No Data found!</p>}
				{orders?.result.length && (
					<table className="w-full text-left">
						<thead className="border-b">
							<th className="py-2">OrderId</th>
							<th>Date</th>
							<th>Total</th>
						</thead>
						<tbody>
							{orders?.result.map((cu: any) => (
								<tr className="border-b" key={cu?.id}>
									<td className="py-2">{cu?.id}</td>
									<td>{cu?.createdAt?.split("T")[0]}</td>
									<td className="py-2 font-bold">${cu?.totalPrice}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}
