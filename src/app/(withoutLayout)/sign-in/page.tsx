import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignInForm from "./SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign in | Gadget Galaxy",
	description:
		"Log in to your account at Your Store Name to access your order history, saved items, and more.",
};

export default function SignInPage() {
	return (
		<section className="grid grid-cols-1 h-screen place-content-center justify-items-center px-4">
			<div className="relative rounded-md border-t-2 border-accent w-full md:max-w-lg shadow-xl p-8">
				<div className="mx-auto w-[100px] h-[100px] mb-5 border shadow rounded">
					<Link href="/">
						<Image
							src="/img/logo.png"
							width={200}
							height={100}
							alt="logo"
							className="h-full w-full object-contain object-center"
						/>
					</Link>
				</div>
				<div className="mb-5">
					<h3 className="text-center">Welcome Back</h3>
					<p className="text-center text-gray-500">
						Sign in with your email and password
					</p>
				</div>
				<SignInForm />
			</div>
		</section>
	);
}
