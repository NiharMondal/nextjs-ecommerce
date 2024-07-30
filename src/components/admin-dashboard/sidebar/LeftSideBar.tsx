import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { adminRoutes } from "../admin-routes";
import { usePathname } from "next/navigation";

export default function LeftSideBar({
	closeDrawer,
	open,
}: {
	closeDrawer: () => void;
	open: boolean;
}) {
	const pathname = usePathname();

	return (
		<aside className={`min-h-screen ${open ? "block" : "hidden"}`}>
			<div
				className={`fixed top-0 left-0 lg:relative bg-white shadow-xl h-full w-[250px]`}
			>
				<div className="h-[80px] border-b-2 border-accent">
					<div className="h-full flex items-center justify-between px-4">
						<div>hello</div>
						<div>
							<button onClick={closeDrawer}>
								<ChevronLeftIcon width={20} />
							</button>
						</div>
					</div>
				</div>
				<ul className="p-5">
					{adminRoutes.map(({ level, route }) => (
						<Link href={route} key={level}>
							<li
								className={`px-4 py-3 font-medium rounded-tl rounded-bl tracking-wide duration-300 transition-all ease-in ${
									pathname === route
										? "bg-secondary/20 border-r-2 border-accent text-accent "
										: ""
								}`}
							>
								{level}
							</li>
						</Link>
					))}
				</ul>
			</div>
		</aside>
	);
}
