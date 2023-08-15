import { TProduct } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000/api/";
export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),


	endpoints: (builder) => ({

      //fetch all product
		getAllProducts: builder.query<TProduct[], void>({
			query: () => "/products",
		}),
      //fetch  product by id
		productById: builder.query<TProduct, string>({
			query: (id) => `products/${id}`,
		}),

      //fetch product by category
      productByCategory: builder.query<TProduct[], string>({
         query: (category)=> `/product/${category}`
      })
	}),
});


export const {useGetAllProductsQuery, useProductByIdQuery}= productApi