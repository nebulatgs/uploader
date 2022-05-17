const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				settings: "200px 1fr",
			},
			borderRadius: {
				win: "5px",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".round-section": {
					borderRadius: "5px",
					backgroundColor: "#ffffff0b",
				},
				".no-scrollbar": {
					scrollWidth: "0 !important",
				},
				".no-scrollbar::-webkit-scrollbar": {
					width: "0 !important",
				},
			});
		}),
	],
};
