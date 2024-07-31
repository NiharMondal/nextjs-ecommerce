import { TProductResponse } from '@/types';
import React from 'react'

export default function KeyFeatures({product}:{product: TProductResponse}) {
  return (
		<div>
			<h4>Key Features</h4>
			<div className="space-y-1">
				<p>
					Processor: {product?.processor_model}-{product?.generation}
				</p>
				<p>RAM: {product?.ram}</p>
				<p>Storage: {product?.ssd || product?.hdd}</p>
				<p>
					Display: {product?.display_size}" {product?.display}
				</p>
				<div>
					<p>Features</p>
					<ul className="list-disc ml-10">
						{product?.features?.map((f) => (
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
