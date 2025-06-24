import parseJson from './jsonParser.js';
import parseYaml from './yamlParser.js';

const getParser = (filepath) => {
  const ext = filepath.slice(filepath.lastIndexOf('.')).toLowerCase();

  if (ext === '.json') {
    return parseJson;
  }

  if (ext === '.yaml' || ext === '.yml') {
    return parseYaml;
  }

  throw new Error(`Unsupported file format: ${ext}`);
};

export default getParser;
