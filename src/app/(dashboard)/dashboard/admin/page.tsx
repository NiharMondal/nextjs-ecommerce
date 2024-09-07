import ChartWrapper from "@/components/admin-dashboard/home/ChartWrapper";
import InfoWrapper from "@/components/admin-dashboard/home/InfoWrapper";
import LatestOrder from "@/components/admin-dashboard/home/LatestOrder";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
	title: "Admin Dashboard | Gadget Galaxy",
	description: "Overview of the admin panel.",
};
export default function AdminHomePage() {
	return (
		<div className="space-y-8">
			<InfoWrapper />
			<ChartWrapper />
			<LatestOrder />
		</div>
	);
}
