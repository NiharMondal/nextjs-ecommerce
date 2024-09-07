"use client";
import React from "react";
import { toast } from "react-toastify";
import { useAddFeatureProductMutation } from "@/redux/api/featuredAndOfferApi";
import OfferModal from "./OfferModal";
import { useDeleteProductMutation } from "@/redux/api/productApi";
import ProductEditModal from "@/components/admin-dashboard/@product/ProductEditModal";
export default function ProductAction({ id }: { id: string }) {
	const [deleteProduct] = useDeleteProductMutation();
	const [addFeatureProduct] = useAddFeatureProductMutation();

	const handleDelete = async (id: string) => {
		try {
			const res = await deleteProduct(id).unwrap();
			toast.success(res?.message);
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	const makeFeaturedProduct = async (id: string) => {
		try {
			const res = await addFeatureProduct({ productId: id }).unwrap();
			if (res.success) {
				toast.success(res.message);
			} else {
				toast.error("Something went wrong!");
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};

	return (
		<>
			<td className="text-center space-x-2">
				<OfferModal id={id} />
				<button
					onClick={() => makeFeaturedProduct(id)}
					className="btn primary-outline"
				>
					Make Featured Product
				</button>
			</td>
			<td className="text-center space-x-1">
				<ProductEditModal productId={id} />
				<button
					onClick={() => handleDelete(id)}
					className=" px-3 py-1 border border-accent rounded-md text-red-800 hover:bg-red-700 hover:text-white"
				>
					Delete
				</button>
			</td>
		</>
	);
}
