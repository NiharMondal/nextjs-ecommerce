import { jwtDecode } from "jwt-decode"

export const decodeToken = (token:string)=>{
    if(!token) return null;
    const data = jwtDecode(token);
    return data 
}