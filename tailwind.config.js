/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				card: "rgba(var(--card))",
				primary: "rgba(var(--primary))",
				secondary: "rgba(var(--secondary))",
				textPrimary: "rgba(var(--text-primary))",
				textCard: "rgba(var(--text-card))"
			}
		}
	},
	plugins: []
}
