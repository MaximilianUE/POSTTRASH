"use strict";

/* -------------- Settings -------------- */

const cssEntry = './src/css/main.css';
const outputFolder = './dist/';

/* -------------------------------------- */

let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

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
    ]
  })