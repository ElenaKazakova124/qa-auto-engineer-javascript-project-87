import stylish from './stylish.js'
import plain from './plain.js'
import json from './json.js'

const formats = {
  stylish,
  plain,
  json,
}

export default (formatName) => {
  const formatter = formats[formatName]
  if (!formatter) {
    throw new Error(`Unknown format: ${formatName}`)
  }
  return formatter
}
