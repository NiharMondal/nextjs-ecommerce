import TopAppBar from "@/components/shared/TopAppBar";
import React from "react";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<TopAppBar />
			{children}
		</>
	);
}
