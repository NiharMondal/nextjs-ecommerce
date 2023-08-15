"use client";

import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ToastProviderProps {
	children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
	return (
		<>
			{children}
			<ToastContainer transition={Slide} autoClose={1500} />
		</>
	);
}
