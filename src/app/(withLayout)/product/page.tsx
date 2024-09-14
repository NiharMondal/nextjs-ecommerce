import React from "react";
import ProductContainer from "./ProductContainer";

export const metadata = {
	title: "Products | Gadget Galaxy",
	description:
		"Buy the latest products at the best price from Gadget Galaxy. Features, specifications, and customer reviews.",
};


export default function ProductPage({
	searchParams,
}: {
	searchParams: Record<string, string>;
}) {
	return <ProductContainer search={searchParams.search} />;
}
