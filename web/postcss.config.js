const autoprefixer = require("autoprefixer");

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
      require('stylelint'),
      require('postcss-reporter')({ clearReportedMessages: true }),
      require('precss'),
      require('postcss-preset-env'),
      autoprefixer({ grid: true }),
      require('cssnano'),
  ]
}