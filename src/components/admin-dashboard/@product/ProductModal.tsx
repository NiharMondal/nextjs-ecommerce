"use client";
import { productManager } from "@/assets/helper";
import { createProduct } from "@/assets/helper";
import { TProduct } from "@/types";

import { Dialog, DialogPanel } from "@headlessui/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ProductModal() {
	const [isOpen, setIsOpen] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<TProduct>();

	const onSubmit: SubmitHandler<TProduct> = (data) => console.log(data);
	return (
		<>
			<button onClick={() => setIsOpen(true)}>Create Product</button>

			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 p-4 bg-white overflow-auto">
					<button
						onClick={() => setIsOpen(false)}
						className="absolute right-4"
					>
						Close
					</button>
					<DialogPanel className="min-w-full min-h-full">
						<div className="max-w-5xl mx-auto pt-10">
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="bg-background p-10 rounded-md space-y-4"
							>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
									<div>
										<p>Product name</p>
										<input
											type="text"
											{...register("name")}
										/>
									</div>
									<div>
										<p>Price</p>
										<input
											type="number"
											{...register("price")}
										/>
									</div>
									<div>
										<p>Regular Price</p>
										<input
											type="number"
											{...register("regularPrice")}
										/>
									</div>
									<div>
										<p>Display name</p>
										<input
											{...register("display")}
											type="text"
											placeholder="FHD (1920 X 1080)"
										/>
									</div>
									<div>
										<p>Stock</p>
										<input
											type="number"
											{...register("inStock")}
										/>
									</div>
									<div>
										<p>Brand</p>
										<select {...register("brand")}>
											{productManager.brand.map(
												(brand) => (
													<option value={brand.value}>
														{brand.name}
													</option>
												)
											)}
										</select>
									</div>
									<div>
										<p>Processor </p>
										<select {...register("processor_type")}>
											{productManager.processor_type.map(
												(data) => (
													<option value={data.value}>
														{data.name}
													</option>
												)
											)}
										</select>
									</div>
									<div>
										<p>Processor Model </p>
										<select
											{...register("processor_model")}
										>
											{productManager.processor_model.map(
												(data) => (
													<option value={data.value}>
														{data.name}
													</option>
												)
											)}
										</select>
									</div>
									<div>
										<p>Generation </p>
										<select {...register("generation")}>
											{productManager.generation.map(
												(data) => (
													<option value={data.value}>
														{data.name}
													</option>
												)
											)}
										</select>
									</div>
									<div>
										<p>Display Size </p>
										<select {...register("display_size")}>
											{productManager.display_size.map(
												(data) => (
													<option value={data.value}>
														{data.name}
													</option>
												)
											)}
										</select>
									</div>
									<div>
										<p>Display Type </p>
										<select {...register("display_type")}>
											{productManager.display_type.map(
												(data) => (
													<option value={data.value}>
														{data.name}
													</option>
												)
											)}
										</select>
									</div>
									<div>
										<p>RAM </p>
										<select {...register("ram")}>
											{productManager.ram.map((data) => (
												<option value={data.value}>
													{data.name}
												</option>
											))}
										</select>
									</div>
									<div>
										<p>RAM Type </p>
										<select {...register("ram_type")}>
											{productManager.ram_type.map(
												(data) => (
													<option value={data.value}>
														{data.name}
													</option>
												)
											)}
										</select>
									</div>
									<div>
										<p>HDD </p>
										<select {...register("hdd")}>
											{productManager.hdd.map((data) => (
												<option value={data.value}>
													{data.name}
												</option>
											))}
										</select>
									</div>
									<div>
										<p>SSD </p>
										<select {...register("ssd")}>
											{productManager.ssd.map((data) => (
												<option value={data.value}>
													{data.name}
												</option>
											))}
										</select>
									</div>
									<div>
										<p>Graphics </p>
										<select {...register("graphics")}>
											{productManager.graphics.map(
												(data) => (
													<option value={data.value}>
														{data.name}
													</option>
												)
											)}
										</select>
									</div>
									<div>
										<p>Operating System</p>
										<select
											{...register("operating_system")}
										>
											{productManager.operating_system.map(
												(data) => (
													<option value={data.value}>
														{data.name}
													</option>
												)
											)}
										</select>
									</div>
								</div>
								<div>
									<textarea rows={4} placeholder="Product description..." className="w-full p-2 rounded-md outline-none ring-1 ring-secondary/70 focus:ring-2 focus:ring-secondary"></textarea>
								</div>
								<button className="bg-accent py-2 text-white rounded-md hover:bg-accent/90 px-5">
									Create Product
								</button>
							</form>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
