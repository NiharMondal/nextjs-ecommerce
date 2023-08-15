
"use client"
import { SIDEBAR_NAV_ITEM } from "@/mock/mockData";

import { useRouter } from "next/navigation";

export default function SideNavbar() {
	const router = useRouter()
	return (
		<nav className="pl-3 mb-8">
			<h1 className="pt-1 mb-4 md:mb-8">Explore</h1>
			<ul className="flex flex-row  items-center md:items-start md:flex-col overflow-x-auto scrollbar-hide md:space-y-4  pl-2 space-x-2 md:space-x-0">
				{SIDEBAR_NAV_ITEM.map((item) => (
					<li
						key={item.title}
						className="w-full transition-all hover:scale-105  hover:text-violet-600 hover:font-medium  duration-100 dark:hover:text-emerald-400 "
						onClick={() =>
							router.push(`/products?category=${item.category}`)
						}
					>
						<div className=" inline-block text-center md:inline-flex cursor-pointer">
							{item.icon}
							<span className="flex flex-col md:flex-row text-center pl-3 md:pl-1 min-w-max tracking-wide ">
								{item.title}
							</span>
						</div>
					</li>
				))}
			</ul>
		</nav>
	);
}
