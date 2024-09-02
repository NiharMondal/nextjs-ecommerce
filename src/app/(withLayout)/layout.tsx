import TopAppBar from "@/components/shared/TopAppBar";
import React from "react";
type HomeLayoutProps = {
	children: React.ReactNode;
};
export default function HomeLayout({ children }: HomeLayoutProps) {
	return (
		<>
			<TopAppBar />
			{children}
		</>
	);
}
