// eslint-disable-next-line object-curly-newline
import { describe, it, except, run } from 'https://raw.githubusercontent.com/hopeJRD/bootstrap-js/main/test/test.js'

describe('test imports', () => {
	it('importing', () => {
		expect(typeof expect).toEqual('function')
		expect(typeof nope).toEqual('undefined')
	})
})

run()