import test from 'ava'
import commit from './'
import child from 'child_process'

test('main', t => {
	try {
		child.execSync('mkdir -p temp && cd temp && touch what && git init && git add -A && git commit -m "fuck"')
		t.is(commit('temp')[1], 'fuck')
		child.execSync('rm -rf temp')
	} catch (e) {
		child.execSync('rm -rf temp')
		t.fail(e.message)
	}
})
