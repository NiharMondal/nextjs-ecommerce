import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const base_url = "http://localhost:5000/api/v1"


export const baseApi = createApi({
    reducerPath:"baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    
    }),
    tagTypes:["product", "customer", "reviews","transactions","hot_offer","featured_product"],
    endpoints: ()=> ({})
})