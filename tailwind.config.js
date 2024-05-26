/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				josefin: "'Josefin Sans Variable', sans-serif"
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
