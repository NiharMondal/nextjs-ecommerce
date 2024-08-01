import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartProductType } from "@/components/product/product-details/AddToCart";

type InitialStateType = {
    cartItems: CartProductType[];
    cartQuantity: number;
    totalAmount: number;
};

const initialState: InitialStateType = {
    cartItems: [],
    cartQuantity: 0,
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.cartQuantity = 0;
            state.totalAmount = 0;
        },

        addToCart: (state, action: PayloadAction<CartProductType>) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].productQuantity += 1;
                state.cartQuantity += 1;
                state.totalAmount += state.cartItems[itemIndex].price;
            } else {
                const tempProduct = { ...action.payload, productQuantity: 1 };
                state.cartItems.push(tempProduct);
                state.cartQuantity += 1;
                state.totalAmount += tempProduct.price
            }
        },

        removeItem: (state, action: PayloadAction<string>) => {
            const nextCartItems = state.cartItems.filter(
                (product) => product.id !== action.payload
            );

            const removedItem = state.cartItems.find(
                (product) => product.id === action.payload
            );

            state.cartItems = nextCartItems;
            if (removedItem) {
                state.cartQuantity -= removedItem.productQuantity;
                state.totalAmount -= removedItem.price * removedItem.productQuantity;
            }
        },

        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const cartItem = state.cartItems.find(
                (pd) => pd.id === action.payload
            );
            if (cartItem) {
                if (cartItem.productQuantity > 1) {
                    cartItem.productQuantity -= 1;
                    state.cartQuantity -= 1;
                    state.totalAmount -= cartItem.price;

                } else {
                    const nextCartItems = state.cartItems.filter(
                        (product) => product.id !== action.payload
                    );
                    state.cartItems = nextCartItems;
                    state.cartQuantity -= 1;
                    state.totalAmount -= cartItem.price;
                }
            }
        },

        increaseQuantity: (state, action: PayloadAction<string>) => {
            const cartItem = state.cartItems.find(
                (pd) => pd.id === action.payload
            );

            if (cartItem) {
                cartItem.productQuantity += 1;
                state.cartQuantity += 1;
                state.totalAmount += cartItem.price;
            }
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
export const selectCartQuantity = (state: RootState) => state.cart.cartQuantity;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
