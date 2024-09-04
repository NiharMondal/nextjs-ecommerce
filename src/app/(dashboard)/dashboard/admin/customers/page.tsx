"use client";
import { useGetCustomerQuery } from "@/redux/api/orderApi";
import React from "react";

export default function AdminCustomerPage() {
	const { data: customers,isLoading } = useGetCustomerQuery();

	return (
		<div className="space-y-5">
			<div className="p-5 bg-secondary/10 text-accent rounded-md border-l-2 border-accent">
				<p className="text-xl font-semibold">Note!</p>
				<p>
					This list only shows those users who successfully placed
					order. Here is the list of top ten customers.
				</p>
			</div>
			<div className="bg-white p-5 rounded-md">
				{isLoading && <p>Please wait...</p>}
				{!customers?.result.length && <p>No Data found!</p>}
				{customers?.result.length && (
					<table className="w-full text-left">
						<thead className="border-b">
							<th className="py-2">Name</th>
							<th>Email</th>
						</thead>
						<tbody>
							{customers?.result.map((cu: any) => (
								<tr className="border-b" key={cu?.id}>
									<td className="py-2">{cu?.user?.name}</td>
									<td>{cu?.user?.email}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}
