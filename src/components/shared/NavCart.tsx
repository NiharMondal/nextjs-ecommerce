"use client";

import Link from "next/link";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/redux/hooks";

const NavCart = () => {
	const { cartQuantity } = useAppSelector((state) => state.cart);
	return (
		<div className="w-16  px-4 ">
			<Link href="/cart">
				<div className="relative w-full">
					<ShoppingCartIcon className="h-7" />
					<span className="absolute -top-3 -right-3 text-blue-500 font-bold">
						{cartQuantity}
					</span>
				</div>
			</Link>
		</div>
	);
};

export default NavCart;
