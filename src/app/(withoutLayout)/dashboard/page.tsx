
import React from "react";

import InfoWrapper from "@/components/admin-dashboard/home/InfoWrapper";
import ChartWrapper from "@/components/admin-dashboard/home/ChartWrapper";
import LatestOrder from "@/components/admin-dashboard/home/LatestOrder";
export default function Dashboard() {
	return (
		<div className="space-y-8">
			<InfoWrapper />
			<ChartWrapper />
			<LatestOrder/>
		</div>
	);
}
