var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var config = require('./webpack.common.js');

config.mode = 'development';
// Use webpack dev server

config.entry = [
    'webpack-dev-server/client?http://localhost:8080',
    './static/index.js',
];

// override django's STATIC_URL for webpack bundles
config.output.publicPath = 'http://localhost:8080/static/';
config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
]);

// Add a loader for JSX files with react-hot enabled
config.module.rules.push(
    { test: /\.(js|jsx)$/, exclude: /node_modules/, use: {loader: 'babel-loader'} },
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, use: {loader: 'url-loader?limit=100000'} }
);

module.exports = config;