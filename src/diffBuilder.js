import { readFileSync } from 'fs';
import path from 'path';

const parseJSON = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const content = readFileSync(absolutePath, 'utf-8');
  return JSON.parse(content);
};

export const diff = (filepath1, filepath2) => {
  const data1 = parseJSON(filepath1);
  const data2 = parseJSON(filepath2);

  const allKeys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])];
  const result = [];

  for (const key of allKeys) {
    if (!(key in data2)) {
      result.push(`- ${key}: ${data1[key]}`);
    } else if (!(key in data1)) {
      result.push(`+ ${key}: ${data2[key]}`);
    } else if (data1[key] !== data2[key]) {
      result.push(`- ${key}: ${data1[key]}`);
      result.push(`+ ${key}: ${data2[key]}`);
    } else {
      result.push(`  ${key}: ${data1[key]}`);
    }
  }

  return `{\n${result.map(line => `  ${line}`).join('\n')}\n}`;
};
