module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,png,webp,jpg,json,md,txt,js,css}'
	],
	swDest: 'src/script/',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};