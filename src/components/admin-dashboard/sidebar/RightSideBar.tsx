import React from "react";
import Nav from "../Nav";
type Props = {
	children: React.ReactNode;
	openDrawer: () => void;
	open: boolean;
};
export default function RightSideBar({ children, openDrawer, open }: Props) {
	return (
		<div className="w-full">
			<Nav openDrawer={openDrawer} open={open} />
			<div className="p-5">{children}</div>
		</div>
	);
}
