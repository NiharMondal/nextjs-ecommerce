import { THotOfferResponse } from "@/types";
import React from "react";

export default function OfferKeyFeatures({
	product,
}: {
	product: THotOfferResponse;
}) {
	return (
		<div>
			<h4>Key Features</h4>
			<div className="space-y-1">
				<p>
					Processor: {product?.product?.processor_model}-
					{product?.product?.generation}
				</p>
				<p>RAM: {product?.product?.ram}</p>
				<p>Storage: {product?.product?.ssd || product?.product?.hdd}</p>
				<p>
					Display: {product?.product?.display_size}"{" "}
					{product?.product?.display}
				</p>
				<div>
					<p>Features</p>
					<ul className="list-disc ml-10">
						{product?.product?.features?.map((f) => (
							<li key={f} className="capitalize">
								{f}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
