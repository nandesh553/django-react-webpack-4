var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var config = require('./webpack.common.js');

config.mode = 'production';
config.output.path = require('path').resolve('./static/bundles/');

config.plugins = config.plugins.concat([
    new BundleTracker({filename: './webpack-stats-prod.json'}),

    // removes a lot of debugging code in React
    new webpack.DefinePlugin({
        'process.env': {
        'NODE_ENV': JSON.stringify('production')
        }}),

    // keeps hashes consistent between compilations
    new webpack.optimize.OccurrenceOrderPlugin(),
]);

// Add a loader for JSX files
config.module.rules.push(
    { test: /\.(js|jsx)$/, exclude: /node_modules/, use: {loader: 'babel-loader'} },
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, use: {loader: 'url-loader?limit=100000'} }
);

module.exports = config;