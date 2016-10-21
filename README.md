<h1 align="center">
  MD Vars
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/md-vars">
    <img src="https://img.shields.io/npm/v/md-vars.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/md-vars">
    <img src="https://img.shields.io/npm/dm/md-vars.svg?style=flat-square" alt="Downloads"/>
  </a>
</h1>

Utility to parse variables at the top of a markdown file.

## Installation

#### Npm
```bash
npm install md-vars
```

## Example

```javascript
import parse from 'md-vars'

const markdown = `
---
title: "Hello"
"subtitle": "World",
  spaces: 1
---

* A
* B
* C
`

// Will extract the variables from the top of the file as JSONish.
parse(markdown) /*
{
  title: 'Hello',
  subtitle: 'World',
  spaces: 1,
  text: '* A\n* B\n* C'
}
*/
```
### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
