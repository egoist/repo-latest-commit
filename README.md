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
//=> [ '7d411e703b6815a9dfdbaf574845dc681b5bca6a', 'commit message' ]

latestCommit('../another-directory')
```

## License

MIT © [EGOIST](https://github.com/egoist)
