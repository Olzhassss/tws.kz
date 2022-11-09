/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	// purge: ['./scr/**/*.{html,js,ts,svelte}'],
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			colors: {
				primary: '#011f3d',
				secondary: '#738494',
				lightBackground:"#f2f2ea"
			},
			screens: {
				// '3xl': '1620px',
			},
		}
	},
	plugins: []
};
