
import { FAKE_PRODUCTS } from "@/mock/productData";


export default function ProductPage({ params }: { params: { slug: string } }) {
	const product = FAKE_PRODUCTS.find((p) => p.id.toString() === params.slug);

	return (
		<section className="mt-8 lg:max-w-4xl xl:max-w-6xl mx-auto px-4">
			<div className="grid grid-cols-1  sm:grid-cols-2 gap-4 lg:gap-8">
				<div className="p-1 bg-gray-400 ">
					<img
						src={product?.image}
						alt="product"
						className="bg-gray-100 dark:bg-gray-800 w-full rounded shadow-sm h-[500px] scale-90"
					/>
				</div>
				<div>
					<h1>{product?.title}</h1>
					<p className="mt-3 font-extrabold text-emerald-500">${product?.price}</p>
					<input
						type="number"
						defaultValue={1}
						className="p-4 bg-gray-100 dark:bg-gray-600 rounded mt-5"
					/>
					<br />
					<button className="btn mt-5">
						add to cart
					</button>
					<p className="mt-5 ">
						{product?.description}
					</p>
				</div>
			</div>
		</section>
	);
}
