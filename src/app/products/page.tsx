import CategoryProduct from "@/components/CategoryProduct";
import { TProduct } from "@/types";

const getProducts = async (
	category: string
): Promise<TProduct[] | undefined> => {
	const response = await fetch(
		`http://localhost:3000/api/products?category=${category}`
	);

	if (response.ok) return response.json();
};

export default async function page({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	const products = await getProducts(searchParams.category);

	return (
		<section className="py-2 ">
			<h2 className="capitalize mb-8">{searchParams.category}</h2>
			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{products &&
					products.map((item) => <CategoryProduct product={item} />)}
			</section>
		</section>
	);
}
