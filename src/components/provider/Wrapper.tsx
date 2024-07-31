"use client"
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Wrapper({children}:{children:React.ReactNode}) {
  return (
    <Provider store={store}>
        {children}
        <ToastContainer/>
    </Provider>
  )
}
