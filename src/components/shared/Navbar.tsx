import Link from "next/link";
import ToggleTheme from "../ToggleTheme";
import NavCart from "./NavCart";
import NavAuth from "./NavAuth";


export default function Navbar() {
	return (
		<header className="bg-gray-50 dark:bg-gray-800 py-4 sticky top-0 left-0 shadow-sm z-50 mb-8 ">
			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
					<NavCart />

					<NavAuth />
					<div className="mt-2">
						<ToggleTheme />
					</div>
				</div>
			</nav>
		</header>
	);
}
