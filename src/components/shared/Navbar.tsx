import Link from "next/link";
import ToggleTheme from "../ToggleTheme";
import NavCart from "./NavCart";
import NavAuth from "./NavAuth";
import Image from "next/image";

export default function Navbar() {
	return (
		<header className="bg-gray-50 dark:bg-gray-800 py-4 sticky top-0 left-0 shadow-sm z-50 mb-8 ">
			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between gap-x-4">
					<div className="">
						<Link href="/">
							<Image
								src="/img/logo.png"
								width={150}
								height={10}
								alt="logo"
								className="w-[100px] md:w-auto"
							/>
						</Link>
					</div>
					<div className="flex items-center space-x-2 md:space-x-8">
						<NavCart />

						<NavAuth />
						<div className="mt-2">
							<ToggleTheme />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
