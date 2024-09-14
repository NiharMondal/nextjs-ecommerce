"use client";
import Loading from "@/app/loading";
import { productManager } from "@/assets/helper";
import ProductCard from "@/components/ProductCard";
import FieldFiltering from "@/components/shared/filter/FieldFiltering";
import PriceFiltering from "@/components/shared/filter/PriceFiltering";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import React, { Suspense, useEffect, useState } from "react";
import Pagination from "@/components/shared/Pagination";
import { useRouter } from "next/navigation";

export type InitialStateType = {
	brand: string[];
	processor_type: string[];
};
const MIN = 0;
const MAX = 10000;

export default function ProductContainer({ search }: { search: string }) {
	const router = useRouter();
	//for modal
	const [isOpen, setIsOpen] = useState(false);

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
	const [orderBy, setOrderBy] = useState("");
	const [page, setPage] = useState(1);

	//query params these are going to backend
	const queryParams: Record<string, string> = {};
	queryParams["search"] = search;
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

	queryParams["orderBy"] = orderBy.toString();
	queryParams["page"] = page.toString();

	useEffect(() => {
		const newParams = new URLSearchParams();

		if (search) newParams.append("search", search || "");

		router.push(`?${newParams.toString()}`, undefined);
	}, [search]);

	// using rtk query to fetch data
	const { data: products, isLoading } = useGetAllProductQuery(queryParams);
	if (isLoading) return <Loading />;
	return (
		<Suspense fallback={<Loading />}>
			<section className="max-w-7xl mx-auto">
				<div className="py-10 md:py-20 px-4">
					<div className="flex gap-x-4 relative">
						{/* left side for mobile */}

						<Dialog
							open={isOpen}
							onClose={() => setIsOpen(false)}
							className="z-50"
						>
							<DialogBackdrop className="fixed inset-0  bg-black/60" />

							<div className="absolute inset-0 max-w-[260px] overflow-auto">
								<DialogPanel className="">
									<div className="space-y-4 bg-background shadow-2xl pb-20">
										<div className="space-y-3 overflow-auto">
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
												data={
													productManager.processor_type
												}
											/>
											<FieldFiltering
												label="Processor Model"
												query={processor_model}
												setQuery={setProcessorModel}
												data={
													productManager.processor_model
												}
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
												data={
													productManager.display_size
												}
											/>
											<FieldFiltering
												label="Display Type"
												query={display_type}
												setQuery={setDisplayType}
												data={
													productManager.display_type
												}
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
												data={
													productManager.operating_system
												}
											/>
										</div>
									</div>
								</DialogPanel>
							</div>
						</Dialog>

						{/* left side for desktop */}
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
								</div>
							</div>
						</div>

						{/* right side  */}
						<div className="space-y-5 w-full">
							<div className="px-5 py-3 bg-white rounded flex items-center justify-between">
								<p className="hidden md:block">Products</p>
								<button
									onClick={() => setIsOpen(true)}
									className="inline-flex items-center gap-x-1 md:hidden bg-secondary/10 px-3 py-1 rounded-md"
								>
									{" "}
									<AdjustmentsHorizontalIcon className="size-8" />{" "}
									Filter
								</button>

								<div className="flex items-center gap-x-3 text-nowrap">
									<p>Sort by: </p>
									<select
										onChange={(e) =>
											setOrderBy(e.target.value)
										}
										name="orderBy"
										id="orderBy"
										className="text-sm"
									>
										<option value="">Default</option>
										<option value="asc">
											Price (Low &gt; High)
										</option>
										<option value="desc">
											Price (High &gt; Low)
										</option>
									</select>
								</div>
							</div>

							{!products?.result.length && (
								<p className="text-2xl text-accent">
									Sorry, No Product Found!
								</p>
							)}
							<div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5">
								{products?.result?.map((product) => (
									<ProductCard
										product={product}
										key={product.id}
									/>
								))}
							</div>
							{products?.result.length && (
								<Pagination
									currentPage={products?.meta?.page! || page}
									totalPages={products?.meta?.totalPages!}
									setPage={setPage}
								/>
							)}
						</div>
					</div>
				</div>
			</section>
		</Suspense>
	);
}
