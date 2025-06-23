import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('genDiff', () => {
  test('stylish format (default)', () => {
    const result = genDiff(
      getFixturePath('file1.json'),
      getFixturePath('file2.json')
    );
    expect(result).toMatchSnapshot();
  });

  test('plain format', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    const result = genDiff(file1, file2, 'plain');
    
    const expectedLines = [
      "Property 'follow' was removed",
      "Property 'proxy' was removed",
      "Property 'timeout' was updated. From 50 to 20",
      "Property 'verbose' was added with value: true"
    ];
    
    expectedLines.forEach(line => {
      expect(result).toContain(line);
    });
    
    const resultLines = result.split('\n');
    expect(resultLines).toHaveLength(expectedLines.length);
  });
  
});
