import { TCreateHotOffer, TFeaturedProductResponse, THotOfferResponse, TProductResponse, TServerResponse } from "@/types";
import { baseApi } from "./baseApi";




const featuredAndOfferApi = baseApi.injectEndpoints({
    endpoints: builder=>({

        addToHotOffer: builder.mutation<TServerResponse<any>,TCreateHotOffer>({
            query: (payload)=>{
                
                return {
                    url:"/hot-offer",
                    method:"POST",
                    body: payload
                }
            },
            invalidatesTags:["hot_offer"]
        }),

        getOfferedProduct: builder.query<TServerResponse<THotOfferResponse[]>,void>({
            query: ()=>({
                url:"/hot-offer",
                method:"GET"
            }),
            providesTags:["hot_offer"]
        }),
        getSingleOfferedProduct: builder.query<TServerResponse<THotOfferResponse>,string>({
            query: (id)=>({
                url:`/hot-offer/${id}`,
                method:"GET"
            }),
            providesTags:["hot_offer"]
        }),

        
        deleteHotOffer: builder.mutation<TServerResponse<TProductResponse>,string>({
            query: (id)=>({
                url:`/hot-offer/${id}`,
                method:"DELETE",
                
            }),
            invalidatesTags:["hot_offer"]
        }),
        
        addFeatureProduct: builder.mutation<TServerResponse<TProductResponse>,{productId:string}>({
            query: (payload)=>{
                return{

                    url:"/featured-product",
                    method:"POST",
                    body: payload
                }
            },
            invalidatesTags:["featured_product"]
        }),

        getFeaturedProduct: builder.query<TServerResponse<TFeaturedProductResponse[]>,void>({
            query: ()=>({
                url:"/featured-product",
                method:"GET"
            }),
            providesTags:["featured_product"]
        }),

        deleteFeaturedProduct: builder.mutation<TServerResponse<TProductResponse>,string>({
            query: (id)=>({
                url:`/featured-product/${id}`,
                method:"DELETE",
                
            }),
            invalidatesTags:["featured_product"]
        }),
    })
});


export const {useAddToHotOfferMutation,useGetOfferedProductQuery,useGetSingleOfferedProductQuery, useDeleteHotOfferMutation,useAddFeatureProductMutation, useGetFeaturedProductQuery,useDeleteFeaturedProductMutation } = featuredAndOfferApi;