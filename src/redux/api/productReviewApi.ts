import { TReviews, TReviewsResponse, TServerResponse } from "@/types";
import { baseApi } from "./baseApi";


const productReviewApi = baseApi.injectEndpoints({
    endpoints: builder=>({
        createReview: builder.mutation<TServerResponse<TReviewsResponse>, TReviews>({

            query: (payload)=>({
                url:"/review",
                method:"POST",
                body:payload
            })
        }),
        getReview: builder.query({
            query:()=>({
                url:`/review`,
                method:"GET"
            })
        }),
        getSingleReview: builder.query<any, string>({
            query:(id)=>({
                url: `/review/${id}`,
                method:"GET"
            })
        }),
    })
});


export const {useCreateReviewMutation, useGetReviewQuery,useGetSingleReviewQuery} = productReviewApi;