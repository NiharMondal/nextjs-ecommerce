import NextThemeProvider from "../components/providers/theme/Provider";

import SecondNavbar from '../components/shared/Navbar'
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Footer from "@/components/shared/Footer";
import ReduxProvider from "@/components/providers/prodiver";

const nutino_sans = Nunito_Sans({ subsets: ["latin"] });

import ToastProvider from "@/components/react-toastify/ToastProvider";
import NextSession from "@/components/providers/NextSession";

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
				<NextSession>
					<NextThemeProvider>
						<ReduxProvider>
							<ToastProvider>
								{/* <Navbar /> */}
								<SecondNavbar/>
								<main className="container mx-auto min-h-[510px]">
									{children}
								</main>
								<Footer />
							</ToastProvider>
						</ReduxProvider>
					</NextThemeProvider>
				</NextSession>
			</body>
		</html>
	);
}
