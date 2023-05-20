type TProps = {
	avatar: string;
	title: string;
	subtitle?: string;
	bg_color?: string;
};

export default function Horizontal(props: TProps) {
	
	if (!props.subtitle) {
		return (
			<div
				className="col-span-4 lg:col-span-2 rounded-md shadow-md"
				style={{ backgroundColor: props.bg_color ? props.bg_color : "" }}
			>
				<div className=" relative w-full flex items-center justify-center p-4 overflow-hidden cursor-pointer shadow min-h-[200px] h-full group transition">
					<div className="flex flex-col text-left w-auto justify-center">
						<h3 className="text-black text-2xl z-20 font-extrabold">
							{props.title}
						</h3>
					</div>
					<img
						src={props.avatar}
						alt="offered avatar"
						className="absolute top-0 left-0 group-hover:scale-110 duration-300"
					/>
				</div>
			</div>
		);
	}
	return (
		<div
			className="col-span-4 lg:col-span-2 rounded-md shadow-md"
			style={{ backgroundColor: props.bg_color ? props.bg_color : "" }}
		>
			<div className=" relative w-full flex items-center justify-center  p-4 overflow-hidden cursor-pointer shadow min-h-[200px] h-full  group transition">
				<div className="flex flex-col text-left w-auto justify-center">
					<h3 className="text-black text-2xl z-20 font-extrabold">
						{props.title}
					</h3>
					<span className="font-semibold">{props.subtitle}</span>
				</div>
				<div className="relative w-1/2 h-1/2 flex justify-center">
					<img
						src={props.avatar}
						alt="offered avatar"
						className="absolute -top-8 group-hover:scale-110 duration-300"
					/>
				</div>
			</div>
		</div>
	);
}
