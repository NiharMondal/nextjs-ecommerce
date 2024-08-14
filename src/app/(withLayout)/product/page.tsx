"use client";
import Loading from "@/app/loading";
import { productManager } from "@/assets/helper";
import ProductCard from "@/components/ProductCard";
import FieldFiltering from "@/components/shared/filter/FieldFiltering";
import PriceFiltering from "@/components/shared/filter/PriceFiltering";
import { useGetProductQuery } from "@/redux/api/productApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
export type InitialStateType = {
	brand: string[];
	processor_type: string[];
};
const MIN = 0;
const MAX = 100000;

export default function ProductPage() {
	const [price, setPrice] = useState<number[]>([MIN, MAX]);
	const [brand, setBrand] = useState<string[]>([]);

	const [processor_type, setProcessorType] = useState<string[]>([]);
	const [processor_model, setProcessorModel] = useState<string[]>([]);
	const [generation, setGeneration] = useState<string[]>([]);
	const [display_size, setDisplaySize] = useState<string[]>([]);
	const [display_type, setDisplayType] = useState<string[]>([]);
	const [ram, setRam] = useState<string[]>([]);
	const [ram_type, setRamType] = useState<string[]>([]);
	const [hdd, setHdd] = useState<string[]>([]);
	const [ssd, setSSD] = useState<string[]>([]);
	const [graphics, setGraphics] = useState<string[]>([]);
	const [operating_system, setOperatingSystem] = useState<string[]>([]);
	const [features, setFeatures] = useState<string[]>([]);

	//query params that going to backend
	const queryParams: Record<string, string> = {};

	queryParams["price"] = price.toString();
	queryParams["brand"] = brand.toString();

	queryParams["processor_type"] = processor_type.toString();
	queryParams["processor_model"] = processor_model.toString();
	queryParams["generation"] = generation.toString();
	queryParams["display_size"] = display_size.toString();
	queryParams["display_type"] = display_type.toString();
	queryParams["ram"] = ram.toString();
	queryParams["ram_type"] = ram_type.toString();
	queryParams["hdd"] = hdd.toString();
	queryParams["ssd"] = ssd.toString();
	queryParams["graphics"] = graphics.toString();
	queryParams["operating_system"] = operating_system.toString();
	queryParams["features"] = features.toString();

	// using rtk query to fetch data
	const { data: products, isLoading } = useGetProductQuery(queryParams);

	return (
		<section className="max-w-7xl mx-auto">
			<div className="py-10 md:py-20 px-4">
				<div className="flex gap-x-4">
					{/* left side  */}
					<div className="hidden md:block">
						<div className="min-w-[300px]">
							<div className="space-y-3">
								<PriceFiltering
									max={MAX}
									min={MIN}
									price={price}
									setPrice={setPrice}
								/>
								<FieldFiltering
									label="Brand"
									query={brand}
									setQuery={setBrand}
									data={productManager.brand}
								/>
								<FieldFiltering
									label="Processort Type"
									query={processor_type}
									setQuery={setProcessorType}
									data={productManager.processor_type}
								/>
								<FieldFiltering
									label="Processor Model"
									query={processor_model}
									setQuery={setProcessorModel}
									data={productManager.processor_model}
								/>
								<FieldFiltering
									label="Generation"
									query={generation}
									setQuery={setGeneration}
									data={productManager.generation}
								/>
								<FieldFiltering
									label="Display Size"
									query={display_size}
									setQuery={setDisplaySize}
									data={productManager.display_size}
								/>
								<FieldFiltering
									label="Display Type"
									query={display_type}
									setQuery={setDisplayType}
									data={productManager.display_type}
								/>
								<FieldFiltering
									label="RAM"
									query={ram}
									setQuery={setRam}
									data={productManager.ram}
								/>
								<FieldFiltering
									label="RAM Type"
									query={ram_type}
									setQuery={setRamType}
									data={productManager.ram_type}
								/>
								<FieldFiltering
									label="HDD"
									query={hdd}
									setQuery={setHdd}
									data={productManager.queryHDD}
								/>
								<FieldFiltering
									label="SSD"
									query={ssd}
									setQuery={setSSD}
									data={productManager.ssd}
								/>
								<FieldFiltering
									label="Graphics"
									query={graphics}
									setQuery={setGraphics}
									data={productManager.graphics}
								/>
								<FieldFiltering
									label="Operating System"
									query={operating_system}
									setQuery={setOperatingSystem}
									data={productManager.operating_system}
								/>
								<FieldFiltering
									label="Special features"
									query={features}
									setQuery={setFeatures}
									data={productManager.features}
								/>
							</div>
						</div>
					</div>

					{/* right side  */}
					<div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5">
						{isLoading && <Loading />}
						{products?.result?.map((product, index) => (
							<ProductCard product={product} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
