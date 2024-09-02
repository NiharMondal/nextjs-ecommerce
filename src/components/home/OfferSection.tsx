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
		autoPlay: true,
	};

	return (
		<section className="overflow-hidden py-8 md:py-16">
			<div className="text-center mb-12 space-y-1">
				<h2>Hot Offers</h2>
				<p className="font-medium">Buy these products within time! </p>
			</div>
			<div className="max-w-4xl mx-auto rounded-md px-4 lg:px-0">
				<Slider {...options}>
					{products?.map((p) => (
						<div
							key={p.id}
							className=" h-[350px] md:h-[450px] rounded-md relative border"
						>
							<Link
								className="z-50"
								href={`/offer/${p.id}`}
							>
								<Image
									src={p?.product?.photo}
									fill
									alt={p?.product?.name}
									className="w-auto h-auto object-cover object-center rounded-md"
									quality={100}
								/>
							</Link>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
