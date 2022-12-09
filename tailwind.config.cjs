/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	// purge: ['./scr/**/*.{html,js,ts,svelte}'],
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			colors: {
				primary: '#011f3d',
				secondary: '#1f1f64',
				lightBackground: '#f2f2ea',
				brandBlue: '#4cb5e2',
				footer: '#dfdfdc'
			},
			screens: {
				xs: '400px'
			}
		}
	},
	plugins: []
};
