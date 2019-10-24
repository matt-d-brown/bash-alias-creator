# bash-alias-creator [![Build Status](https://travis-ci.com/matt-d-brown/bash-alias-creator.svg?branch=master)](https://travis-ci.com/matt-d-brown/bash-alias-creator)

> Node.js NPM packaged tool to help easily create and organize Bash/ZSH/Shell aliases.


## Install

```
$ npm install bash-alias-creator
```


## Usage

```js
const bashAliasCreator = require('bash-alias-creator');

bashAliasCreator('unicorns');
//=> 'unicorns & rainbows'
```


## API

### bashAliasCreator(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global bash-alias-creator
```

```
$ bash-alias-creator --help

  Usage
    bash-alias-creator [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ bash-alias-creator
    unicorns & rainbows
    $ bash-alias-creator ponies
    ponies & rainbows
```
