"use client";

import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

import Image from "next/image";
import SearchBox from "../SearchBox";
import NavCart from "./NavCart";
import Login from "../navbar/Login";
export default function TopAppBar() {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="relative border border-primary/50">
			<div className="w-full px-5 lg:max-w-7xl mx-auto">
				<div className="h-[80px] flex items-center justify-between">
					<div>
						<Image
							src="/img/logo.png"
							height={100}
							width={100}
							alt="logo"
						/>
					</div>
					
					<SearchBox />
					<div className="flex items-center gap-x-5">
						<NavCart/>

						<Login/>
					</div>
				</div>
			</div>
			
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					<DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
						<DialogTitle className="font-bold">
							Deactivate account
						</DialogTitle>
						<Description>
							This will permanently deactivate your account
						</Description>
						<p>
							Are you sure you want to deactivate your account?
							All of your data will be permanently removed.
						</p>
						<div className="flex gap-4">
							<button onClick={() => setIsOpen(false)}>
								Cancel
							</button>
							<button onClick={() => setIsOpen(false)}>
								Deactivate
							</button>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</nav>
	);
}
