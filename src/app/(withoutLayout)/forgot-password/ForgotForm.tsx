"use client";
import SubmitButton from "@/components/SubmitButton";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
type TForgotPasswordRequest = {
	email: string;
};
export default function ForgotForm() {
	const { register, handleSubmit } = useForm<TForgotPasswordRequest>();
	const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

	const handleForgotPassword: SubmitHandler<TForgotPasswordRequest> = async (
		data
	) => {
		try {
			const res = await forgotPassword(data).unwrap();
			if (res.success) {
				toast.success("Reset link sent to your email");
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<form
			className="space-y-5"
			onSubmit={handleSubmit(handleForgotPassword)}
		>
			<div className="flex flex-col space-y-2">
				<label htmlFor="payload">Enter Email</label>
				<input
					{...register("email", { required: true })}
					type="email"
					placeholder="Search your account by email address"
					className="bg-inherit p-2 outline-none ring-1 rounded-md w-full"
				/>
			</div>
			<SubmitButton isLoading={isLoading}>Sent Request</SubmitButton>
		</form>
	);
}
