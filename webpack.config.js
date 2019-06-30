"use strict";

let webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FilterPlugin = require("filter-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");

const path = require("path");

/* -------------- Settings -------------- */

const cosmiconfig = require("cosmiconfig");
const explorer = cosmiconfig("simpleplate");

function getSimplePlateConfig() {
  const configFile = explorer.searchSync();
  const config = configFile.config;
  return config;
}

const simplePlateConfig = getSimplePlateConfig();

const {
  htmlEntry,
  cssEntry,
  mainJs,
  polyfillJs,
  imgEntry,
  iconsEntry,
  fontsEntry
} = simplePlateConfig.paths.input;

const { outputFolder, imageOutput } = simplePlateConfig.paths.output;

/* -------------------------------------- */

module.exports = (env, argv) => ({
  entry: {
    main: cssEntry,
    polyfills: polyfillJs,
    index: mainJs
  },
  output: {
    path: path.join(__dirname, outputFolder),
    filename: "[name].bundle.js"
  },
  devServer: {
    compress: true,
    port: 4200,
    open: true
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
      { from: imgEntry, to: "img" },
      { from: htmlEntry },
      { from: fontsEntry, to: "fonts" }
    ]),
    new SVGSpritemapPlugin([iconsEntry + "*.svg"], {
      sprite: {
        prefix: "icon-"
      },
      output: {
        filename: imageOutput + "spritesheet.svg",
        svg4everybody: true
      }
    }),
    new FilterPlugin({ files: ["main.bundle.js", "main.bundle.js.map"] }),
    new CleanWebpackPlugin()
  ]
});
