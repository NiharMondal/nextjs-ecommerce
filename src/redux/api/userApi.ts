import {
	TAddress,
	TServerResponse,
	TUserResponse,
} from "@/types";
import { baseApi } from "../baseApi";


type TUpdateUserInfo = {
    id: string;
    payload: Partial<TUserResponse>
}
type TUpdateAddress = {
    id: string;
    payload: Partial<TAddress>
}


const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMyProfile: builder.query<TServerResponse<TUserResponse>, string>({
			query: (id) => ({
				url: `/user/${id}`,
				method: "GET",
			}),
			providesTags: ["user"],
		}),
		updateProfile: builder.mutation<
			TServerResponse<TUserResponse>,
			TUpdateUserInfo
		>({
			query: (payload) => ({
				url: `/user/${payload.id}`,
				method: "PATCH",
				body: payload.payload,
			}),
			invalidatesTags: ["user"],
		}),
		updateAvatar: builder.mutation<
			TServerResponse<TUserResponse>,
			TUpdateUserInfo
		>({
			query: (payload) => ({
				url: `/user/${payload.id}/update-avatar`,
				method: "PATCH",
				body: payload.payload,
			}),
			invalidatesTags: ["user"],
		}),

		getAddress: builder.query<
			TServerResponse<TAddress>,
			string
		>({
			query: (id) => ({
				url: `/address/${id}`,
				method: "GET",
			}),
			providesTags: ["address"],
		}),
		updateAddress: builder.mutation<
			TServerResponse<TAddress>,
			TUpdateAddress
		>({
			query: (payload) => ({
				url: `/address/${payload.id}`,
				method: "PATCH",
				body: payload.payload,
			}),
			invalidatesTags: ["address"],
		}),
		
	}),
});

export const { useGetMyProfileQuery, useUpdateProfileMutation, useUpdateAvatarMutation,useGetAddressQuery, useUpdateAddressMutation } = userApi;
