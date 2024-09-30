import { TReviews, TReviewsResponse, TServerResponse } from "@/types";
import { baseApi } from "./baseApi";


const productReviewApi = baseApi.injectEndpoints({
    endpoints: builder=>({
        createReview: builder.mutation<TServerResponse<TReviewsResponse>, TReviews>({

            query: (payload)=>({
                url:"/review",
                method:"POST",
                body:payload
            }),
            invalidatesTags:["review"]
        }),
        getReview: builder.query<TServerResponse<TReviewsResponse[]>, void>({
            query:()=>({
                url:`/review`,
                method:"GET"
            }),
            providesTags:["review"]
        }),

        getSingleReview: builder.query<TServerResponse<TReviewsResponse>, string>({
            query:(id)=>({
                url: `/review/${id}`,
                method:"GET"
            }),
            providesTags:["review"]
        }),
        
        deleteReview: builder.mutation<TServerResponse<TReviewsResponse>, string>({
            query:(id)=>({
                url: `/review/${id}`,
                method:"DELETE",

            }),
            invalidatesTags:["review"]
        })
    })
});


export const {useCreateReviewMutation, useGetReviewQuery,useGetSingleReviewQuery,useDeleteReviewMutation} = productReviewApi;