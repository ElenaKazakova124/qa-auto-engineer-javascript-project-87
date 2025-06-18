import { readFileSync } from 'fs';
import path from 'path';
import { parse } from './parser.js';
import { buildDiff } from './diffBuilder.js';
import { format } from './formatters/stylish.js';

export const diff = (filepath1, filepath2, formatType = 'stylish') => {
  const getData = (filepath) => {
    const ext = path.extname(filepath);
    const content = readFileSync(path.resolve(filepath), 'utf-8');
    return parse(content, ext);
  };

  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const differences = buildDiff(data1, data2);

  return format(differences, formatType);
};
