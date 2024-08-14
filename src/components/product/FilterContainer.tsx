"use client";

import React, { useState } from "react";
import ReactSlider from "react-slider";
import Accordion from "../shared/Accortdion";
import { InitialStateType } from "@/app/(withLayout)/product/page";
type Props = {
	query: {
		brand: string[]
		processor_type: string[]
	}
	setQuery: React.Dispatch<React.SetStateAction<InitialStateType>>
}
const MIN = 0;
const MAX = 100000;

export default function FilterContainer({query, setQuery}:Props) {
	const [price, setPrice] = useState([MIN, MAX]);
	return (
		<div className="hidden md:block">
			<div className="min-w-[300px]">
				<div className="space-y-3">
					<div className="p-4 bg-white">
						<h3 className="border-b">Price Range</h3>

						<ReactSlider
							className="mt-5 h-1 bg-secondary/30"
							thumbClassName="example-thumb"
							trackClassName="example-track"
							onChange={setPrice}
							defaultValue={price}
							value={price}
							min={MIN}
							max={MAX}
						/>

						<div className="flex items-center justify-between mt-5">
							<code className="px-4 py-2 border">{price[0]}</code>
							<code className="px-4 py-2 border">{price[1]}</code>
						</div>
					</div>
					{/* <Accordion brand={query.brand} setQuery={setQuery}/> */}
				</div>
			</div>
		</div>
	);
}
