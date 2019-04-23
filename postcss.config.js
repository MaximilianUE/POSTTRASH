const postcssNormalize = require("postcss-normalize");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("stylelint"), //console based linting
    require("postcss-reporter")({ clearReportedMessages: true }), // ?
    postcssNormalize({ forceImport: true }), //only use normalize for supported browsers
    require("precss"), //allows sass like structure
    postcssPresetEnv({
      //handles support for old browsers
      autoprefixer: { grid: "autoplace" }
    })
  ]
};
