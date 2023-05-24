import NextThemeProvider from "../../theme/Provider";

import Navbar from "../components/Navbar";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Footer from "@/components/Footer";

import SideNavbar from "@/components/SideNavbar";
import ReduxProvider from "@/redux/prodiver";

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
			<body className=" bg-slate-200 dark:bg-gray-700">
				<NextThemeProvider>
					<Navbar />
					<main className="px-4 max-w-full lg:max-w-7xl mx-auto flex flex-col md:flex-row gap-x-5">
						<SideNavbar />
						<section className="min-h-screen w-full">
							<ReduxProvider>{children}</ReduxProvider>
						</section>
					</main>
					<Footer />
				</NextThemeProvider>
			</body>
		</html>
	);
}
