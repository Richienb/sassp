# Sassp [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/sassp/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/sassp)

Sass with promise support and extras.

[![NPM Badge](https://nodei.co/npm/sassp.png)](https://npmjs.com/package/sassp)

## Install

```sh
npm install sassp
```

## Usage

```js
const sass = require("sassp");

(async () => {
    const { css } = await sass.render({ file: "index.sass" });
    console.log(css.toString());
    //=> `body { background-color: white; }`

    await sass.renderFile({ file: "index.sass", outFile: "index.css", sourceMap: true });
})();
```

## API

### render(options, callback?)

#### options

Type: `object`

See https://github.com/sass/dart-sass#javascript-api.

#### callback

Type: `function`

Optional callback. If not specified, the function will return a promise. See https://github.com/sass/dart-sass#javascript-api.

### renderSync(options)

See https://github.com/sass/dart-sass#javascript-api

### renderFile(options, callback?)

Same as `render` but automatically writes output to `outFile` and source map to `sourceMap` if specified.

### renderFileSync(options, callback?)

Same as `renderFile` but syncronous.
