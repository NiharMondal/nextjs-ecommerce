"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import {
	MagnifyingGlassIcon,
	XMarkIcon,
	Bars3CenterLeftIcon,
	ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import NavCart from "../shared/NavCart";
export default function Navbar() {
	let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="h-20 bg-secondary lg:bg-primary/90 relative">
			<nav className="h-full container mx-auto ">
				<div className="lg:hidden ">
					<button
						onClick={() => setMobileMenuOpen(true)}
						className="absolute top-7 left-4"
					>
						<Bars3CenterLeftIcon width={20} aria-hidden="true" />
					</button>
				</div>
				<div
					className="hidden lg:flex h-full  items-center justify-between"
					aria-hidden="true"
				>
					<div>logo</div>
					<div className="flex justify-between items-center h-10 overflow-hidden rounded ring-1 ring-secondary">
						<input
							type="text"
							className="h-full min-w-[400px] pl-3 outline-none "
							placeholder="Search products..."
						/>
						<button className="w-[60px] h-full bg-secondary flex items-center group">
							<MagnifyingGlassIcon
								width={20}
								className="w-fit mx-auto transition-all group-hover:scale-125 duration-300 text-slate-700"
							/>
						</button>
					</div>
					<div className="flex items-center justify-center gap-x-10">
						<NavCart />
						<div>
							<Link href="/login">
								<button className="bg-secondary px-6 py-2 rounded font-medium text-lg text-white hover:bg-secondary/90 hover:shadow-md">
									Login
								</button>
							</Link>
						</div>
					</div>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50 bg-primary/30"></div>
				<DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-secondary p-6 sm:max-w-sm  shadow-md">
					<div className="flex items-center justify-between">
						<div>logo</div>
						<button onClick={() => setMobileMenuOpen(false)}>
							<XMarkIcon width={20} aria-hidden="true" />
						</button>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
