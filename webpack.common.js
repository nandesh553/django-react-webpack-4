const path= require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
 
    entry: './static/index.js',
    output: {
        path: path.resolve('./static/bundles/'),
        filename: "[name]-[hash].js",
     },
 
     plugins: [
     ],
 
    devServer: {
        watchContentBase: true,
        contentBase: path.resolve('./static/'),
        inline: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
 
    module: {
        rules: []
    }
};