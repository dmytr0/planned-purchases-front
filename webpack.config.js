const PATH = require('path');
const SRCPATH = PATH.join(__dirname, "src");
const BUILDPATH = PATH.join(__dirname,  "build");
const IFDEV = true;
const htmlwebpackplugin = require("html-webpack-plugin");
const webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: PATH.join(SRCPATH, 'js/index.js'),
        vendor: ['jquery', 'underscore', 'backbone', "backbone.paginator"]
    },
    output: {
        path: BUILDPATH,
        publicPath: "/",
        filename: "js/[name].js?[hash:8]",
        chunkFilename: "js/[name].js?[hash:8]"
    },

    watch: IFDEV,
    watchOptions:{
        aggregateTimeout: 200
    },

    module:{
      loaders:[{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel",
          include: SRCPATH,
          query:{
              presets:["es2015"],
              minified: !IFDEV,
              compact: !IFDEV,
              comments: IFDEV
          }
      },
          {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
          },
          {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loaders: [
                  'file?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
              ]
          }
      ]

},

    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'underscore',
            Backbone: 'backbone'
        }),

        new webpack.optimize.CommonsChunkPlugin({ // <- CommonsChunkPlugin is not compatible with karma-webpack
            name: 'vendor',
            filename: 'js/[name].js?[hash:8]',
            minChunks: Infinity
        }),
        new htmlwebpackplugin({
            filename: "index.html",
            template: PATH.join(SRCPATH, "index.html")
        }),

        new ExtractTextPlugin('bundle.css')
    ],

    devtool: IFDEV ? 'inline-source-map': null,

    devServer:{
        host: 'localhost',
        port: '3000',
        historyApiFallback: true
    }
};