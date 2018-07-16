const autoprefixer = require("autoprefixer");

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
      require('precss'),
      require('postcss-preset-env'),
      autoprefixer({ grid: true }),
      require('cssnano'),
  ]
}