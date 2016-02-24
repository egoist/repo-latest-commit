'use strict'

var execSync = require('child_process').execSync

module.exports = function (cwd) {
	var command = 'git log --pretty=oneline'
	if (cwd) {
		command = 'cd ' + cwd + ' && ' + command
	}

	var result = execSync(command).toString()
	return result
		.split('\n')[0]
		.split(' ')
}
