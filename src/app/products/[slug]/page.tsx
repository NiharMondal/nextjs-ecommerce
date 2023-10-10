import CartButton from "@/components/CartButton";
import ProductRating from "@/components/Rating";
import { TProduct } from "@/types";
import Image from "next/image";

const url = process.env.API_URL!;

type Props = {
	product: TProduct;
};

const getSingleProduct = async (slug: string): Promise<TProduct> => {
	const response = await fetch(`${url}/api/products/${slug}`, {
		cache: "no-store",
	});

	return await response.json();
};

const ProductDetails = ({ product }: Props) => {
	return (
		<section className=" pt-12 ">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4 lg:gap-8">
				<div className="border rounded-md w-full h-[440px]">
					<Image
						src={product.image}
						width={300}
						height={400}
						alt="product"
						className="w-full h-[440px] rounded-md object-center object-fill"
					/>
				</div>
				<div className="space-y-5 flex flex-col justify-center">
					<h1>{product.title}</h1>
					<div className="flex justify-between">
						<h2 className="text-blue-500">${product.price}</h2>
						<ProductRating value={product.rating.rate!} />
					</div>
					<CartButton pd={product} />
					<div className="pb-6">
						<h4>Product Description: </h4>
						<p>{product.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default async function SingleProduct({
	params,
}: {
	params: { slug: string };
}) {
	const product = await getSingleProduct(params.slug);

	return <ProductDetails product={product} />;
}
