import { readFileSync } from 'fs';
import path from 'path';
import getParser from './parsers/parserFactory.js';
import buildDiff from './diffBuilder.js';
import getFormatter from './formatters/formatsFactory.js';

export default (filepath1, filepath2, formatName = 'stylish') => {
  const absPath1 = path.resolve(filepath1);
  const absPath2 = path.resolve(filepath2);

  const parse1 = getParser(absPath1);
  const parse2 = getParser(absPath2);

  const data1 = parse1(readFileSync(absPath1, 'utf-8'));
  const data2 = parse2(readFileSync(absPath2, 'utf-8'));

  const diff = buildDiff(data1, data2);
  const format = getFormatter(formatName);

  return format(diff);
};
