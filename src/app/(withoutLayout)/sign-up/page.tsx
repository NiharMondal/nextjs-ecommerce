import Image from "next/image";
import Link from "next/link";
import React from "react";

import SignUpForm from "./SignUpForm";

export default function RegisterPage() {
	return (
		<section className="grid grid-cols-1 h-screen place-content-center justify-items-center px-4">
			<div className="rounded-md border-t-2 border-accent w-full md:max-w-lg shadow-xl p-8">
				<div className="mx-auto w-[100px] h-[100px] border shadow rounded">
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
					<h3 className="text-center">Create an Account</h3>
				</div>
				<SignUpForm />
			</div>
		</section>
	);
}
