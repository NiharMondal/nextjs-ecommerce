"use client";

import Link from "next/link";
import { useState } from "react";
import ToggleTheme from "../providers/theme/ToggleTheme";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/redux/hooks";
export default function SecondNavbar() {
	const { cartQuantity } = useAppSelector((state) => state.cart);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => {
		setMenu(!menu);
	};
	return (
		<nav className="bg-gray-50 dark:bg-gray-800 py-4 sticky top-0 left-0 shadow-sm z-50 mb-8 ">
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-center gap-x-4">
					<div className="">
						<Link href="/">Logo</Link>
					</div>
					<div className="flex-1">
						<input
							className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="type"
							placeholder="Search products..."
						/>
					</div>
					<div className="w-16  px-4 ">
						<Link href="/cart">
							<div className="relative w-full">
								<ShoppingCartIcon className="h-7" />
								<span className="absolute -top-3 -right-3 text-violet-500 font-bold">
									{cartQuantity}
								</span>
							</div>
						</Link>
					</div>

					<div
						className="relative h-10 w-10 border rounded-full bg-violet-700 cursor-pointer"
						onClick={toggleMenu}
					>
						{menu ? (
							<div className="absolute top-14 -left-56 bg-gray-100 text-black p-2  w-56 cursor-default rounded ">
								{isAuthenticated ? (
									<div>
										<h4 className="dark:text-black"> Welcom, user</h4>
										<button className="mt-4 hover:bg-violet-500 w-full text-left p-2 rounded hover:text-white">
											Log out
										</button>
									</div>
								) : (
									<div className="flex flex-col ">
										<Link
											href="/login"
											className="w-full hover:bg-violet-500 hover:text-white pl-4 py-2 rounded "
										>
											Login
										</Link>

										<Link
											href="/register"
											className="w-full hover:bg-violet-500 hover:text-white pl-4 py-2 rounded "
										>
											Register
										</Link>
									</div>
								)}
							</div>
						) : null}
					</div>
					<div className="mt-2">
						<ToggleTheme />
					</div>
				</div>
			</section>
		</nav>
	);
}
