
import Provider from "../../theme/Provider";

import Navbar from "../components/Navbar";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Footer from "@/components/Footer";
const nutino_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "myCommerce",
	description: "Home or Landing page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`relative dark ${nutino_sans.className}`}
			suppressHydrationWarning
		>
			<body className=" bg-gray-200 dark:bg-gray-700">
				<Provider>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
