import React from 'react'
import {
	CurrencyDollarIcon,
	ShoppingCartIcon,
	ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import ShortInfo from './ShortInfo';
export default function InfoWrapper() {
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
				value="$1373823873"
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
				value="2321"
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
				value="432"
				clx="bg-yellow-500/20"
			/>
		</div>
  );
}
