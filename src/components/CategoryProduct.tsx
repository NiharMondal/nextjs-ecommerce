import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
type Props = {
	product: TProduct;
};
export default function CategoryProduct({ product }: Props) {
	console.log(product);
	
	return (
		<Link href={`/products/${product.id}`} className="">
			<div className="relative h-[400px]   rounded-md">
				<Image
					src={product.image}
					alt={product.title}
					className="z-0 h-full w-full  object-cover object-center rounded-md"
					width={300}
					height={400}
					
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
				<div className="absolute bottom-4 left-0 px-3 w-full">
					<h3 className="text-white">
						{product.title}
					</h3>

					<div className="flex justify-between  mt-2">
						<h4 className="text-violet-400">${product.price}</h4>
						<p className="text-white">Rating: {product.rating.rate}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
