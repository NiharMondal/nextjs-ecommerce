import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
	title: "About Us | Gadget Galaxy",
	description:
		"Learn more about Your Store Name, our mission, values, and the team behind the best online shopping experience.",
};
export default function AboutUs() {
	return (
		<div className="max-w-5xl mx-auto py-10 space-y-5 px-4">
			<div>
				<h4>
					Welcome to{" "}
					<span className="text-accent font-bold">Gadget Galaxy</span>{" "}
				</h4>

				<p>
					At Gadget Galaxy, we believe in empowering our customers
					with the latest and most reliable electronics on the market.
					Whether you're a tech enthusiast, a professional, or just
					someone looking for the best devices to enhance your daily
					life, we have something for everyone.
				</p>
			</div>
			<div>
				<h4>Our Mission </h4>
				<p>
					Our mission is to make cutting-edge technology accessible to
					everyone. We are committed to offering a wide range of
					products, from the newest laptops and desktops to essential
					accessories, all at competitive prices. We carefully select
					our inventory to ensure that every product meets our high
					standards for quality and performance.
				</p>
			</div>
			<div>
				<h4>Why Choose Us?</h4>

				<ul className="list-disc pl-10">
					<li>
						<span className="text-lg font-bold">
							Quality Products:
						</span>{" "}
						We only source products from trusted brands and
						manufacturers, so you can shop with confidence.
					</li>
					<li>
						<span className="text-lg font-bold">
							Competitive Prices:
						</span>{" "}
						We strive to offer the best prices on the market, with
						frequent deals and promotions to help you save even
						more.
					</li>
					<li>
						<span className="text-lg font-bold">
							Customer Satisfaction:
						</span>{" "}
						Your satisfaction is our top priority. Our dedicated
						customer support team is always here to help with any
						questions or concerns.
					</li>
					<li>
						<span className="text-lg font-bold">
							Fast Shipping:
						</span>{" "}
						We know you’re excited to receive your new tech, so we
						work hard to get your order to you as quickly as
						possible.
					</li>
				</ul>
			</div>
			<div>
				<h4>Our Story</h4>
				<p>
					Founded in [Year], [Your Company Name] started with a simple
					idea: to bring the best technology products to our customers
					at unbeatable prices. Over the years, we have grown from a
					small business to a trusted name in the electronics
					industry, serving thousands of satisfied customers.
				</p>
			</div>
			<div>
				<h4>Our Values</h4>
				<ul className="list-disc pl-10">
					<li>
						<span className="text-lg font-bold">Innovation:</span>{" "}
						We are always looking for new ways to improve our
						offerings and stay ahead of the curve in the tech world.
					</li>
					<li>
						<span className="text-lg font-bold">Integrity:</span> We
						believe in being honest and transparent with our
						customers, suppliers, and partners.
					</li>
					<li>
						<span className="text-lg font-bold">
							Customer Focus:
						</span>{" "}
						We put our customers at the center of everything we do,
						ensuring that their needs are met with care and
						attention.
					</li>
				</ul>
			</div>
			<div>
				<h4>Join our Community</h4>
				<p>
					At Gadget Galaxy, we are more than just a store—we are
					a community of tech lovers who share a passion for the
					latest gadgets and innovations. Follow us on social media
					and subscribe to our newsletter to stay updated on new
					arrivals, exclusive offers, and more.
				</p>
			</div>
		</div>
	);
}
