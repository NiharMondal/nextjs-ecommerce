"use client";

import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cartSlice";
import { TProduct } from "@/types";

type ButtonProps = {
	pd: TProduct;
};
const CartButton = ({ pd }: ButtonProps) => {
	const dispatch = useAppDispatch();

	const addProduct = (product: TProduct) => {
		dispatch(addToCart(product));
	};
	return (
		<button
			className="py-3 bg-violet-500 rounded-md hover:bg-violet-600 font-medium text-white"
			onClick={() => addProduct(pd)}
		>
			ADD TO CART
		</button>
	);
};

export default CartButton;
