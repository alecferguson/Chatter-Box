import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],

	daisyui: {
		themes: [
			"light",
			{
				dark: {
					...daisyUIThemes["dark"],
					primary: "#0ea5e9",
					secondary: "rgb(24, 24, 24)",
				},
			},
		],
	},
};