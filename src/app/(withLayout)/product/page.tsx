
import Filter from '@/components/product/Filter';
import ProductCard from '@/components/ProductCard';
import React from 'react'

export default function ProductPage() {
  return (
		<section className="max-w-7xl mx-auto">
			<div className="py-10 md:py-20 px-4">
				<div className="flex gap-x-4">
					{/* left side  */}
					<div className="hidden md:block">
						<div className="min-w-[250px]">
							<Filter/>
						</div>
					</div>
					{/* right side  */}
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
						{[...Array(5)].map((product, index) => (
							<ProductCard product={product} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
  );
}
