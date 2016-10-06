/* global test expect */
const child = require('child_process')
const commit = require('../')

test('main', () => {
  try {
    child.execSync(`
      mkdir -p temp
      cd temp
      touch what
      git init
      git config user.email "you@example.com"
      git config user.name "Your Name"
      git add -A
      git commit -m "let it rock\n\nwow"
    `)
    const latestCommit = commit('temp')
    expect(latestCommit.author).toBe('Your Name')
    expect(latestCommit.email).toBe('you@example.com')
    expect(latestCommit.message).toBe('let it rock\n    \n    wow')
    child.execSync('rm -rf temp')
  } catch (err) {
    child.execSync('rm -rf temp')
    throw err
  }
})
