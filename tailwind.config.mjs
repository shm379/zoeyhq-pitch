/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				dark: '#050505',
				glass: 'rgba(255, 255, 255, 0.03)',
				glassBorder: 'rgba(255, 255, 255, 0.08)'
			}
		},
	},
	plugins: [],
}
