import { TProductResponse, TServerResponse } from "@/types";
import { baseApi } from "./baseApi";
import { TProduct } from "@/types";

type UpdateProductPayload = {
    id: string;
    payload: Partial<TProduct>
}

const productApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({

        //create product
        createProduct: builder.mutation<TServerResponse<TProductResponse>,TProduct>({
            query: (payload)=>{
                return{
                    url:"/product",
                    method:"POST",
                    body: payload
                }
            },
            invalidatesTags:['product']
        }),

        getAllProduct: builder.query<TServerResponse<TProductResponse[]>, Record<string, string>>({
            query:(query)=>{
                
               const params = new URLSearchParams();
                if (query && Object.keys(query).length > 0) {
                    Object.keys(query).forEach((key) => {
                        if (query[key] && query[key].length > 0) {
                            params.append(key, query[key].toString());
                        }
                    });
                }
                return {

                    url:`/product`,
                    method:"GET",
                    params:params
                }

            },
            providesTags:["product"]
        }),
        
        //get single product
        getSingleProduct: builder.query<TServerResponse<TProductResponse>,string>({
            query: (id)=>{
                return{
                    url:`/product/admin/${id}`,
                    method:"GET",
                }
            },
            providesTags:['product']
        }),

        getRelatedProduct: builder.query<TServerResponse<TProductResponse[]>,string>({
            query: (id)=>{
                return{
                    url:`/product/related-product/${id}`,
                    method:"GET",
                }
            },
            providesTags:['product']
        }),

        //update product
        updateProduct: builder.mutation<TServerResponse<TProductResponse>,UpdateProductPayload>({
            query: ({payload,id}) => {
                return {
                    url:`/product/${id}`,
                    method:"PATCH",
                    body: payload
                }
            },
            invalidatesTags:['product']
        }),

        //soft delete
        deleteProduct : builder.mutation<TServerResponse<TProductResponse>,string>({
            query:(id)=>({
                url:`/product/soft/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["product"]
        })


    })
});


export const {useCreateProductMutation,useGetAllProductQuery,useGetSingleProductQuery, useGetRelatedProductQuery, useUpdateProductMutation, useDeleteProductMutation} = productApi;