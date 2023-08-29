import CategoryProduct from "@/components/CategoryProduct";
import SideNavbar from "@/components/SideNavbar";
import { TProduct } from "@/types";

//fetch product by category
const getProducts = async (): Promise<TProduct[] | undefined> => {
	const response = await fetch(`http://localhost:3000/api/products`, {
		cache: "no-cache",
	});

	if (response.ok) return response.json();
};

export default async function Home() {
	const products = await getProducts();
	return (
		<section className="flex flex-col md:flex-row gap-2">
			<aside className="w-full md:w-[220px] shrink-0">
				<SideNavbar />
			</aside>
			<div className="flex-1">
				<section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
					{products &&
						products?.map((item) => (
							<CategoryProduct product={item && item} key={item?.id} />
						))}
				</section>
			</div>
		</section>
	);
}
