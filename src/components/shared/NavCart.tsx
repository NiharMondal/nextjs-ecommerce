"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectCartItems, selectCartQuantity } from "@/redux/slice/cartSlice";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const NavCart = () => {
	const cartQuantity = useAppSelector(selectCartQuantity);
	return (
		<Link href="/cart">
			<div className="relative text-primary">
				<div>
					<ShoppingBagIcon width={20} />
				</div>
				<span className="absolute -top-2 -right-2 text-sm ">
					{cartQuantity}
				</span>
			</div>
		</Link>
	);
};

export default NavCart;
