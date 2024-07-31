"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
export default function SearchBox() {
	const [openSearch, setOpenSearch] = useState(false);

	function open() {
		setOpenSearch(true);
	}

	function close() {
		setOpenSearch(false);
	}
	return (
		<>
			{/* for mobile */}
			<div className="md:hidden">
				<Button onClick={open}>
					<MagnifyingGlassIcon
						width={20}
						className="duration-300 hover:scale-x-110"
						color="black"
					/>
				</Button>
				<Dialog
					open={openSearch}
					onClose={() => setOpenSearch(false)}
					className="z-50"
				>
					{/* The backdrop, rendered as a fixed sibling to the panel container */}
					<DialogBackdrop className="fixed inset-0 bg-black/80" />

					{/* Full-screen container to center the panel */}
					<div className="absolute top-0 left-0 right-0">
						{/* The actual dialog panel  */}
						<DialogPanel className="max-w-lg space-y-4 bg-white p-8">
							<div className="relative group">
								<input
									type="text"
									placeholder="Search Products"
									className="ring-2 ring-secondary p-2 rounded outline-none w-full"
								/>
								<button className="absolute text-black right-3 top-[10px]">
									<MagnifyingGlassIcon
										width={20}
										className="duration-300 group-hover:scale-x-110"
										color="black"
									/>
								</button>
							</div>
						</DialogPanel>
					</div>
				</Dialog>
			</div>
			<div className="hidden md:block">
				<div className="flex items-center justify-center min-w-[200px] bg-light-gray rounded-full overflow-hidden h-12">
					<input
						type="text"
						placeholder="Search products..."
						className="pl-8 w-full h-full outline-none text-gray-500"
					/>
					<button className="btn primary w-[80px] h-full group">
						<MagnifyingGlassIcon
							width={20}
							className="mx-auto text-background  transition-transform duration-100 ease-in group-hover:scale-125"
						/>
					</button>
				</div>
			</div>
		</>
	);
}
