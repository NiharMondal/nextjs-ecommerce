"use client";
import {
	useDeleteProductMutation,
	useGetProductQuery,
} from "@/redux/api/productApi";
import Image from "next/image";
import React from "react";
import AdminLoading from "../../loading";

import ProductAction from "./ProductAction";

export default function ProductList() {
	const { data: products, isLoading } = useGetProductQuery({});

	return (
		<div>
			<h2>Product List</h2>
			<div className="overflow-auto">
				{isLoading && <AdminLoading />}
				{products?.result && products?.result.length > 0 ? (
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
							{products.result.map((product) => {
								return (
									<tr key={product.id} className="border-b-2">
										<td className="py-2">
											<Image
												src={product.photo}
												height={50}
												width={100}
												alt={product.name}
											/>
										</td>
										<td>{product.name}</td>
										<td>{product.price}</td>
										<td>{product.brand}</td>
										<td>{product.inStock}</td>
										<ProductAction id={product.id} />
									</tr>
								);
							})}
						</tbody>
					</table>
				) : (
					<p className="text-accent text-2xl font-light">
						No data found!
					</p>
				)}
			</div>
		</div>
	);
}
