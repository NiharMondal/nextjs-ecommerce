
import Link from "next/link";
import { TProduct } from "@/types";

type Props = {
	product: TProduct[];
};

export default function Product({ product }: Props) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-3">
			{product.map((prod) => (
				<div key={prod.id}>
					<Link href={`/product/${prod.id.toString()}`}>
						<div
							key={prod.id}
							className=" h-[450px] sm:h-[330px] lg:h-[300px] w-full group cursor-pointer transition-all product-card border border-slate-300 px-3 text-center hover:shadow-md rounded-lg"
						>
							<img
								src={prod.image}
								alt="product image"
								className="h-[350px]  md:h-[250px] lg:h-[200px] object-center object-cover md:object-center w-full transition scale-90 group-hover:scale-100 duration-300 rounded-md p-8 md:p-2"
							/>
							<div className="lg:pt-4">
								<p>{prod.title.slice(0, 20)}...</p>
								<h4>${prod.price}</h4>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}
