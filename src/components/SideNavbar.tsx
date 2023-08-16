"use client";
import { SIDEBAR_NAV_ITEM } from "@/mock/mockData";

import { useRouter } from "next/navigation";

export default function SideNavbar() {
	const router = useRouter();
	return (
		<nav className="pl-3 mb-8">
			<h1 className="pt-1 mb-4 md:mb-8">Explore</h1>
			<ul className="flex flex-row  items-center md:items-start md:flex-col overflow-x-auto scrollbar-hide md:space-y-4  md:pl-2 w-full gap-x-4">
				{SIDEBAR_NAV_ITEM.map((item) => (
					<li
						key={item.title}
						className=" w-full transition-all hover:scale-105 hover:text-violet-600 hover:font-medium  duration-100 dark:hover:text-emerald-400  cursor-pointer"
						onClick={() =>
							router.push(`/products?category=${item.category}`)
						}
					>
						<p className="  inline-block text-center md:inline-flex ">
							{item.icon}
							<span className="flex flex-col md:flex-row  px-3 md:px-1 min-w-max tracking-wide ">
								{item.title}
							</span>
						</p>
					</li>
				))}
			</ul>
		</nav>
	);
}
