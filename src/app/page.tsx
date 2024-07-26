import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import Process from "@/components/home/Process";
import TopAppBar from "@/components/shared/TopAppBar";
import React from "react";

export default function HomePage() {
	return (
		<section>
			{/* <Navbar /> */}
			<TopAppBar />

			{/* <Category /> */}
			<Banner />
			<Process />
			<FeaturedProduct />
		</section>
	);
}
