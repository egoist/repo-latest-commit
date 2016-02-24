'use strict'

var execSync = require('child_process').execSync
var splitOnFirstSpace = require('split-on-first-space')

module.exports = function (cwd) {
	var command = 'git log --pretty=oneline'
	var result = execSync(command, {cwd: cwd}).toString()
	return splitOnFirstSpace(result.split('\n')[0])
}
