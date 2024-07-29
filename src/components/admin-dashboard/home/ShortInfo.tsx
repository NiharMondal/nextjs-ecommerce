import React from 'react'
type Props={
    icon: any;
    title: string;
    value:string;
    clx: string
}
export default function ShortInfo({icon, title, value, clx}:Props) {
  return (
		<div className={`flex items-center gap-x-8 p-4 bg-white rounded-md `}>
			<div
				className={`rounded-full h-16 w-16  flex items-center justify-center ${clx}`}
			>
				{icon}
			</div>
			<div>
				<p>{title}</p>
				<h4>{value}</h4>
			</div>
		</div>
  );
}
