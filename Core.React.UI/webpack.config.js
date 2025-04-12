const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env, argv) => {
	const mode = argv.mode || 'production';
	const outputPath = mode === 'development'
		? path.join(__dirname, '/../Core.Server/bin/Debug/net8.0/client/react')
		: path.join(__dirname, '/out');
	console.log("Mode: " + JSON.stringify(mode));
	console.log("Output: " + outputPath);

	const config = {
		mode: mode,
		devtool: 'source-map',
		entry: [
			'./index.jsx'
		],
		output: {
			path: outputPath,
			filename: 'bundle.js',
			clean: true
		},
		externals: {
			cheerio: 'window',
			'react/addons': 'react',
			'react/lib/ExecutionEnvironment': 'react',
			'react/lib/ReactContext': 'react',
			'react-d3-core/lib/index': 'react-d3-core',
			'react-d3-basic/lib/index': 'react-d3-basic'
		},
		stats: {
			children: true
		},
		module: {
			rules: [
				{
					test: /\.less$/,
					use: [
						MiniCssExtractPlugin.loader, //"style-loader" is not compatible with MiniCssExtractPlugin.loader
						"css-loader",
						"less-loader"
					]
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader, //"style-loader" is not compatible with MiniCssExtractPlugin.loader
						"css-loader"
					]
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules|bower_components/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								"@babel/preset-env",
								"@babel/preset-modules",
								"@babel/preset-react"
							],
							plugins: [
								"@babel/plugin-transform-runtime",
								"@babel/plugin-proposal-class-properties",
								"@babel/plugin-transform-arrow-functions",
								"@babel/plugin-syntax-async-generators",
								"@babel/plugin-syntax-dynamic-import",
								"@babel/plugin-transform-modules-commonjs"
							]
						}
					}
				},
				{
					test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					use: {
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'application/font-woff'
						}
					}
				},
				{
					test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					use: 'file-loader'
				},
				{
					test: /\.ico$/,
					use: {
						loader: 'file-loader'
					}
				}
			]
		},
		resolve: {
			extensions: ['*', '.js', '.jsx'],
		},
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			}),
			new MiniCssExtractPlugin({
				linkType: 'text/css',
				filename: 'bundle.css'
			}),
			new HtmlWebpackPlugin({
				inject: false,
				template: 'index.html',
				filename: 'index.html',
				favicon: 'img/favicon.ico',
			})
		],
		resolve: {
			modules: [
				path.join(__dirname, '/'),
				'node_modules'
			],
			extensions: ['*', '.webpack.js', '.web.js', '.json', '.js', '.jsx', '.react.js']
		}
	};

	if (mode === 'production') {
		config.plugins.push(new CompressionPlugin());
	}

	if (mode === 'production') {
		config.optimization = {
			minimizer: []
		};
	}

	return config;
};
