import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
	return (
		<div className="relative h-[400px] md:h-[650px]">
			<Image
				src="/img/banner-photo.jpg"
				fill
				alt="banner-photo"
				quality={50}
				className="object-cover object-center opacity-20 -z-10"
			/>
			<div className="flex items-center h-full px-4 md:px-10">
				<div className="max-w-[400px]">
					<h2>
						<q>Upgrade Your Tech Today!</q>
					</h2>
					<p>
						Discover the latest in electronics with unbeatable
						prices and top-notch quality. Don't miss out on our
						exclusive deals—grab your essentials now!
					</p>
					<Link className="z-50" href="/product">
						<button className="mt-5 btn primary text-white">
							Shop Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
