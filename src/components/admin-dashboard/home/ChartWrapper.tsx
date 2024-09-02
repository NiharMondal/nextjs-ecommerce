import React from "react";

import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

export default function ChartWrapper() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
			<BarChart />
			<DoughnutChart />
            
		</div>
	);
}
