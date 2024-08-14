import { TProductResponse, TServerResponse } from "@/types";
import { baseApi } from "../baseApi";
import { TProduct } from "@/types";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        
        addProduct : builder.mutation<TServerResponse<TProductResponse>,TProduct>({
            query: (payload)=>{
                console.log(payload)
                return {
                    url:"/product",
                    method:"POST",
                    data: payload
                }
                
            },
            invalidatesTags:["product"]
            
        }),

        getProduct: builder.query<TServerResponse<TProductResponse[]>, Record<string, string>>({
            query:(query)=>{
               const params = new URLSearchParams();
                if (query && Object.keys(query).length > 0) {
                    Object.keys(query).forEach((key) => {
                        if (query[key] && query[key].length > 0) {
                        params.append(key, query[key].toString());
                        }
                    });
                    }
                return{

                    url:`/product`,
                    method:"GET",
                    params:params
                }

            },
            providesTags:["product"]
        }),

        deleteProduct : builder.mutation<TServerResponse<TProductResponse>,string>({
            query:(id)=>({
                url:`/product/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["product"]
        })
    })
})

export const {useAddProductMutation,useGetProductQuery,useDeleteProductMutation} = productApi;