"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectedUserToken } from "@/redux/slice/authSlice";
import Link from "next/link";
import React from "react";
import DashboardDropdown from "../shared/DashboardDropdown";
export default function Login() {
	const token = useAppSelector(selectedUserToken);

	return (
		<>
			{token ? (
				<DashboardDropdown />
			) : (
				<Link href="/sign-in">
					<button className="btn border-2 border-primary hover:bg-primary hover:text-white">
						Sign in
					</button>
				</Link>
			)}
		</>
	);
}
