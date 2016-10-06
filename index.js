'use strict'
const execSync = require('child_process').execSync
const split = require('split-on-first-occurrence')

module.exports = function (cwd) {
  const output = split(execSync('git log -n 1', {cwd}).toString(), '\n\n')

  const info = output[0]
    .split('\n')
    .map(line => split(line, ' '))

  const result = {message: output[1].trim()}
  result.commit = info[0][1]
  result.author = info[1][1].match(/([^<]+)/)[1].trim()
  result.email = info[1][1].match(/<([^>]+)>/)[1]
  result.date = info[2][1].trim()

  return result
}
