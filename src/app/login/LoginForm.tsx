"use client";

import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import Spin from "@/components/AnimateButton";
import { useRouter } from "next/navigation";
export default function LoginForm() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const [loading, setLoading] = useState<boolean>(false);

	const [authState, setAuthState] = useState({
		email: "",
		password: "",
	});

	//handle change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAuthState({ ...authState, [e.target.name]: e.target.value });
	};

	//form submit
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const response = await signIn("credentials", {
			redirect: false,
			email: authState.email,
			password: authState.password,
		});
		if (response?.error) {
			setLoading(false);
			setError(response?.error);
		}
		if (response?.error === null) {
			setLoading(false);
			toast.success("You successfully logged in");
			router.push("/cart");
		}
	};
	return (
		<form onSubmit={handleSubmit} className="mt-8">
			{error ? (
				<div className="mt-2 bg-red-600 text-center font-semibold text-white p-4 rounded mb-4">
					{error}
				</div>
			) : null}
			<div className="space-y-5">
				<div>
					<label htmlFor="email" className="text-base font-medium ">
						{" "}
						Email address{" "}
					</label>
					<div className="mt-2">
						<input
							className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="email"
							placeholder="Email"
							id="email"
							name="email"
							onChange={handleChange}
							value={authState.email}
						></input>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="password" className="text-base font-medium ">
							{" "}
							Password{" "}
						</label>
					</div>
					<div className="mt-2">
						<input
							className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="password"
							placeholder="Password"
							id="password"
							name="password"
							onChange={handleChange}
							value={authState.password}
						></input>
					</div>
				</div>
				<div>
					<button type="submit" className="submit-btn">
						{loading ? (
							<span className="flex items-center">
								<Spin />
								Logging...
							</span>
						) : (
							"Log In"
						)}
						<ArrowRightIcon className="ml-2 w-5 h-5" />
					</button>
				</div>
			</div>
		</form>
	);
}
