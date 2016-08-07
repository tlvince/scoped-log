# scoped-log

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/scoped-log
[travis-image]: https://img.shields.io/travis/tlvince/scoped-log.svg
[npm-url]: https://www.npmjs.com/package/scoped-log
[npm-image]: https://img.shields.io/npm/v/scoped-log.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/scoped-log.svg

> Npmlog with filename prefixes

```js
const log = require('scoped-log')
log.info(__filename, 'hello')
// => info lib/my-module.js hello
```

## Installation

```shell
npm install --save scoped-log
```

## Usage

`log[level](prefix, messages...)`

... where `level` is one of `[silly, verbose, info, http, warn, error]`.

Set `LOG_LEVEL` to the level to display logs at. Defaults to `info`.

## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
