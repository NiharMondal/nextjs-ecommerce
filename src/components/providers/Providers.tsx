"use client";

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import ToastProvider from "@/components/providers/ToastProvider";
import { Provider as ReduxProvider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider
			enableSystem={true}
			attribute="class"
			defaultTheme="system"
		>
			<SessionProvider>
				<ReduxProvider store={store}>
					<ToastProvider>{children}</ToastProvider>
				</ReduxProvider>
			</SessionProvider>
		</ThemeProvider>
	);
};

export default Providers;
