module.exports = {
	globDirectory: '../',
	globPatterns: [
		'**/*.{png,html,css,webp,jpg,json,md,txt,xml,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};