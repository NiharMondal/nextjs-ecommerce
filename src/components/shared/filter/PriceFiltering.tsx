"use client"
import React from 'react'
import ReactSlider from 'react-slider';

type Props = {
    price: number[];
    setPrice: React.Dispatch<React.SetStateAction<number[]>>;
    min: number;
    max: number;

}

export default function PriceFiltering({price,setPrice,min, max}:Props) {
   
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
					min={min}
					max={max}
				/>

				<div className="flex items-center justify-between mt-5">
					<code className="px-4 py-2 border">{price[0]}</code>
					<code className="px-4 py-2 border">{price[1]}</code>
				</div>
			</div>
		</div>
  );
}
