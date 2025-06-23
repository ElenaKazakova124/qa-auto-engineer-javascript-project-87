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
  
  const stylishExpected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  const plainExpected = `Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true`;

  test('stylish format (default)', () => {
    const result = genDiff(file1Json, file2Json);
    expect(result).toBe(stylishExpected);
  });

  test('plain format', () => {
    const result = genDiff(file1Yaml, file2Yaml, 'plain');
    expect(result).toBe(plainExpected);
  });

  test('json format', () => {
    const result = genDiff(file1Json, file2Json, 'json');
    expect(() => JSON.parse(result)).not.toThrow();
    
    const parsed = JSON.parse(result);
    expect(parsed).toHaveProperty('- follow', false);
    expect(parsed).toHaveProperty('  host', 'hexlet.io');
    expect(parsed).toHaveProperty('- proxy', '123.234.53.22');
    expect(parsed).toHaveProperty('- timeout', 50);
    expect(parsed).toHaveProperty('+ timeout', 20);
    expect(parsed).toHaveProperty('+ verbose', true);
  });
});