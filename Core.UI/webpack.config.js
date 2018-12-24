const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const babelPolyfill = require('babel-polyfill');

const conf = {
	mode: 'development',
	devtool: 'source-map',
	entry: [
		'babel-polyfill',
		'./index.jsx'
	],
    externals: {
        cheerio: 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
        'react-d3-core/lib/index': 'react-d3-core',
        'react-d3-basic/lib/index': 'react-d3-basic'
    },
    output: {
        path: path.join(__dirname, '/../Core.Server/bin/Debug/netcoreapp2.1/client'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
				use: {
					loader: 'babel',
					options: {
						presets: ['env']
					}
				},
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: ['css', 'less']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: 'css'
                })
            },
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2017', 'stage-1', 'react']
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'url',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: 'index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'img',
            to: 'img'
        }], {
                copyUnmodified: false
            }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, '/'),
            'node_modules'
        ],
        extensions: ['*', '.webpack.js', '.web.js', '.json', '.js', '.jsx', '.react.js']
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    }
};

module.exports = conf;
