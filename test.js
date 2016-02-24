import test from 'ava'
import commit from './'
import child from 'child_process'

test('main', t => {
	try {
		child.execSync(`
			mkdir -p temp
			cd temp
			touch what
			git init
			git config user.email "you@example.com"
	  	git config user.name "Your Name"
			git add -A
			git commit -m "fuck"
		`)
		t.is(commit('temp')[1], 'fuck')
		child.execSync('rm -rf temp')
	} catch (e) {
		child.execSync('rm -rf temp')
		t.fail(e.message)
	}
})
