"use client";
import React from "react";
import {
	CurrencyDollarIcon,
	ShoppingCartIcon,
	ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import ShortInfo from "./ShortInfo";
import { useMetaDataQuery } from "@/redux/api/metaData";
export default function InfoWrapper() {
	const { data: metaData } = useMetaDataQuery();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
			<ShortInfo
				icon={
					<CurrencyDollarIcon
						width={50}
						height={50}
						className="bg-primary rounded-full text-white"
					/>
				}
				title="Total Sales"
				value={"$" + metaData?.result?.totalSales}
				clx="bg-primary/20"
			/>
			<ShortInfo
				icon={
					<ShoppingCartIcon
						width={50}
						height={50}
						className="bg-secondary rounded-full text-white"
					/>
				}
				title="Total Ordrs"
				value={metaData?.result?.orders}
				clx="bg-secondary/20"
			/>
			<ShortInfo
				icon={
					<ClipboardDocumentListIcon
						width={50}
						height={50}
						className="bg-yellow-500 rounded-full text-white"
					/>
				}
				title="Total Products"
				value={metaData?.result?.products}
				clx="bg-yellow-500/20"
			/>
		</div>
	);
}
