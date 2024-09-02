
import { TChangePassword, TServerResponse, TUserRegistration, TUserRegistrationResponse } from "@/types";
import { baseApi } from "../baseApi";
type TChangePasswordResponse = {
    success:boolean;
    message:string;
}
const authApi = baseApi.injectEndpoints({
    endpoints: builder =>({

        signUpUser : builder.mutation<TServerResponse<TUserRegistrationResponse>,Omit<TUserRegistration, "confirmPass">>({
            query: (payload)=>({
                url: "/auth/register",
                method:"POST",
                body:payload
            })
        }),

        changePassword : builder.mutation<TChangePasswordResponse, Omit<TChangePassword,"confirmPass">>({
			query:(payload)=>({
				url:"/auth/change-password",
				method:"POST",
				body: payload,
			}),
			invalidatesTags: ["user"],
		})

    })

});


export const {useSignUpUserMutation,useChangePasswordMutation} = authApi;