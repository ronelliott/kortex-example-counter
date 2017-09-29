const path = require('path');

module.exports = {
	entry: path.join(__dirname, "src", "js", "main.js"),
	output: {
		path: __dirname,
		filename: "app.js",
	},
	resolve: {
		extensions: [ ".js" ],
	},
	module: {
		loaders: [{
			test: /\.(js)$/,
			loader: "babel-loader",
			query: {
				presets: [
					"es2015",
					"react",
					"stage-2",
				],
			},
		}],
	},
};
