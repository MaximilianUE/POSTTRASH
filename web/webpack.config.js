"use strict";

let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = (env) => ({
    entry: ['./src/css/main.css'],
    output: {
        path: path.join(__dirname, './dist/')
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