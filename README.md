# ⛳ SimplePlate
## Boilerplate for simple web projects

everything you need to build a well-structured project, while writing better code using the newest technologies.  
Oh and it will work in all browsers 😉💻
(Chrome, Safari, Edge, Firefox and IE11)

### ✨ Feature List:

* webpack <br>
* postcss
	* supports CSS Grid via [Autoprefixer](https://github.com/postcss/autoprefixer)
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

### ⚙️ Simple Customisation

#### Global 🌐
* devserver settings > `.serverc.json`
* project structure settings > `webpack.config.js`
* support these browser versions > `browserslistrc`

#### CSS 🎨
* postcss addons > `.postcss.config.js`
* stylelint settings > `.stylelintrc`

made with ♥️ by [Diverent2](https://twitter.com/diverent2)
