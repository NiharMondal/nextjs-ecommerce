"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
Spin;
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Spin from "@/components/AnimateButton";



export default function RegisterForm() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [authState, setAuthState] = useState({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAuthState({ ...authState, [e.target.name]: e.target.value });
	};

	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const response = await fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(authState),
		});

		console.log(response);
		

		if (response.status === 201 && response.ok === true) {
			setLoading(false);
			toast.success("User created successfully");
			router.replace("/login");
		} else {
			const error = await response.json();
			if (error) {
				setLoading(false);
				setError(error);
			}
		}
	};
	return (
		<form className="mt-8" onSubmit={handleRegister}>
			<div className="space-y-5">
				<div>
					<label htmlFor="username" className="text-base font-medium ">
						Full Name
					</label>
					<div className="mt-2">
						<input
							className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="text"
							placeholder="Full Name"
							id="name"
							name="name"
							onChange={handleChange}
							value={authState.name}
						></input>
					</div>
				</div>

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
							name="email"
							id="email"
							onChange={handleChange}
							value={authState.email}
						></input>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="password" className="text-base font-medium ">
							Password
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
					<div className="flex items-center justify-between">
						<label
							htmlFor="confirmPass"
							className="text-base font-medium "
						>
							Confirm Password{" "}
						</label>
					</div>
					<div className="mt-2">
						<input
							className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="password"
							placeholder="Confirm password"
							id="password_confirmation"
							name="password_confirmation"
							onChange={handleChange}
							value={authState.password_confirmation}
						></input>
						{error ? (
							<p className="mt-2 text-red-600 text-center font-semibold">
								{error}
							</p>
						) : null}
					</div>
				</div>
				<div>
					<button
						type="submit"
						className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
					>
						{loading ? (
							<span className="flex items-center">
								<Spin />
								Creating...
							</span>
						) : (
							"Create Account"
						)}
						<ArrowRightIcon className="ml-2 w-5 h-5" />
					</button>
				</div>
			</div>
		</form>
	);
}
