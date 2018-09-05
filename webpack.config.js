"use strict";

let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FilterPlugin = require('filter-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

const path = require('path');

/* -------------- Settings -------------- */

const htmlEntry = './*.html';
const cssEntry = './src/css/main.scss';

const mainJs = './src/js/main.js';
const polyfillJs = './src/js/polyfills.js';

const imgEntry = './src/img';
const iconsEntry = './src/img/icons/';
const fontsEntry = './src/fonts';

const outputFolder = './dist/';
const imageOutput = './img/';

/* -------------------------------------- */

module.exports = (env) => ({
  entry: {
    main: cssEntry,
    polyfills: polyfillJs,
    index: mainJs,
  },
  output: {
    path: path.join(__dirname, outputFolder),
    filename: '[name].bundle.js',
  },
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  devtool: process.env.WEBPACK_SERVE ? 'source-map' : '',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //from top to bottom!
          { loader: 'css-loader', options: { importLoaders: 1, url: false, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CopyWebpackPlugin([
      { from: imgEntry, to: 'img' },
      { from: htmlEntry },
      { from: fontsEntry, to: 'fonts' },
    ]),
    new SVGSpritemapPlugin({
      src: iconsEntry + '*.svg',
      filename: imageOutput + 'spritesheet.svg',
      prefix: 'icon-',
      svg4everybody: true,
    }),
    new FilterPlugin({ files: ['main.bundle.js', 'main.bundle.js.map'] }),
    new CleanWebpackPlugin(['dist']),
  ]
})