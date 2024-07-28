import React from 'react'
type FilterContainerProps = {
	fieldName: string;
	name: string;
	id: string;
	label:string;
	value:string;
};
export default function FilterContainer({fieldName, name, id, label,value}:FilterContainerProps) {
  return (
		<div className="bg-white p-4">
			<h3 className="border-b">{fieldName}</h3>

			<div className="mt-4">
				<div className="flex items-center gap-x-3">
					<input
						type="checkbox"
						name={name}
						id={id}
						className=""
					/>
					<label htmlFor={id}>{label}</label>
				</div>
			</div>
		</div>
  );
}
