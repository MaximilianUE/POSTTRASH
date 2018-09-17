# ⛳ SimplePlate
## Boilerplate for simple web projects

 <strong>everything you need </strong> to build a well-structured project, while <strong>writing better code using the newest technologies. </strong> 
Oh and it will work in all browsers 😉💻
(Chrome, Safari, Edge, Firefox and(!) IE11)

### ✨ Feature List:

* webpack <br>
* postcss
	* CSS Grid support  via [Autoprefixer](https://github.com/postcss/autoprefixer)
	* [csstools/normalize.css](https://github.com/csstools/normalize.css)
* babel <br>
* webpack-serve dev-server <br>
* svg spritesheet <br>
* linting <br>

### 🏗️ Setup:

`git clone https://github.com/MaximilianUE/SimplePlate.git`

`yarn`

### 🏃 Ret-2-go Development with Webpack Serve

`yarn start`

for reference see [Webpack Serve Documentation](https://github.com/webpack-contrib/webpack-serve)

### 🚚 Production

`yarn build`

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
@media (--large) {
    color: red;
}
```

Default vars: `--large, --medium, —small` > `.src/css/base/_breakpoints.scss`

see also [postcss-preset-env documentation](https://preset-env.cssdb.org/features#media-query-ranges)


### ⚙️ Simple Customisation

#### Global 🌐
* devserver settings > `.serverc.json`
* project structure settings > `webpack.config.js`
* support these browser versions > `browserslistrc`

#### CSS 🎨
* postcss addons > `.postcss.config.js`
* stylelint settings > `.stylelintrc`

made with ♥️ by [Diverent2](https://twitter.com/diverent2)
