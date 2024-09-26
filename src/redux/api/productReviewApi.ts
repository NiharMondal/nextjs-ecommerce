import { baseApi } from "./baseApi";


const productReviewApi = baseApi.injectEndpoints({
    endpoints: builder=>({
        createReview: builder.mutation({
            query: ()=>({
                url:"",
                method:"POST"
            })
        }),
        getReview: builder.query({
            query:(id)=>({
                url:"",
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