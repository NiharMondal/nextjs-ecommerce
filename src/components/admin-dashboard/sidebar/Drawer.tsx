"use client";
import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
 
export default function Drawer({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = useState(true);
	const openDrawer = () => {
		setOpen(true);
	};
	const closeDrawer = () => {
		setOpen(false);
	};
	return (
		<section className="flex overflow-hidden">
			<LeftSideBar closeDrawer={closeDrawer} open={open} />
			<RightSideBar
				children={children}
				openDrawer={openDrawer}
				open={open}
			/>
		</section>
	);
}
