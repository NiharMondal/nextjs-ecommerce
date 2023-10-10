import { SIDEBAR_NAV_ITEM } from "@/assets/dummyData";
import Link from "next/link";

export default function SideNavbar() {
	return (
		<nav className="pl-3 mb-8">
			<h1 className="pt-1 mb-4 md:mb-8">Explore</h1>
			<ul className="flex flex-row  items-center md:items-start md:flex-col overflow-x-auto scrollbar-hide md:space-y-4  md:pl-2 w-full gap-x-4">
				{SIDEBAR_NAV_ITEM.map((item) => (
					<Link
						href={`/products?category=${item.category}`}
						key={item.title}
						className=" w-full transition-all hover:scale-105 hover:text-blue-600 hover:font-medium  duration-100 dark:hover:text-emerald-400  cursor-pointer"
					>
						<p className="inline-block text-center md:inline-flex ">
							{item.icon}
							<span className="flex flex-col md:flex-row  px-3 md:px-1 min-w-max tracking-wide ">
								{item.title}
							</span>
						</p>
					</Link>
				))}
			</ul>
		</nav>
	);
}
