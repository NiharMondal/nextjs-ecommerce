"use client";
import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
const cat = ["Laptop", "Mobile", "Desktop", "MackBook"];
export default function Category() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<section className="shadow-lg bg-white">
				<div className="hidden md:flex items-center gap-x-7  mx-auto max-w-6xl p-5">
					{cat.map((c) => (
						<div key={c}>{c}</div>
					))}
				</div>
			</section>

			{/* for mobile  */}
			<div className="md:hidden mt-5 px-5">
				<div className="flex items-center justify-between">
					<div >
						<button
							onClick={() => setIsOpen(true)}
							className="btn-primary hover:bg-primary/90"
						>
							Filter
						</button>
					</div>
					<div>
						<select name="price" id="price">
							<option value="">Sort by: price</option>
							<option value="asc">Low to high</option>
							<option value="asc">Hight to low</option>
						</select>
					</div>
				</div>
				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					className="z-50"
				>
					<DialogBackdrop className="fixed inset-0 bg-black/50" />
					<DialogPanel className="absolute top-0 right-0 bottom-0 text-white  bg-primary pl-10 pt-10 ">
						<div className="space-y-4 min-w-[250px]">
							{cat.map((c) => (
								<div key={c}>{c}</div>
							))}
						</div>
					</DialogPanel>
				</Dialog>
			</div>
		</>
	);
}
