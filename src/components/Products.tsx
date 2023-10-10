import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ProductRating from "./Rating";
type Props = {
	product: TProduct;
};
export default function Products({ product }: Props) {
	return (
		<Link href={`/products/${product.id}`}>
			<div className="relative h-[400px]   rounded-md group overflow-hidden">
				<Image
					src={product.image}
					alt="product-image"
					className="z-0 h-full w-full  object-fill object-center rounded-md  group-hover:scale-110 duration-200 transition-all overflow-hidden "
					width={300}
					height={400}
					loading="lazy"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
				<div className="absolute bottom-4 left-0 px-3 w-full">
					<h3 className="text-white">{product.title}</h3>

					<div className="flex justify-between mt-2">
						<h4 className="text-blue-400">${product.price}</h4>
						<ProductRating value={product.rating.rate} />
					</div>
				</div>
			</div>
		</Link>
	);
}
