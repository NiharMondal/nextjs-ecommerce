"use client";
import { login } from "@/actions/auth";
import { setCredentials } from "@/redux/slice/authSlice";
import { decodeToken } from "@/utils/decodeToken";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function SignInForm() {
	const router = useRouter();
	const dispatch = useDispatch();
	const handleLogin = async (formData: FormData) => {
		try {
			const res = await login(formData);

			if (res.success === true) {
				const user: any = decodeToken(res?.result?.authToken);
				const userInfo = {
					token: res?.result?.authToken,
					user: {
						id: user.id,
						avatar: res?.result.avatar,
						role: user.role,
					},
				};
				dispatch(setCredentials(userInfo));
				if (user.role === "CUSTOMER") {
					router.push("/account/edit-profile");
				} else {
					router.push("/dashboard/admin");
				}
			} else {
				toast.error("Invalid credentials!");
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<form className="space-y-3" action={handleLogin}>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					className="style"
					required
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="password">Password</label>
				<input
					required
					type="password"
					id="password"
					name="password"
					className="style"
				/>
			</div>
			<div>
				<Link
					href="/forgot-password"
					className="text-accent hover:underline"
				>
					Forgot your password?
				</Link>
			</div>
			<button className="btn primary w-full text-white">Sign in</button>
			<div>
				<p>
					Don&apos;t have an account?{" "}
					<span>
						<Link
							href="/sign-up"
							className="text-accent hover:underline"
						>
							Create one
						</Link>
					</span>{" "}
				</p>
			</div>
		</form>
	);
}
