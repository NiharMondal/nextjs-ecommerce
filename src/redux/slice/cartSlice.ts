import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@/types";
import { toast } from "react-toastify";

type InitialStateType = {
	cartItems: TProduct[];
	cartQuantity: number;
	totalAmount: number;
};

const initialCartItem =
	typeof window !== "undefined"
		? JSON.parse(window.localStorage.getItem("cartItems")!)
		: null;

const initialState: InitialStateType = {
	cartItems: initialCartItem || [],
	cartQuantity: 0,
	totalAmount: 0,
};

export const cartSlice = createSlice({
	name: "cart",

	initialState,

	reducers: {
		clearCart: (state) => {
			window.alert("Do you want to clear cart?");
			state.cartItems = [];
			state.cartQuantity = 0;
			state.totalAmount = 0;

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		addToCart: (state, action: PayloadAction<TProduct>) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (itemIndex >= 0) {
				state.cartItems[itemIndex].productQuantity += 1;
				state.cartQuantity += 1;
			} else {
				const tempProduct = { ...action.payload, productQuantity: 1 };
				state.cartItems.push(tempProduct);
				state.cartQuantity += 1;

				toast.success("Product added to cart");
			}

			// setting product item to local storage
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		removeItem: (state, action: PayloadAction<string>) => {
			const nextCartItems = state.cartItems.filter(
				(product) => product.id !== action.payload
			);

			state.cartItems = nextCartItems;

			toast.warning("Product has been removed");
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		decreaseQuantity: (state, action: PayloadAction<string>) => {
			const cartItem = state.cartItems.find(
				(pd) => pd.id === action.payload
			);
			if (cartItem!.productQuantity > 1) {
				cartItem!.productQuantity -= 1;
			} else {
				const nextCartItems = state.cartItems.filter(
					(product) => product.id !== action.payload
				);
				state.cartItems = nextCartItems;
			}

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		increaseQuantity: (state, action: PayloadAction<string>) => {
			const cartItem = state.cartItems.find(
				(pd) => pd.id === action.payload
			);

			const cartQan = (cartItem!.productQuantity += 1);
			state.cartQuantity = cartQan;

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		getTotalAmount: (state) => {
			let quantity = 0;
			let total = 0;

			state.cartItems.forEach((item) => {
				quantity += item.productQuantity;
				total += item.price * item.productQuantity;
			});

			state.cartQuantity = quantity;
			state.totalAmount = total;
		},
	},
});
export const {
	addToCart,
	removeItem,
	increaseQuantity,
	decreaseQuantity,
	clearCart,
	getTotalAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
