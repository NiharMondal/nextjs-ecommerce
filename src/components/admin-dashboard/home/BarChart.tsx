"use client";
import React, { useState } from "react";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function BarChart() {
	const [chartData] = useState({
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
		datasets: [
			{
				label: "",
				data: [3250, 1130, 1245, 3192, 2321, 1653, 2329],
				backgroundColor: "#2C43E4",
				borderRadius: 100,
				maxBarThickness: 12,
			},
		],
	});
	return (
		<div className="md:col-span-2 bg-white rounded-md p-5">
			<h2>Sales statistics</h2>
			<Bar data={chartData} />
		</div>
	);
}
