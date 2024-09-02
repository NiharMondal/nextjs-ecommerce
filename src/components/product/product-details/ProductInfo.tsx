import { TProductResponse } from '@/types';
import React from 'react'

export default function ProductInfo({product}:{product:TProductResponse}) {
  return (
		<>
			<h3 className=" text-primary">{product?.name}</h3>
			<div className="whitespace-nowrap  flex flex-wrap items-center gap-3 *:bg-gray-200 *:py-1 *:px-3 *:rounded-full">
				<p>
					Price:{" "}
					<span className="font-semibold">{product?.price}</span>
				</p>
				<p className="">
					Regular Price:{" "}
					<span className="font-semibold">
						{" "}
						{product?.regularPrice}
					</span>
				</p>
				<p>
					Status:
					<span className="font-semibold">
						{product?.inStock > 0 ? " In Stock" : " Out of Stock"}
					</span>
				</p>
				<p>
					Brand:{" "}
					<span className="font-semibold">
						{product?.brand.toUpperCase()}
					</span>
				</p>
			</div>
		</>
  );
}
