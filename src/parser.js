import { readFileSync } from 'fs';
import path from 'path';

const parsers = {
  '.json': (content) => JSON.parse(content),
};

export const parse = (filepath) => {
  const content = readFileSync(filepath, 'utf-8');
  const ext = path.extname(filepath);
  const parser = parsers[ext];
  
  if (!parser) {
    throw new Error(`Unsupported file format: ${ext}`);
  }

  return parser(content);
};
