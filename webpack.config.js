const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'src', 'js', 'main.js'),
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-react',
						],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.js'],
	},
	output: {
		filename: 'app.js',
		path: __dirname,
	},
};
