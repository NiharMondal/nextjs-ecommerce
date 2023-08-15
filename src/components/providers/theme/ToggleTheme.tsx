"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
export default function ToggleTheme() {
	const { theme, setTheme, systemTheme } = useTheme();

	const currentTheme = theme === "system" ? systemTheme : theme;

	const [mounted, setMounted] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<div className="theme_button_position">
			{currentTheme === "dark" ? (
				<button onClick={() => setTheme("light")}>
					<MoonIcon height={20} width={20} />
				</button>
			) : (
				<button onClick={() => setTheme("dark")}>
					<SunIcon height={20} width={20} />
				</button>
			)}
		</div>
	);
}
