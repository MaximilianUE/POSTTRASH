const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
      require('precss'),
      require('postcss-preset-env'),
      autoprefixer({ grid: true }),
  ]
}