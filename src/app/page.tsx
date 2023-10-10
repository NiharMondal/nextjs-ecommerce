import Products from "@/components/Products";
import SideNavbar from "@/components/SideNavbar";
import { TProduct } from "@/types";
import Link from "next/link";

const url = process.env.API_URL as string;

type ServerResponse = {
	data: TProduct[];
	total: number;
};

//fetch product by category
const getProducts = async (page: number): Promise<ServerResponse> => {
	const response = await fetch(`${url}/api/products?page=${page}`, {
		cache: "no-cache",
	});

	return await response.json();
};

export default async function Home({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	const pageNumber = Number(searchParams.page);
	const products = await getProducts(pageNumber);

	const productCount = products.total;

	//defalut static limit
	const limit = 6;

	const pageCount = Math.ceil(productCount / limit);

	const pages = Array(pageCount)
		.fill(0)
		.map((_, index) => index + 1);

	return (
		<section className="flex flex-col md:flex-row gap-2">
			<aside className="w-full md:w-[220px] shrink-0">
				<SideNavbar />
			</aside>
			<div className="flex-1 py-2">
				<h2 className="capitalize mb-8">All Products</h2>
				<section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
					{products.data.map((product) => (
						<Products product={product} key={product.id} />
					))}
				</section>
				<div className="h-16 mt-6 py-4 flex items-center justify-center space-x-2">
					{pageNumber > 1 && (
						<Link href={`?page=${pageNumber - 1}`} className="px-4 py-2 ">
							{"<<<"}
						</Link>
					)}
					{pages.map((page) => (
						<Link
							href={`?page=${page}`}
							className={` px-4 py-2 border border-gray-300 flex-row ${
								page === pageNumber ? "bg-blue-700 text-white" : ""
							}`}
							key={page}
						>
							{page}
						</Link>
					))}
					{pageNumber < pageCount && (
						<Link href={`?page=${pageNumber + 1}`} className="px-4 py-2">
							{">>>"}
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
