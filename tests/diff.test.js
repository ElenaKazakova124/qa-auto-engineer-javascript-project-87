import genDiff from '../src/index.js';

test('flat JSON diff', () => {
  const result = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');
  expect(result).toMatchSnapshot();
});
