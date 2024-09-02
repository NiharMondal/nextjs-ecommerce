"use client";
import { useGetOfferedProductQuery } from "@/redux/api/featuredAndOfferApi";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function hotOffersHomePage() {
	const { data: hotOffers } = useGetOfferedProductQuery();
	const options = {
		dots: true,
		autoPlay: true,
	};
	return (
		<section className="overflow-hidden py-8 md:py-16">
			<div className="max-w-4xl mx-auto rounded-md px-4 lg:px-0">
				<Slider {...options}>
					{hotOffers?.result?.map((p) => (
						<div
							key={p.id}
							className="h-[350px] md:h-[450px] rounded-md relative border"
						>
							<Image
								src={p.product.photo}
								fill
								alt={p.product.name}
								className="w-auto h-auto object-cover object-center rounded-md"
								quality={100}
							/>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
