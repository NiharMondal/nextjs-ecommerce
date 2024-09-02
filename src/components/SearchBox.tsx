"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
export default function SearchBox() {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const [openSearch, setOpenSearch] = useState(false);

	function open() {
		setOpenSearch(true);
	}
	const handleSearch = () => {
		if (search.length) {
			router.push(`/product?search=${search}`);
		} else {
			router.push(`/product`);
		}
	};
	const handleSearchForMobile = () => {
		if (search.length) {
			router.push(`/product?search=${search}`);
		}else{
			router.push(`/product`);
		}
		setOpenSearch(false);
	};
	return (
		<>
			{/* for mobile */}
			<div className="md:hidden">
				<button onClick={open} className="bg-secondary">
					<MagnifyingGlassIcon
						title="Search"
						width={30}
						className="absolute top-[26px] text-color duration-100 hover:scale-125"
					/>
				</button>
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
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									type="text"
									placeholder="Search Products"
									className="ring-2 ring-secondary p-2 rounded outline-none w-full"
								/>
								<button
									onClick={handleSearchForMobile}
									className="absolute text-black right-0 top-0 bg-secondary h-full w-[60px] "
								>
									<MagnifyingGlassIcon
										width={20}
										className="absolute left-2 top-0 size-10 text-color "
										color="black"
									/>
								</button>
							</div>
						</DialogPanel>
					</div>
				</Dialog>
			</div>

			{/* for desktop */}
			<div className="hidden md:block">
				<div className="flex items-center justify-center min-w-[200px] bg-light-gray rounded-full overflow-hidden h-12">
					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search products..."
						className="pl-8 w-full h-full outline-none text-gray-500 border-none focus:ring-0 ring-0"
					/>
					<button
						className="btn primary w-[80px] h-full group"
						onClick={handleSearch}
					>
						<MagnifyingGlassIcon
							width={30}
							className="mx-auto text-background  transition-transform duration-100 ease-in group-hover:scale-125"
						/>
					</button>
				</div>
			</div>
		</>
	);
}
