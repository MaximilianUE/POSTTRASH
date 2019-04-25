[![Build Status](https://david-dm.org/diverent2/simpleplate/dev-status.svg)](https://david-dm.org/diverent2/simpleplate?type=dev)

# ⛳ SimplePlate

## Boilerplate for simple web projects

<strong>everything you need </strong> to build a well-structured project, while <strong>writing better code using the newest technologies. </strong>
Oh and it will work in all browsers 😉💻
(Chrome, Safari, Edge, Firefox and(!) IE11)

### ✨ Feature List:

- webpack <br>
- webpack-dev-server <br>
- postcss
  - [csstools/normalize.css](https://github.com/csstools/normalize.css)
  - Sass-like with [PreCSS](https://github.com/jonathantneal/precss)
  - CSS Grid support with [Autoprefixer](https://github.com/postcss/autoprefixer)
  - upcoming CSS features and browser compatibility with [Preset-Env](https://preset-env.cssdb.org)
- [Babel](https://babeljs.io/) for ES6 support <br>
- svg spritesheet <br>
- linting <br>
- [prettier](https://prettier.io/) auto formating <br>

### 🏗️ Setup:

clone this repository

```
$ git clone https://github.com/diverent2/SimplePlate.git
$ cd SimplePlate
```

install modules

```bash
// using yarn (recommended)
$ yarn start

//using npm
$ npm install
```

### 🏃 Ret-2-go Development with Webpack-Dev-Server

```bash
// using yarn (recommended)
$ yarn start

// using npm
$ npm start
```

for reference see [Webpack-Dev-Server Documentation](https://github.com/webpack/webpack-dev-server)

### 🚚 Production

```bash
// using yarn (recommended)
$ yarn build

// using npm
$ npm run build
```

### 👩‍💻 usage

#### svg-icons (spritesheet)

To use svg icons refer to their filename via icon-[name]

ex.

> img/icons/[name].svg

```html
<svg width="60" height="60">
  <use xlink:href="/img/spritesheet.svg#icon-[name]"></use>
</svg>
```

#### media queries 4.0

ex.

```css
@media (--large-down) {
  color: red;
}
```

Default vars:

```css
--xlarge-[up],
--large-[up/down/only],
--medium-[up/down/only],
--small-[only]
```

for more info talk a look at
[./src/css/base/\_breakpoints.scss](https://github.com/diverent2/SimplePlate/blob/master/src/css/base/_breakpoints.scss).

see also [postcss-preset-env documentation](https://preset-env.cssdb.org/features#media-query-ranges)

### ⚙️ Simple Customisation

#### Global 🌐

- dev-server settings > `webpack.config.js > devServer`
- project structure settings > `webpack.config.js > Settings`
- support these browser versions > `.browserslistrc`
- prettier auto-formating > `.prettierrc`

#### CSS 🎨

- postcss addons > `.postcss.config.js`
- stylelint settings > `.stylelintrc`

#### JS 🔩

- eslint > `.eslintrc.json`

made with ♥️ by [diverent2](https://twitter.com/diverent2)
