import { TCreateHotOffer, TProductResponse, TServerResponse } from "@/types";
import { baseApi } from "../baseApi";


type THotOfferResponse = {
    discount:number;
    endDate: string;
    price:number;
    id:string;
    product: TProductResponse;
}

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

        
        deleteHotOffer: builder.mutation<TServerResponse<TProductResponse>,string>({
            query: (id)=>({
                url:`/hot-offer/${id}`,
                method:"DELETE",
                
            }),
            invalidatesTags:["hot_offer"]
        }),
        
        addFeatureProduct: builder.mutation<TServerResponse<TProductResponse>,{productId:string}>({
            query: (payload)=>{
                console.log(payload)
                return{

                    url:"/featured-product",
                    method:"POST",
                    body: payload
                }
            },
            invalidatesTags:["featured_product"]
        }),

        getFeaturedProduct: builder.query({
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


export const {useAddToHotOfferMutation,useGetOfferedProductQuery,useDeleteHotOfferMutation,useAddFeatureProductMutation, useGetFeaturedProductQuery,useDeleteFeaturedProductMutation } = featuredAndOfferApi;