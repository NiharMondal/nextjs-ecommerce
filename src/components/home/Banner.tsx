"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
const offersProduct = [
	{
		id: "1653262",
		img: "/img/register-bg.jpg",
	},
	{
		id: "1653222",
		img: "/img/register-bg.jpg",
	},
	{
		id: "1653245",
		img: "/img/register-bg.jpg",
	},
];
export default function Banner() {
	const options = {
		dots: true,
		autoPlay: true,
	};
	return (
		<section className="overflow-hidden py-8 md:py-16">
			<div className="max-w-4xl mx-auto rounded-md">
				<Slider {...options}>
					{offersProduct.map((product) => (
						<div key={product.id} className="h-auto md:h-[450px] rounded-md ">
							<Image
								src={product.img}
								height={300}
								width={300}
								alt="offer-product-img"
								className="w-full md:h-full object-cover object-center rounded-md"
							/>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
