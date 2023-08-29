"use client"

import { useState } from "react";
import Link from "next/link";
const NavAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => {
		setMenu(!menu);
	};
	return (
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
	);
};

export default NavAuth;
