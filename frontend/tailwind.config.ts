import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('tailwindcss-animate')]
}
export default config