import { TProductResponse, TServerResponse } from "@/types";
import { baseApi } from "../baseApi";
import { TProduct } from "@/types";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        
        addProduct : builder.mutation<TServerResponse<TProductResponse>,TProduct>({
            query: (payload)=>{
                return {
                    url:"/product",
                    method:"POST",
                    data: payload
                }
            }
        }),

        getProduct: builder.query({
            query:()=>({
                url:"/porduct",
                method:"GET",

            })
        })
    })
})

export const {useAddProductMutation,useGetProductQuery} = productApi;