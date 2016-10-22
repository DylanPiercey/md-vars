'use strict'

// Matches variables at the top of a markdown file.
var VAR_REG = /^---([\s\S]*)---/
// Matches the key in a json variable.
var JSON_KEY_REG = /^ *"?([^:"]+)"? */
// Matches new lines in json.
var JSON_NEWLINE_REG = /,? *\n/
// Stores result object.
var _result = {}

/**
 * Parses out custom variables from markdown.
 */
module.exports = function parseMDVars (str) {
  // Parse result text and extract variables.
  str = str.replace(VAR_REG, parseMatchedJSON).trim()

  // Reset global result.
  var result = _result
  _result = {}

  // Save updated text in result.
  result.text = str

  return result
}

/**
 * Parses matched json and stores in global _result.
 */
function parseMatchedJSON (_, data) {
  data = data
    .trim()
    .split(JSON_NEWLINE_REG)
    .map(quoteJSONKey)
    .join(',')

  _result = JSON.parse('{' + data + '}')
  return ''
}

/**
 * Adds quotes around a json key.
 */
function quoteJSONKey (key) {
  return key.replace(JSON_KEY_REG, '"$1"')
}
