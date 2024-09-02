
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
            }
        }),

        //for-admin
        allOrders: builder.query({
            query:()=>({
                url:"/order",
                method:"GET"
            })
        }),


        //specifc order for user
        singleUserOrder: builder.query<TServerResponse<any>, string>({
            query: (userId)=>({
                url:`/order/${userId}`,
                method:"GET"
            })
        }),

    })
});


export const {useAddOrderMutation, useAllOrdersQuery, useSingleUserOrderQuery} = orderApi;