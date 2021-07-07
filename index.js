'use strict'
const execSync = require('child_process').execSync
const split = require('split-on-first-occurrence')

module.exports = function (cwd) {
  const output = split(execSync('git log -n 1', {cwd}).toString(), '\n\n')

  const infoObject = {}

  output[0]
    .split('\n')
    .map(line => {
      const data = split(line, ' ')
      infoObject[`${data[0]}`] = data[1]
      return null
    })

  const result = {message: output[1].trim()}
  result.commit = infoObject.commit
  result.author = infoObject['Author:'].match(/([^<]+)/)[1].trim()
  result.email = infoObject['Author:'].match(/<([^>]+)>/)[1]
  result.date = infoObject['Date:'].trim()

  return result
}
