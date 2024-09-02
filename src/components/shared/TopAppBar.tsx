"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import SearchBox from "../SearchBox";
import NavCart from "./NavCart";
import Login from "../navbar/Login";
import Link from "next/link";
const cat = ["Laptop", "Mobile", "Desktop", "MackBook"];

export default function TopAppBar() {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="relative border-b">
			<div className="w-full px-5 lg:max-w-7xl mx-auto">
				<div className="h-[80px] flex items-center justify-between">
					<div className="">
						<Link href="/">
							<Image
								src="/img/logo.png"
								height={100}
								width={100}
								alt="logo"
							/>
						</Link>
					</div>

					<SearchBox />
					<div className="flex items-center gap-x-5 md:gap-x-10">
						<NavCart />

						<Login />
					</div>
				</div>
			</div>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="z-50"
			>
				<DialogBackdrop className="absolute inset-0  bg-black/60" />
				<DialogPanel className="absolute top-0 left-0 bottom-0">
					<span
						className="absolute top-4 right-4  cursor-pointer"
						onClick={() => setIsOpen(false)}
					>
						<XMarkIcon
							width={20}
							color="white"
							className="hover:text-red-600"
						/>
					</span>
					<div className="space-y-4 min-w-[250px] bg-primary shadow-2xl h-full text-white pl-10 pt-16 ">
						{cat.map((c) => (
							<div key={c}>{c}</div>
						))}
					</div>
				</DialogPanel>
			</Dialog>
		</nav>
	);
}
