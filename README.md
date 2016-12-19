# Optimize Images

[![Github][github-tag]][github-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![License][license-image]][license-url]

## API

```js
const optimizeImage = require('optimize-image')
```
### optimizeImage(root, tinypngApiKey)


## Example

```js
const express = require('express')
const optimizeImage = require('optimize-image')

const app = express()

//generate from https://tinypng.com/developers
const tinypngApiKey = "YOUR_API_SECRET_KEY" 
const root = "public"

app.use(optimizeImage(root, tinypngApiKey))

```


[github-tag]: http://img.shields.io/github/tag/futerzak/optimize-images.svg?style=flat-square
[github-url]: https://github.com/futerzak/optimize-images/tags
[travis-image]: https://img.shields.io/travis/futerzak/optimize-images.svg?style=flat-square
[travis-url]: https://travis-ci.org/futerzak/optimize-images
[coveralls-image]: https://coveralls.io/repos/github/futerzak/optimize-images/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/futerzak/optimize-images?branch=master
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]:https://raw.githubusercontent.com/futerzak/optimize-images/master/LICENSE
