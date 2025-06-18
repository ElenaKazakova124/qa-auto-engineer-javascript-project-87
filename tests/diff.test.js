import { diff } from '../src/diff.js';
import { readFileSync } from 'fs';

test('flat JSON diff', () => {
  const result = diff('__fixtures__/file1.json', '__fixtures__/file2.json');
  expect(result).toMatchSnapshot();
});

test('identical files', () => {
  const result = diff('__fixtures__/file1.json', '__fixtures__/file1.json');
  expect(result).toBe(readFileSync('__fixtures__/expected-identical.txt', 'utf-8'));
});
