import { baseApi } from "../baseApi";

const hotOffersApi = baseApi.injectEndpoints({
    endpoints: builder=>({

        addToHotOffer: builder.mutation({
            query: (payload)=>({
                url:"/hot-offers",
                method:"POST",
                body: payload
            })
        }),

        getOfferedProduct: builder.query({
            query: ()=>({
                url:"/hot-offer",
                method:"GET"
            })
        })

    })
});


export const {useAddToHotOfferMutation,useGetOfferedProductQuery} = hotOffersApi;