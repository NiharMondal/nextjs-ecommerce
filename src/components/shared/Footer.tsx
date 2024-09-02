import Link from "next/link";
import {
	MapPinIcon,
	PhoneIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
export default function Footer() {
	return (
		<footer className="px-4 py-20 text-white bg-primary">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				<div className="space-y-3">
					<h4>
						<span className="border-b-2">Gadget Galaxy</span>
					</h4>
					<p>
						At{" "}
						<span className="text-secondary font-bold">
							Gadget Galaxy
						</span>
						, we are dedicated to providing the latest and greatest
						in electronics. From cutting-edge laptops to
						high-performance desktops and accessories, we strive to
						bring you the best products at competitive prices. With
						a commitment to quality and customer satisfaction, we
						aim to be your go-to destination for all your tech
						needs.
					</p>
				</div>
				<div className="space-y-3">
					<h4>
						<span className="border-b-2">Quick Links</span>
					</h4>
					<div className="flex flex-col space-y-2">
						<Link href="/" className="footer_link">
							Home
						</Link>
						<Link href="/product" className="footer_link">
							Products
						</Link>
						<Link href="/about-us" className="footer_link">
							About Us
						</Link>
						<Link href="/" className="footer_link">
							Contact Us
						</Link>
					</div>
				</div>
				<div className="space-y-3">
					<h4>
						<span className="border-b-2">Reach Us</span>
					</h4>

					<div className="space-y-2">
						<p className="flex items-center gap-x-5">
							{" "}
							<span>
								{" "}
								<MapPinIcon className="size-6" />{" "}
							</span>{" "}
							Barishal, Bangladesh
						</p>
						<p className="flex items-center gap-x-5">
							{" "}
							<span>
								{" "}
								<PhoneIcon className="size-6" />{" "}
							</span>
							+8801799476154
						</p>
						<p className="flex items-center gap-x-5">
							{" "}
							<span>
								{" "}
								<EnvelopeIcon className="size-6" />{" "}
							</span>
							developernihar@gmail.com
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
