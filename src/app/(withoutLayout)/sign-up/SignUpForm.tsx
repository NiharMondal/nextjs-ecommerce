"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { TUserRegistration } from "@/types";
import { useSignUpUserMutation } from "@/redux/api/authApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";
export default function SignUpForm() {
	const router = useRouter();
	const [signUpUser, { isLoading }] = useSignUpUserMutation();
	const [showPass, setShowPass] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<TUserRegistration>();

	const registerUser: SubmitHandler<TUserRegistration> = async (data) => {
		const user = {
			name: data.name,
			email: data.email,
			password: data.password,
		};

		try {
			const res = await signUpUser(user).unwrap();
			if (res.success) {
				toast.success(res.message);
				router.push("/sign-in");
			}
		} catch (error: any) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<form onSubmit={handleSubmit(registerUser)} className="space-y-3">
			<div className="flex flex-col gap-y-2">
				<label htmlFor="fullname">Full name</label>
				<input
					{...register("name", { required: true })}
					type="text"
					id="fullname"
					className="style"
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="email">Email</label>
				<input
					{...register("email", { required: true })}
					type="email"
					id="email"
					className="style"
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="password">Password</label>
				<div className="relative">
					<input
						{...register("password", { required: true })}
						type={showPass ? "text" : "password"}
						id="password"
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
							value === watch("password") ||
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

			<SubmitButton
				isLoading={isLoading}
				className="w-full primary text-white"
			>
				Sign Up
			</SubmitButton>
			<div>
				<p>
					Already have an account?{" "}
					<span>
						<Link
							href="/sign-in"
							className="text-accent hover:underline"
						>
							Sign in
						</Link>
					</span>{" "}
				</p>
			</div>
		</form>
	);
}
