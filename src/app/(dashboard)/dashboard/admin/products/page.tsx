import ProductModal from "@/components/admin-dashboard/@product/ProductModal";
import React from "react";
import ProductList from "./ProductList";

export default function ProductPage() {
	return (
		<div className="space-y-5">
			<ProductModal />
			<ProductList />
		</div>
	);
}
