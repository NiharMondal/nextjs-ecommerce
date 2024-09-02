import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type User = {
    id:string;
    avatar:string;
    role:string;
}

type InitialStateType = {
    user: null | User;
    token: null | string;
};

const initialState: InitialStateType = {
    user: null,
    token: null
};

export const  authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setCredentials : (state,action)=>{
            const userInfo = action.payload;
            state.user = userInfo.user;
            state.token = userInfo.token;
        },

        logout : (state)=>{
            state.user = null,
            state.token = null
        }
    }
});

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;


export const selectedUserToken = (state:RootState)=> state.auth.token;

export const selectedUser = (state:RootState)=> state.auth.user;