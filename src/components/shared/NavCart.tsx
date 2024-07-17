"use client";

import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const NavCart = () => {
	return (
		<div className="relative text-primary">
			<div>
				<ShoppingBagIcon width={20} />
			</div>
			<span className="absolute -top-2 -right-1 text-sm ">0</span>
		</div>
	);
};

export default NavCart;
