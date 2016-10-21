var fs = require('fs')
var path = require('path')
var assert = require('assert')
var mdVars = require('..')
var EXAMPLES = {
  'test.md': fs.readFileSync(path.join(__dirname, '/examples/test.md'), 'utf8')
}

describe('md-vars', function () {
  it('should parse test file', function () {
    assert.deepEqual(mdVars(EXAMPLES['test.md']), {
      title: 'Hello',
      subtitle: 'World',
      spaces: 1,
      text: '* A\n* B\n* C'
    })
  })
})
