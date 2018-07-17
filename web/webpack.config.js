"use strict";

let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path');

/* -------------- Settings -------------- */

const htmlEntry = './*.html';
const cssEntry = './src/css/main.scss';
const jsEntry = './src/js/main.js';
const imgEntry = './src/img';


const outputFolder = './dist/';

/* -------------------------------------- */

module.exports = (env) => ({
    entry: [cssEntry, jsEntry],
    output: {
        path: path.join(__dirname, outputFolder)
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 1, url: false } },
            'postcss-loader', // returns scss           
            'sass-loader' //compiles scss to css
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
        { from: htmlEntry},
      ])
    ]
  })