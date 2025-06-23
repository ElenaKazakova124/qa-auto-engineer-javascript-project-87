import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('genDiff', () => {
  const file1Json = getFixturePath('file1.json');
  const file2Json = getFixturePath('file2.json');
  const file1Yaml = getFixturePath('file1.yaml');
  const file2Yaml = getFixturePath('file2.yaml');
  
  test('stylish format', () => {
    const result = genDiff(file1Json, file2Json);
    expect(result).toMatchSnapshot();
  });

  test('plain format', () => {
    const result = genDiff(file1Yaml, file2Yaml, 'plain');
    expect(result).toMatchSnapshot();
  });

  test('json format', () => {
    const result = genDiff(file1Json, file2Json, 'json');
    expect(() => JSON.parse(result)).not.toThrow();
    expect(result).toMatchSnapshot();
  });
});
