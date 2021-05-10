# chauncey

[![build status](https://img.shields.io/travis/tanem/chauncey/master.svg?style=flat-square)](https://travis-ci.org/tanem/chauncey)
[![npm version](https://img.shields.io/npm/v/chauncey.svg?style=flat-square)](https://www.npmjs.com/package/chauncey)
[![npm downloads](https://img.shields.io/npm/dm/chauncey.svg?style=flat-square)](https://www.npmjs.com/package/chauncey)
[![Dependency status](https://david-dm.org/tanem/chauncey.svg?style=flat-square)](https://david-dm.org/tanem/chauncey)
[![devDependency Status](https://david-dm.org/tanem/chauncey/dev-status.svg?style=flat-square)](https://david-dm.org/tanem/chauncey#info=devDependencies)

Shorten URLs with [Bitly](https://bitly.com/).

```
Usage: chauncey <url> [options]

Options:
  -h, --help  Show help

Example:
  chauncey http://google.com/  Shorten http://google.com/ using Bitly
```

## "Chauncey"?

Chauncey McPufferson is Bitly's mascot :smiley:

## Installation

```
$ npm i -g chauncey
```

## Configuration

First you need a [Bitly developer access token](http://dev.bitly.com/authentication.html). You can either pass this token directly via the [API](#api), or add it to your user environment so chauncey can pick it up automatically. For example:

```
$ BITLY_ACCESS_TOKEN=123abc chauncey http://google.com/
```

You can also use a `.chaunceyrc` file. Chauncey will look for `.chaunceyrc` starting in `process.cwd()`, then `../`, `../../`, all the way up to the filesystem root. It should have the following content:

```
export BITLY_ACCESS_TOKEN=123abc
```

## Usage

### CLI

Chauncey will output the shortened URL to `stdout`:

```
$ chauncey http://google.com/
http://bit.ly/1jib0Hi
```

So on OS X, you can do stuff like:

```
$ chauncey http://google.com/ | pbcopy
```

### API

#### chauncey(url, [token], [done])

Shortens `url` using the Bitly API.

__Arguments__

* `url` - The URL to shorten.
* `token` - *Optional* Bitly access token. Will take precedence over `BITLY_ACCESS_TOKEN` defined in the user environment (see [configuration](#configuration)).
* `done(error, result)` - *Optional* A callback which is called with the shortened URL, or an error.

__Example__

```js
import chauncey from 'chauncey';

chauncey({
  url: 'http://google.com/',
  token: '123abc',
  done: (error, result) => {
    if (error) return console.error(error.message);
    console.log(result);
  }
});
```

## Tests

```
$ npm test
```

## Note

This module uses the Bitly API, but is neither developed nor endorsed by Bitly.

## License

MIT
