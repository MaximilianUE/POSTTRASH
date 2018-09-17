const autoprefixer = require("autoprefixer");
const postcssNormalize = require('postcss-normalize');

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
      require('stylelint'),
      require('postcss-reporter')({ clearReportedMessages: true }),
      require('precss'),
      postcssNormalize({ forceImport: true }), //only use normalize for supported browsers
      require('postcss-preset-env'),
      autoprefixer({ grid: true }),
      require('cssnano'),
  ]
}