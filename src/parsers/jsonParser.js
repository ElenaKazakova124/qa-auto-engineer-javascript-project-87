const parse = (content, ext) => {
  if (ext === '.json') {
    return JSON.parse(content);
  }
  throw new Error(`Unsupported file format: ${ext}`);
};

export default parse;
