import { TServerResponse } from "@/types";
import { baseApi } from "../baseApi";

const metaApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        metaData: builder.query<TServerResponse<any>,void>({
            query:()=>({
                url:"/meta-data/info",
                method:"GET"
            })
        }),
    })
})

export const {useMetaDataQuery} = metaApi;