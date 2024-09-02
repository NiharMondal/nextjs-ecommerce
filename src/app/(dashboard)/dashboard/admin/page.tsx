import ChartWrapper from "@/components/admin-dashboard/home/ChartWrapper";
import InfoWrapper from "@/components/admin-dashboard/home/InfoWrapper";
import LatestOrder from "@/components/admin-dashboard/home/LatestOrder";
import React from "react";

export default function AdminHomePage() {
	return (
		<div className="space-y-8">
			<InfoWrapper />
			<ChartWrapper />
			<LatestOrder />
		</div>
	);
}
