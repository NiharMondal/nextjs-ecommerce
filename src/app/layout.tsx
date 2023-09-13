import "./globals.css";
import { Nunito_Sans } from "next/font/google";


import "@stripe/stripe-js";

const nutino_sans = Nunito_Sans({ subsets: ["latin"] });

import Providers from "@/components/providers/Providers";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
	title: "Classy Garments | Home",
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
			<body className="bg-slate-200 dark:bg-gray-700">
				<Providers>
					<Navbar />
					<main className="container mx-auto min-h-[510px]">
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
