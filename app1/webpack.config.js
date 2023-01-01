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
		port: 3001,
	},
	output: {
		publicPath: "auto",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /(node_modules)/,
				use: {
					loader: "swc-loader",
					options: {
						jsc: {
							parser: {
								syntax: "ecmascript",
								jsx: true,
							},
						},
					},
				},
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "app1",
			filename: "remote.js",
			exposes: {
				"./App": "./src/app",
			},
			shared: {
				react: { singleton: true, requiredVersion: "18.2.0" },
				"react-dom": { singleton: true, requiredVersion: "18.2.0" },
				"react-redux": { singleton: true, requiredVersion: "8.0.5" },
				"@reduxjs/toolkit": {
					singleton: true,
					requiredVersion: "1.9.1",
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
