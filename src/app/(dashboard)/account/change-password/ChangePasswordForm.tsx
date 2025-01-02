"use client";
import SubmitButton from "@/components/SubmitButton";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { TChangePassword } from "@/types";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ChangePasswordForm() {
	const [showPass, setShowPass] = useState(false);
	const [changePassword, { isLoading }] = useChangePasswordMutation();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<TChangePassword>();

	const handleChangePassword: SubmitHandler<TChangePassword> = async (
		data
	) => {
		const payload = {
			oldPassword: data.oldPassword,
			newPassword: data.newPassword,
		};
		try {
			const res = await changePassword(payload).unwrap();
			if (res.success) {
				toast.success(res.message);
			}
		} catch (error: any) {
			toast.error(error?.data?.message || "Something went wrong!");
		}
	};
	return (
		<form
			onSubmit={handleSubmit(handleChangePassword)}
			className="space-y-3 max-w-md"
		>
			<div className="flex flex-col">
				<label htmlFor="oldPassword">Old Password</label>
				<input
					type={showPass ? "text" : "password"}
					id="oldPassword"
					{...register("oldPassword", { required: true })}
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="newPassword">New Password</label>
				<div className="relative">
					<input
						{...register("newPassword", { required: true })}
						type={showPass ? "text" : "password"}
						id="newPassword"
						className="style"
					/>
					<span className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer">
						{showPass ? (
							<EyeSlashIcon
								className="size-6"
								onClick={() => setShowPass(false)}
							/>
						) : (
							<EyeIcon
								className="size-6"
								onClick={() => setShowPass(true)}
							/>
						)}
					</span>
				</div>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="confirmPass">Confirm password</label>

				<input
					{...register("confirmPass", {
						validate: (value) =>
							value === watch("newPassword") ||
							"Confirm password doesn't match",
					})}
					type={showPass ? "text" : "password"}
					id="confirmPass"
					className="style"
				/>

				<p className="text-red-500">
					{errors.confirmPass && (
						<span>{errors.confirmPass.message}</span>
					)}
				</p>
			</div>
			<SubmitButton isLoading={isLoading}>Update</SubmitButton>
		</form>
	);
}
