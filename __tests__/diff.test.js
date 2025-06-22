import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('JSON diff', () => {
  const result = genDiff(
    getFixturePath('file1.json'),
    getFixturePath('file2.json')
  );
  expect(result).toMatchSnapshot();
});

test('YAML diff', () => {
  const result = genDiff(
    getFixturePath('file1.yaml'),
    getFixturePath('file2.yaml')
  );
  expect(result).toMatchSnapshot();
});
