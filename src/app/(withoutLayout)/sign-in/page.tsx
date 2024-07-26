import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function SignInPage() {
  return (
		<section className="h-screen relative">
			<div className="grid grid-cols-1 h-full place-content-center justify-items-center px-4">
				<form className="p-8 rounded-md shadow-xl w-full md:max-w-xl space-y-5 relative border-t-2 border-accent">
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
					<div>
						<h3 className="text-center">Login to your Account</h3>
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							className="style"
						/>
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="password">Password</label>
						<input
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
					<button className="btn-primary w-full">Sign in</button>
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
			</div>
		</section>
  );
}
