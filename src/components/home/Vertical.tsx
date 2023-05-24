type TFeatured = {
	avatar: string;
	title: string;
	price: number;
};

export default function Vertical(props: TFeatured) {
	return (
		<div className=" col-span-4 md:col-span-2 lg:col-span-1 row-span-2 product-card order-1 lg:order-none rounded-md md:min-h-[400px] min-h-[500px]">
			<div className="overflow-hidden hover:shadow-md transition duration-100 group p-2 h-full flex flex-col items-center min-h[400px] max-w-full rounded-md cursor-pointer">
				<div className=" w-full pt-5 flex justify-center overflow-hidden mb-5 flex-shrink-0">
					<img
						src={props.avatar}
						alt=""
						className="w-full h-[400px] md:max-h-[250px]  object-cover object-top group-hover:scale-110 duration-200"
					/>
				</div>
				<div className=" text-center space-y-4">
					<h4>{props.title}</h4>
					<h3>${props.price}</h3>
				</div>
			</div>
		</div>
	);
}
