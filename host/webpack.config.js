const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
	entry: "./src/index",
	mode: "development",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		port: 3000,
	},
	output: {
		publicPath: "auto",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-react"],
				},
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "host",
			remotes: {
				app1: "app1@http://localhost:3001/remote.js",
			},
			shared: {
				react: { singleton: true, requiredVersion: "18.2.0" },
				"react-dom": { singleton: true, requiredVersion: "18.2.0" },
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
