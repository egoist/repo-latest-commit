# repo-latest-commit [![NPM version](https://img.shields.io/npm/v/repo-latest-commit.svg)](https://npmjs.com/package/repo-latest-commit) [![NPM downloads](https://img.shields.io/npm/dm/repo-latest-commit.svg)](https://npmjs.com/package/repo-latest-commit) [![Build Status](https://img.shields.io/circleci/project/egoist/repo-latest-commit/master.svg)](https://circleci.com/gh/egoist/repo-latest-commit)

> Get the latest commit info of a git repository.

## Install

```bash
$ npm install --save repo-latest-commit
```

## Usage

```js
const latestCommit = require('repo-latest-commit')

latestCommit()
<!-- {
  message: 'let it rock\n    \n    wow',
  commit: 'ad4e3a8c6797300cf18665e421de9763ba8ef3fa',
  author: 'Your Name',
  email: 'you@example.com',
  date: 'Thu Oct 6 17:38:00 2016 +0800' 
} -->

latestCommit('../another-directory')
```

## License

MIT © [EGOIST](https://github.com/egoist)
