"use strict";

let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path');

/* -------------- Settings -------------- */

const htmlEntry = './*.html';
const cssEntry = './src/css/main.css';
const imgEntry = './src/img';


const outputFolder = './dist/';

/* -------------------------------------- */

module.exports = (env) => ({
    entry: [cssEntry],
    output: {
        path: path.join(__dirname, outputFolder)
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        }
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