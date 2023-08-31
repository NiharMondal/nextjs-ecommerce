import { TProduct } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.API_URL;
export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),


	endpoints: (builder) => ({

      //fetch all product
		getAllProducts: builder.query<TProduct[], void>({
			query: () => "/api/products",
		}),
      //fetch  product by id
		productById: builder.query<TProduct, string>({
			query: (id) => `products/${id}`,
		}),

      //fetch product by category
      productByCategory: builder.query<TProduct[], string>({
         query: (category)=> `/api/product/${category}`
      })
	}),
});


export const {useGetAllProductsQuery, useProductByIdQuery}= productApi