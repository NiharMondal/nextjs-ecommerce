"use server";
import { config } from '@/config';
import { TLoginResponse, TServerResponse } from '@/types';

import { cookies } from 'next/headers'

export const login = async(formData:FormData) =>{
    const credentials = {
        email: formData.get("email"),
        password: formData.get("password")
    };
    
   
    const res = await fetch(
		`${config.backend_url}/auth/login`,
		{
			method: "POST",
			body: JSON.stringify(credentials),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

    const data = await res.json()
    cookies().set("accessToken", data?.result?.authToken);
    
    
    return data as TServerResponse<TLoginResponse>;
}

export const logoutAction = ()=>{
	cookies().delete("accessToken")
}