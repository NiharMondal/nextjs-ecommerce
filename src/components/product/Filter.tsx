"use client";

import React, { useState } from "react";
import ReactSlider from "react-slider";
import FilterContainer from "./FilterContainer";
const MIN = 0;
const MAX = 100000;
export default function Filter() {
	const [price, setPrice] = useState([MIN, MAX]);

	return (
		<div className="space-y-2">
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
			<div className="bg-white p-4">
				<h3 className="border-b">Brand</h3>

				<div className="mt-4">
					<div className="flex items-center gap-x-3">
						<input
							type="checkbox"
							name="brand"
							id="brand"
							className=""
						/>
						<label htmlFor="brand">Apple</label>
					</div>
				</div>
			</div>
			<FilterContainer fieldName="Display Size" id="display" label={'5.5" to 6.5"'} name="dd" value="dd" />
		</div>
	);
}