import Link from "next/link";
import Image from "next/image";
import { shoesCategory } from "@/mock/mockData";

export default function Category() {
  return (
		<div className="lg:max-w-4xl xl:max-w-6xl mx-auto mt-5 px-4 relative pb-5">
			<div className="grid justify-items-center grid-cols-1  md:grid-cols-3 gap-x-4 gap-y-8">
				{shoesCategory.map((shoe) => {
					return (
						<div key={shoe.id} className="w-full space-y-3">
							<Image
								src={shoe.cover}
								height={400}
								width={400}
								alt="category"
								className="w-full sm:h-80 object-cover object-center rounded-md shadow-md"
							/>
							<h1>{shoe.title} </h1>
							<p>{shoe.description}</p>

							<Link href={`/category/${shoe.category}`}>
								<button className="bg-gray-800 text-gray-100 font-bold tracking-wide dark:bg-gray-100 dark:text-gray-700 px-5 py-2 uppercase rounded-md mt-3">
									{shoe.category} shop
								</button>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
  );
}
