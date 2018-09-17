const autoprefixer = require("autoprefixer");
const postcssNormalize = require('postcss-normalize');

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
      require('stylelint'), //console based linting
      require('postcss-reporter')({ clearReportedMessages: true }), // ?
      postcssNormalize({ forceImport: true }), //only use normalize for supported browsers
      require('precss'), //allows sass like structure
      require('postcss-preset-env'),
      autoprefixer({ grid: true }),
      require('cssnano'), //minifies css
  ]
}