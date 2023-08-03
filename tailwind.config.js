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
					lg: "5rem",
					xl: "6rem",
					"2xl": "7rem",
				},
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
