"use client";
import Image from "next/image";
import React, { useState } from "react";

import ProductAction from "./ProductAction";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import Pagination from "@/components/shared/Pagination";

export default function ProductList() {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState("6");

	const query: Record<string, string> = {};
	query["search"] = search;
	query["limit"] = limit.toString();
	query["page"] = page.toString()
	const { data: products, isLoading } = useGetAllProductQuery(query);
	
	return (
		<div className="space-y-5">
			<p className="text-accent font-semibold text-lg bg-secondary/10 tracking-wider p-5 rounded-md border-l-2 border-accent">
				Note: Search Functionality works on <q>onBlur</q> Effect
			</p>
			<div className="flex justify-between items-center gap-x-4">
				<div className="w-1/2">
					<h2 className="text-base md:text-xl">Product List</h2>
				</div>
				<div className="flex gap-x-3">
					<input
						onBlur={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search products..."
						className="w-[250px]"
					/>

					<select
						className="w-16 md:min-w-12"
						name="limit"
						id="limit"
						onChange={(e) => setLimit(e.target.value)}
					>
						<option value="6">6</option>
						<option value="12">12</option>
					</select>
				</div>
			</div>
			<div className="overflow-auto">
				{isLoading && <p>Please wait...</p>}
				{products?.result && products?.result.length > 0 && (
					<table className="w-full mt-5  text-nowrap">
						<thead className="text-left">
							<tr>
								<th>Image</th>
								<th>Product Name</th>
								<th>Price</th>
								<th>Brand</th>
								<th>Quantity</th>
								<th className="text-center">Offer/Featured</th>
								<th className="text-center">Action</th>
							</tr>
						</thead>
						<tbody>
							{products?.result?.map((product) => {
								return (
									<tr key={product.id} className="border-b-2">
										<td className="py-2">
											<Image
												src={product.photo}
												height={50}
												width={100}
												alt={product.name}
												className="size-16"
											/>
										</td>
										<td>{product.name}</td>
										<td>${product.price}</td>
										<td>{product.brand}</td>
										<td>{product.inStock}</td>
										<ProductAction id={product?.id} />
									</tr>
								);
							})}
						</tbody>
					</table>
				)}
				<div className="mt-5">
					{products?.result.length && (
						<Pagination
							currentPage={products?.meta?.page! || page}
							totalPages={products?.meta?.totalPages!}
							setPage={setPage}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
