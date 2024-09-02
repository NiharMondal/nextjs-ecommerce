/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				padding: {
					DEFAULT: ".8rem",
					sm: "2rem",
					lg: "3rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			colors: {
				background: "#F5F6FE",
				color:"#04061C",
				primary: "#2C43E4",
				secondary: "#EE7CD7",
				accent: "#EB609A",
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
