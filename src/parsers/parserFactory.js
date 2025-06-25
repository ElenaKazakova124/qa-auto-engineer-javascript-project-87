import jsonParser from './jsonParser.js'
import yamlParser from './yamlParser.js'

const getParser = ext => {
  switch (ext) {
    case 'json':
      return jsonParser
    case 'yaml':
    case 'yml':
      return yamlParser
    default:
      throw new Error(`Unsupported file format: ${ext}`)
  }
}

export default getParser
