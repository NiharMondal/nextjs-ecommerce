import Banner from "@/components/home/Banner";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import OfferSection from "@/components/home/OfferSection";
import Process from "@/components/home/Process";
import TopAppBar from "@/components/shared/TopAppBar";
import { config } from "@/config";
import { THotOfferResponse, TServerResponse } from "@/types";
import React from "react";
const getHotOfferProduct = async (): Promise<
	TServerResponse<THotOfferResponse[]>
> => {
	const res = await fetch(`${config.backend_url}/hot-offer`, {
		method: "GET",
		cache: "no-store",
	});
	const data = await res.json();
	return data;
};
export default async function HomePage() {
	const offerProducts = await getHotOfferProduct();

	return (
		<>
			<TopAppBar />
			<Banner />
			<OfferSection products={offerProducts && offerProducts?.result} />
			<Process />
			<FeaturedProduct />
		</>
	);
}
