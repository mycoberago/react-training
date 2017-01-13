var webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: "dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: { 
		inline: true,
		contentBase: "./dist",
		port: 3000
	},
	module: {
		loaders: [
			//  process data with .js extensions ignoring the node_modules
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"],
				query: {
					presets: [ "latest", "stage-0", "react"]
				}
			},
			//  helps process json data ignoring the node_modules
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json-loader'
			},
			// handle css
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			// handle scss files
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
		]
	}
}