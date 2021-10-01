const colors = require('tailwindcss/colors');

module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blueGray: colors.blueGray
			},
			boxShadow: {
				white: '0 1px 2px 0 rgba(255, 255, 255, 255, 0.05)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
