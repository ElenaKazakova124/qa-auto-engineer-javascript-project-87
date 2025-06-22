import { readFileSync } from 'fs';
import getParser from './parsers/parserFactory.js';
import buildDiff from './diffBuilder.js';
import format from './formatters/stylish.js';

export default (filepath1, filepath2) => {
  const parse1 = getParser(filepath1);
  const parse2 = getParser(filepath2);
  
  const data1 = parse1(readFileSync(filepath1, 'utf-8'));
  const data2 = parse2(readFileSync(filepath2, 'utf-8'));
  
  return format(buildDiff(data1, data2));
};
