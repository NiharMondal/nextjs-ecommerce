import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from './customBaseQuery'
const base_url = "http://localhost:5000/api/v1"
export const baseApi = createApi({
    reducerPath:"baseApi",
    baseQuery: axiosBaseQuery({
        baseUrl: base_url,
    }),
    endpoints: ()=> ({})
})