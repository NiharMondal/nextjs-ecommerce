import { SIDEBAR_NAV_ITEM } from "@/mock/mockData";
import Link from "next/link";
import React from "react";

export default function SideNavbar() {
	return (
		<nav className="pl-3">
			<h1 className="pt-1 mb-4 md:mb-8">Explore</h1>
			<div className="flex flex-row  items-center md:items-start md:flex-col md:w-[180px] overflow-x-auto scrollbar-hide ">
				{SIDEBAR_NAV_ITEM.map((item) => (
					<div className="mb-8 w-full pl-4" key={item.title}>
						<Link
							href={item.link === "category/new-in" ? "/" : item.link}
							className=" flex flex-col md:flex-row text-center w-28 md:w-full  font-semibold transition duration-100  active:text-blue-400 transform hover:scale-110 cursor-pointer last:mr-5"
						>
							{item.icon}
							<span className="md:ml-4"> {item.title}</span>
						</Link>
					</div>
				))}
			</div>
		</nav>
	);
}
