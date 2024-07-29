
import React from "react";

import InfoWrapper from "@/components/admin-dashboard/home/InfoWrapper";
import ChartWrapper from "@/components/admin-dashboard/home/ChartWrapper";
export default function Dashboard() {
	return (
		<div className="space-y-8">
			<InfoWrapper />
			<ChartWrapper />
		</div>
	);
}
