const postcssNormalize = require("postcss-normalize");
const postcssPresetEnv = require("postcss-preset-env");
const postcssReporter = require("postcss-reporter");

//executed for bottom to top!
module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("stylelint"), //console based linting
    postcssPresetEnv({
      //handles support for old browsers
      autoprefixer: { grid: "autoplace" }
    }),
    postcssNormalize({ forceImport: true }), //only use normalize for supported browsers
    require("precss"), //allows sass like structure
    require("cssnano"), //minifies css
    postcssReporter({ clearReportedMessages: true }) // combines all plugin logs
  ]
};
