import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
export default function page({ params }: { params: { slug: string } }) {

	const formatedQuery =
		params.slug === "gifts-and-living" ? "Gifts & Living" : params.slug;

	return (
		<React.Fragment>
			<div className="flex items-center justify-between ">
				<div>
					<h1 className="capitalize">{formatedQuery}</h1>
				</div>
				<div className="flex gap-4">
					<div className="flex items-center  font-bold border-2 border-teal-300 px-4 py-2">
						<Bars3BottomLeftIcon className="h-6 w-6" />
						<span className="ml-4">Filter</span>
					</div>
					<div className="flex items-center  justify-between font-bold  border-2 border-teal-300 px-4 py-2 w-full">
						<Bars3BottomLeftIcon className="h-6 w-6" />
						<span className="ml-4">Sort</span>
					</div>
				</div>
			</div>

			<div>
				
			</div>
		</React.Fragment>
	);
}
