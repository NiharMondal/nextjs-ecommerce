"use client";
import { login } from "@/actions/auth";
import { setCredentials } from "@/redux/slice/authSlice";
import { decodeToken } from "@/utils/decodeToken";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const demoUsers = {
	customer: {
		email: "democustomer@gmail.com",
		password: "demo!pass",
	},
	admin: {
		email: "demoadmin@gmail.com",
		password: " demoadmin!pass",
	},
};

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
				toast.success("Logged in successfully");
				dispatch(setCredentials(userInfo));
				if (user.role === "CUSTOMER") {
					router.push("/account/order");
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

	const handleDemoLogin = async (role: keyof typeof demoUsers) => {
		const cred = demoUsers[role];
		const formData = new FormData();
		formData.append("email", cred.email);
		formData.append("password", cred.password);

		await handleLogin(formData);
	};
	return (
		<form className="space-y-3" action={handleLogin}>
			<div className="mt-6">
				<p className="mb-2 font-medium">Login as demo user:</p>
				<div className="flex items-center gap-x-5 flex-wrap ">
					{(["customer", "admin"] as const).map((role) => (
						<button
							key={role}
							onClick={() => handleDemoLogin(role)}
							className="border border-primary text-primary font-medium rounded px-4 py-1 hover:shadow"
						>
							{role.charAt(0).toUpperCase() + role.slice(1)}
						</button>
					))}
				</div>
			</div>
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
