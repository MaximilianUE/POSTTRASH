"use strict";

let webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FilterPlugin = require("filter-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const cosmiconfig = require("cosmiconfig");

const path = require("path");

/* -------------- Settings -------------- */

const simplePlateConfigFile = cosmiconfig("simpleplate").searchSync();

let simplePlateConfig = {};
if (simplePlateConfigFile) {
  simplePlateConfig = simplePlateConfigFile.config;
}

// use object destructuring to set a custom value or fallback on the defaults.

const { paths: spc_paths } = simplePlateConfig;
const { input: spc_input, output: spc_output } = spc_paths || {};
const {
  html: htmlFolder = "./*.html",
  css: cssEntry = "./src/css/main.scss",
  js: jsEntry = "./src/js/main.js",
  polyfill: polyfillEntry = "./src/js/polyfills.js",
  images: imageFolder = "./src/img",
  icons: iconFolder = "./src/img/icons/",
  fonts: fontFolder = "./src/fonts"
} = spc_input || {};

const {
  build: outputFolder = "./dist/",
  images: imageOutputFolder = "./img/"
} = spc_output || {};

/* -------------------------------------- */

module.exports = (env, argv) => ({
  entry: {
    main: cssEntry,
    polyfills: polyfillEntry,
    index: jsEntry
  },
  output: {
    path: path.join(__dirname, outputFolder),
    filename: "[name].bundle.js"
  },
  devServer: {
    compress: true,
    port: 4200,
    open: false
  },
  devtool: argv.mode === "development" ? "source-map" : "",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //from top to bottom!
          {
            loader: "css-loader",
            options: { importLoaders: 1, url: false, sourceMap: true }
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CopyWebpackPlugin([
      { from: imageFolder, to: "img" },
      { from: htmlFolder },
      { from: fontFolder, to: "fonts" }
    ]),
    new SVGSpritemapPlugin([iconFolder + "*.svg"], {
      sprite: {
        prefix: "icon-"
      },
      output: {
        filename: imageOutputFolder + "spritesheet.svg",
        svg4everybody: true
      }
    }),
    new FilterPlugin({ files: ["main.bundle.js", "main.bundle.js.map"] }),
    new CleanWebpackPlugin()
  ]
});
