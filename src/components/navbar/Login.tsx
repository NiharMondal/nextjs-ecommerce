import Link from "next/link";
import React from "react";

export default function Login() {
	return (
		<Link href="/sign-in">
			<button className="btn primary">Sign in</button>
		</Link>
	);
}
