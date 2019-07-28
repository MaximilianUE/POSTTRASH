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

const spConfigFile = cosmiconfig("simpleplate").searchSync();

let spConfig;
if (!spConfigFile) {
  spConfig = {};
} else {
  spConfig = spConfigFile.config;
}

const { paths } = spConfig;
const { input, output } = paths || {};
const {
  htmlEntry = "./*.html",
  cssEntry = "./src/css/main.scss",
  mainJs = "./src/js/main.js",
  polyfillJs = "./src/js/polyfills.js",
  imgEntry = "./src/img",
  iconsEntry = "./src/img/icons/",
  fontsEntry = "./src/fonts"
} = input || {};

const { outputFolder = "./dist/", imageOutput = "./img/" } = output || {};

console.log("htmlEntry: " + htmlEntry);
console.log("outputFolder: " + outputFolder);

/*
function getSimplePlateConfig() {
  const configFile = explorer.searchSync();
  const config = configFile.config;
  return config;
}

const simplePlateConfig = getSimplePlateConfig();

const spcDefaultOpts = {
  paths: {
    input: {
      htmlEntry: "./*.html",
      cssEntry: "./src/css/main.scss",
      mainJs: "./src/js/main.js",
      polyfillJs: "./src/js/polyfills.js",
      imgEntry: "./src/img",
      iconsEntry: "./src/img/icons/",
      fontsEntry: "./src/fonts"
    },
    output: {
      outputFolder: "./dist/",
      imageOutput: "./img/"
    }
  }
};

const spcDefaultPaths = spcDefaultOpts.paths;
const spcDefaultPathInput = spcDefaultPaths.input;
const spcDefaultPathOutput = spcDefaultPaths.output;

const spcPaths = simplePlateConfig.paths;
const spcPathInput = spcPaths.input;
const spcPathOutput = spcPaths.output;

const htmlEntry = spcPathInput.htmlEntry || spcDefaultPathInput.htmlEntry;
const cssEntry = spcPathInput.cssEntry || spcDefaultPathInput.cssEntry;
const mainJs = spcPathInput.mainJs || spcDefaultPathInput.mainJs;
const polyfillJs = spcPathInput.polyfillJs || spcDefaultPathInput.polyfillJs;
const imgEntry = spcPathInput.imgEntry || spcDefaultPathInput.imgEntry;
const iconsEntry = spcPathInput.iconsEntry || spcDefaultPathInput.iconsEntry;
const fontsEntry = spcPathInput.fontsEntry || spcDefaultPathInput.fontsEntry;

console.log(spcPathOutput.imageOutput);

const outputFolder =
  spcPathOutput.outputFolder || spcDefaultPathOutput.outputFolder;
const imageOutput =
  spcPathOutput.imageOutput || spcDefaultPathOutput.imageOutput;
*/

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
