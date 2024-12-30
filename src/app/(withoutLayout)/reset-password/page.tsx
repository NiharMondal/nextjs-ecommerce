import React from "react";
import ResetForm from "./ResetForm";
import Link from "next/link";
import Image from "next/image";

export default function ResetPasswordPage() {
	return (
		<section className="h-screen flex items-center justify-center">
			<div className="p-8 border-t-2 border-accent shadow-xl w-full max-w-xl rounded-md">
				<div className="mx-auto w-[150px] h-[150px] mb-10 border shadow rounded">
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
				<ResetForm />
			</div>
		</section>
	);
}
