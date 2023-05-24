import { Product } from "@/app/category/[slug]/page";
import Link from "next/link";

type Props = {
	product: Product[];
};

export default function Product({ product }: Props) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
			{product.map((prod) => (
				<Link href={`/product/${prod.id.toString()}`}>
					<div
						key={prod.id}
						className=" md:h-[500px] w-full group cursor-pointer transition-all product-card border border-slate-300 p-2 space-y-4 text-center hover:shadow-md rounded-lg"
					>
						<img
							src={prod.image}
							alt="product image"
							className="h-[400px] md:h-[350px] object-cover object-top md:object-center w-full transition scale-90 group-hover:scale-100 duration-300 rounded-md"
						/>
						<p>{prod.title}</p>
						<h4>${prod.price}</h4>
					</div>
				</Link>
			))}
		</div>
	);
}
