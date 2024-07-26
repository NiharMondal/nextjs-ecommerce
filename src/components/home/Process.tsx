import React from "react";
const process = [
	{
		id: "5323",
		content: <p>Hello world</p>,
	},
	{
		id: "523",
		content: <p>Hello world</p>,
	},
	{
		id: "532",
		content: <p>Hello world</p>,
	},
	{
		id: "323",
		content: <p>Hello world</p>,
	},
];
export default function Process() {
	return (
		<section className="max-w-7xl mx-auto px-4 xl:px-0 mb-10">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
				{process.map((pr) => (
					<div key={pr.id} className="p-4 rounded-md bg-secondary ">
						<h2>{pr.content}</h2>
					</div>
				))}
			</div>
		</section>
	);
}
