"use client";
import React from "react";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(CategoryScale);

export default function DoughnutChart() {
    const data = {
		labels: ["Jan", "Feb", "Mar", "Apr"],
		datasets: [
			{
				label: "",
				data: [3250, 1130, 1245, 3192],
				backgroundColor: ["#2C00E4", "#87ab73", "#004628", "#772628"],
				borderRadius: 100,
				cutout: "90%",
				hoverOffset: 4,
			},
		],
	};
	return (
		<div className="bg-white p-5 rounded-md col-span-1">
			<h2>Visitors</h2>
			<Doughnut data={data} />
		</div>
	);
}
