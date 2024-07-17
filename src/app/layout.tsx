import "./globals.css";
import "swiper/css";
import "swiper/css/bundle";
import "@stripe/stripe-js";
import { Nunito } from "next/font/google";

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
	title: "Gadget Galaxy | Home",
	description: "classy garments home page. classy garments landing page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={nunito.className}>
			<body className="bg-background">
				<main>{children}</main>
			</body>
		</html>
	);
}
