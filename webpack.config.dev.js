'use strict';

let path = require('path'),
    webpack = require('webpack');

module.exports = {
   context: __dirname,
   entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './client/app.js'
   ],
   output: {
      path: path.resolve(__dirname, './public/'),
      publicPath: 'http://localhost:3000/assets/[hash]',
      filename: 'bundle.js'
   },
   module: {
      preLoaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader'
         }
      ],
      loaders: [
         {
            test: /\.js$/,
            loader: 'babel',
            exclude: [
               path.resolve(__dirname, 'node_modules')
            ],
            query: {
               presets: ['es2015', 'stage-3']
            }
         },
         {test: /\.html$/, loader: 'html', exclude: /node_modules/},
         {test: /\.css$/,  loader: 'style!css', exclude: /node_modules/},
         {test: /\.(jpe?g|png|gif|svg)$/i, loader:'url'},
         {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
         {test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
         {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
         {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }

      ]
   },
   plugins: [
      //new webpack.optimize.CommonsChunkPlugin('common.js'),
      new webpack.HotModuleReplacementPlugin() // to generate hot update chunks
   ],
   externals: {
   }
};