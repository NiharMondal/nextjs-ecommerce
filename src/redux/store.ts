import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slice/cartSlice";
import authReducer from "../redux/slice/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { baseApi } from "./api/baseApi";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const cartPersistConfig = {
	key: "cart",
	version: 1,
	storage
}
const authPersistConfig = {
	key: "auth",
	version: 1,
	storage
}

const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer )
const authPersistedReducer = persistReducer(authPersistConfig, authReducer )

export const store = configureStore({
	reducer: {
    //baseApi
		[baseApi.reducerPath] : baseApi.reducer,

    //cart slice
		cart: cartPersistedReducer,
    auth: authPersistedReducer
	},
	 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),

});


setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
