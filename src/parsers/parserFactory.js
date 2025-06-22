import parseJson from './jsonParser.js';
import parseYaml from './yamlParser.js';

const getParser = (filepath) => {
  const ext = filepath.slice(filepath.lastIndexOf('.'));
  const parsers = {
    '.json': (content) => parseJson(content, '.json'),
    '.yaml': parseYaml,
    '.yml': parseYaml
  };

  if (!parsers[ext]) {
    throw new Error(`Unsupported format: ${ext}. Use .json, .yaml or .yml`);
  }

  return parsers[ext];
};

export default getParser;
