'use strict'

var execSync = require('child_process').execSync

module.exports = function (cwd) {
	var command = 'git log --pretty=oneline'
	var result = execSync(command, { cwd: cwd }).toString()
	return result
		.split('\n')[0]
		.split(' ')
}
