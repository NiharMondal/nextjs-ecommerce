import Banner from "@/components/Banner";
import Category from "@/components/Category";
import { featuredProuducts } from "@/mock/mockData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<section>
			<Banner />
			<Category />

			<div className="mt-8">
				<h3 className="uppercase text-center tracking-wider">
					{" "}
					featured products
				</h3>
				<div className="mt-8 lg:max-w-4xl xl:max-w-6xl mx-auto px-4">
					<div className="grid grid-cols-2  md:grid-cols-4 gap-4 ">
						{featuredProuducts.map((fp) => (
							<div key={fp.name}>
								<Link href={`product/${fp.id}`}>
									<Image
										src={fp.cover}
										width={150}
										height={150}
										sizes="100vw"
										alt="featured product"
										className="bg-gray-100 dark:bg-gray-800 w-full rounded-sm shadow-sm"
									/>
									<div className="mt-4 font-bold">
										<h3 className="hover:underline">
											{fp.name}
										</h3>
										<p>${fp.price}</p>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
