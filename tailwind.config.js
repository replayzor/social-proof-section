/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					veryDarkMagenta: "hsl(300, 43%, 22%)",
					softPink: "hsl(333, 80%, 67%)",
				},
				neutral: {
					darkGrayishMagenta: "hsl(303, 10%, 53%)",
					lightGrayishMagenta: "hsl(300, 24%, 96%)",
				},
			},
			fontFamily: {
				leagueSpartan: ["League Spartan", "sans-serif"],
			},
		},
	},
	plugins: [],
};
