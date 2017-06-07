let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let ManifestPlugin = require('webpack-manifest-plugin');
let autoprefixer = require('autoprefixer');

let config = {
    entry: {
        app: './app/base.js',
        vendor: ['jquery', 'riot']
    },
    output: {
        path: './public/build',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        preLoaders: [
            {
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: 'riotjs-loader',
                query: { type: 'none' }
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            },
            {
                test: /\.(jade|pug)$/,
                loaders: ['raw', 'jade-html'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style','css?sourceMap')
            },
            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract('style','css?sourceMap!postcss!sass?sourceMap'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|woff|!ttf)$/,
                loader: 'url?limit=1000',
                exclude: /node_modules/
            }
        ]
    },
    postcss: [autoprefixer]
};

if (process.env.NODE_ENV === 'dev') {
    config.plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({
            riot: 'riot',
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.bundle.js'
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.DefinePlugin({
            DEV: true,
            PROD: false
        })
    ];
}

if (process.env.NODE_ENV === 'prod') {
    config.output.path = './dist';
    config.output.filename = 'js/bundle.js';

    config.devtool = 'source-map';

    config.plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new ManifestPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.bundle.js'
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            DEV: false,
            PROD: true
        })
    ];
}

module.exports = config;