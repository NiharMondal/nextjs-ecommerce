import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@/types";
import { RootState } from "../store";

type InitialStateType = {
	cartItems: TProduct[];
	quantity: number;
	totalPrice: number;
};

const initialState: InitialStateType = {
	cartItems: localStorage.getItem("cartItems")
		? JSON.parse(localStorage.getItem("cartItems")!)
		: [],
	quantity: 0,
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,

	reducers: {
		addToCart: (state, action: PayloadAction<TProduct>) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity! += 1;
				state.quantity += 1;
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 };
				state.quantity += 1;
				state.cartItems.push(tempProduct);
				state.totalPrice += action.payload.price;
			}

			// setting product item to local storage
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		removeFromCart: (state, action: PayloadAction<number>) => {
			const nextCartItems = state.cartItems.filter(
				(product) => product.id !== action.payload
			);
			state.cartItems = nextCartItems;
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		decreaseQantity: (state, action: PayloadAction<number>) => {},
		increment: (state, action: PayloadAction<number>) => {
			const tempCart = [...state.cartItems];

			const findProduct = tempCart.find((pd) => pd.id === action.payload);
		},
	},
});
export const { addToCart, removeFromCart, increment } = cartSlice.actions;
export const productInCart = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
