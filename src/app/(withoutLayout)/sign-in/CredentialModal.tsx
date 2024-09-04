"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
export default function CredentialModal() {
	let [isOpen, setIsOpen] = useState(true);

	return (
		<div className="absolute top-8 right-5">
			<button onClick={() => setIsOpen(true)} title="See Credentials">
				<QuestionMarkCircleIcon className="size-10 text-primary" />
			</button>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					<DialogPanel className="max-w-lg space-y-4 border bg-white p-8">
						<div>
							<h4>Customer</h4>
							<p>Email: democustomer@gmail.com </p>
							<p>Password: demo!pass </p>
						</div>
						<div>
							<h4>Admin</h4>
							<p>Email: demoadmin@gmail.com </p>
							<p>Password: demoadmin!pass </p>
						</div>
						<div className="flex gap-4">
							<button
								onClick={() => setIsOpen(false)}
								className="btn border border-primary "
							>
								Close
							</button>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</div>
	);
}
