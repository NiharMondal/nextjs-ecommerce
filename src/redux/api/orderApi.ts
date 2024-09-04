
import { TOrderRequest, TOrderResponse, TServerResponse } from "@/types";
import { baseApi } from "../baseApi";


export const orderApi = baseApi.injectEndpoints({
    endpoints: builder =>({
        //user creating order
        addOrder : builder.mutation<TServerResponse<TOrderResponse>,TOrderRequest>({
            query: (payload)=>{
                console.log(payload)
                return {
                    url:"/order",
                    method:"POST",
                    body:payload,
            
                }
            },
            invalidatesTags:["order"]
        }),

        //for-admin
        allOrders: builder.query({
            query:()=>({
                url:"/order",
                method:"GET"
            }),
            providesTags:["order"]
        }),


        //specifc order for user
        singleUserOrder: builder.query<TServerResponse<any>, string>({
            query: (userId)=>({
                url:`/order/${userId}`,
                method:"GET"
            }),
            providesTags:["order"]
        }),

        //admin --> customers who successfully placed order
        getCustomer: builder.query<TServerResponse<any>, void>({
            query: ()=>({
                url:`/order/customer`,
                method:"GET"
            }),
            providesTags:["order"]
        }),
        //admin --> customers who successfully placed order
        getLatestOrder: builder.query<TServerResponse<any>, void>({
            query: ()=>({
                url:`/order/customer`,
                method:"GET"
            }),
            providesTags:["order"]
        }),

    })
});


export const {useAddOrderMutation, useAllOrdersQuery, useSingleUserOrderQuery, useGetCustomerQuery,useGetLatestOrderQuery} = orderApi;