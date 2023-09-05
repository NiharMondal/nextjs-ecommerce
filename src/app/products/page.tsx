import Products from "@/components/Products";
import { TProduct } from "@/types";

const url = process.env.API_URL;

//fetch product by category
const getProducts = async (
	category: string
): Promise<TProduct[] | undefined> => {
	const response = await fetch(`${url}/api/products?category=${category}`, {
		cache: "no-store",
	});

	if (response.ok) return response.json();
};

export default async function ProductPage({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	const products = await getProducts(searchParams.category!);
	return (
		<section className="py-2 ">
			<h2 className="capitalize mb-8">{searchParams.category}</h2>
			<section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
				{products?.map(product=><Products product={product} key={product.id}/>)}
			</section>
		</section>
	);
}
