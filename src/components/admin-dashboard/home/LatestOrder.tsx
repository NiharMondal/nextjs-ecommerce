import React from "react";

export default function LatestOrder() {
	return (
		<div className="p-5 bg-white">
			<h2>Latest Orders</h2>
			<div className="mt-8 overflow-auto">
				<table className="w-full  whitespace-nowrap">
					<tbody>
						<tr className="border-b-2 border-gray-100">
							<td className="py-2">Devon Lane</td>
							<td>devon@example.com</td>
							<td>$777.43</td>
							<td>Delivered</td>
							<td>05.02.2024</td>
							<td>Action</td>
						</tr>
						<tr>
							<td className="py-2">Devon Lane</td>
							<td>devon@example.com</td>
							<td>$777.43</td>
							<td>Delivered</td>
							<td>05.02.2024</td>
							<td>Action</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
