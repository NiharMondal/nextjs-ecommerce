import { processData } from "@/assets/dummyData";
import React from "react";
type TCardProps = {
	process: {
		title: string;
		description: string;
		icon: any;
	};
};

export default function Process() {
	return (
		<section className="max-w-7xl mx-auto px-4 xl:px-0 py-10 md:py-6">
			<h2 className="text-center mb-10">How It Works</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
				{processData.map((process) => (
					<ProcessCard process={process} key={process.title} />
				))}
			</div>
		</section>
	);
}

const ProcessCard = ({ process }: TCardProps) => {
	return (
		<div className="p-10 bg-white space-y-2 rounded-xl hover:shadow-lg hover:scale-105 duration-300">
			<div>
				<process.icon className="size-20 w-fit mx-auto text-accent" />
			</div>
			<h4 className="text-center text-slate-600">{process.title}</h4>
			<p className="text-slate-600">{process.description}</p>
		</div>
	);
};
