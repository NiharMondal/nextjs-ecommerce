import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
export default function LeftSideBar({
	closeDrawer,
	open,
}: {
	closeDrawer: () => void;
	open: boolean;
}) {
	return (
		<aside className={` ${open ? "block" : "hidden"}`}>
			<div className={` bg-white  shadow-xl min-h-screen w-[280px]`}>
				<div className="h-[80px] border-b-2 border-accent">
					<div className="h-full flex items-center justify-between px-4">
						<div>hello</div>
						<div>
							{" "}
							<button onClick={closeDrawer}>
								<ChevronLeftIcon width={20} />
							</button>
						</div>
					</div>
				</div>
				<ul className="p-8">
					<li>Dashboard</li>
					<li>Products</li>
					<li>Customers</li>
					<li>Reviews</li>
					<li>Statistics</li>
					<li>Transactions</li>
					<li>Hot offers</li>
				</ul>
			</div>
		</aside>
	);
}
