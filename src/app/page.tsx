import Horizontal from "@/components/home/Horizontal";
import Vertical from "@/components/home/Vertical";
import Wrapper from "@/components/home/Wrapper";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

export default function Home() {
	return (
		<section>
			<div className="flex items-center justify-between ">
				<div>
					<h1 className="capitalize">New In</h1>
				</div>
				<div className="flex gap-4">
					<div className="flex items-center  font-bold border-2 border-teal-300 px-4 py-2">
						<Bars3BottomLeftIcon className="h-6 w-6" />
						<span className="ml-4">Filter</span>
					</div>
					<div className="flex items-center  justify-between font-bold  border-2 border-teal-300 px-4 py-2 w-full">
						<Bars3BottomLeftIcon className="h-6 w-6" />
						<span className="ml-4">Sort</span>
					</div>
				</div>
			</div>

			<Wrapper>
				<Horizontal
					avatar="/img/horizontal/first_horizontal.png"
					title="Get Up To 50% off"
					bg_color="#BCE7F0"
				/>
				<Vertical
					avatar="/img/vertical/vertical_1.png"
					title="Hugo Boss Leather Jacket"
					price={300}
				/>
				<Vertical
					avatar="/img/vertical/vertical_2.png"
					title="Polka-dotted slip dress"
					price={200}
				/>
				<Horizontal
					avatar="/img/horizontal/second_horizontal.png"
					title="New Jordan Series"
					subtitle="Best of daily wear"
					bg_color="#dec8f3"
				/>
			</Wrapper>
			<Wrapper>
				<Vertical
					avatar="/img/vertical/vertical_3.png"
					title="NiceJeans Denim Shirt"
					price={170}
				/>
				<Vertical
					avatar="/img/vertical/vertical_4.png"
					title="CoolBrand Blouse"
					price={120}
				/>
				<Horizontal
					avatar="/img/horizontal/third_horizontal.png"
					title="New In Knitwear"
					subtitle="Layers On. Layers"
					bg_color="#FBE285"
				/>
				<Horizontal
					avatar="/img/horizontal/forth_horizontal.png"
					title="New Season"
					subtitle="Reflect your style"
					bg_color="#F9CADA"
				/>
			</Wrapper>
			<Wrapper>
				<Horizontal
					avatar="/img/horizontal/fifth_horizontal.png"
					title="End of Season"
					subtitle="Always sporty"
					bg_color="#99E6B0"
				/>
				<Vertical
					avatar="/img/vertical/vertical_5.png"
					title="Branded White Dress"
					price={130}
				/>
				<Vertical
					avatar="/img/vertical/vertical_6.png"
					title="ClothWorld Hooded Yellow"
					price={190}
				/>
				<Horizontal
					avatar="/img/horizontal/sixth_horizontal.png"
					title="New Accessoris"
					subtitle="Complete your combine"
					bg_color="#f3e6c8"
				/>
			</Wrapper>
		</section>
	);
}
