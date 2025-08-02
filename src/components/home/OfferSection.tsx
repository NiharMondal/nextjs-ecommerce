"use client";
import { THotOfferResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function OfferSection({
	products,
}: {
	products: THotOfferResponse[];
}) {
	const options = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<section className="overflow-hidden py-8 md:py-16 px-4 lg:px-0">
			<div className="text-center mb-12 space-y-1">
				<h2>Hot Offers</h2>
				<p className="font-medium">Buy these products within time! </p>
			</div>
			<div className="max-w-4xl mx-auto rounded-md px-4 lg:px-0">
				<Slider {...options}>
					{products?.map((p) => (
						<Link
							className="z-50"
							href={`/offer/${p.id}`}
							key={p.id}
						>
							<div
								key={p.id}
								className=" h-[350px] md:h-[450px] rounded-md relative border"
							>
								<Image
									src={p?.product?.photo}
									fill
									alt={p?.product?.name}
									className="w-auto h-auto object-cover object-center rounded-md"
									quality={100}
								/>

								<div className="absolute left-0 top-0 p-10">
									<div className="bg-secondary p-4 text-white rounded">
										<p>{p?.product?.name}</p>

										<h4>{p?.discount} % discount!</h4>
									</div>
								</div>
							</div>
						</Link>
					))}
				</Slider>
			</div>
		</section>
	);
}
