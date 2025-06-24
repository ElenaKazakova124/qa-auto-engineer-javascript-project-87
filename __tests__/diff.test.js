import { fileURLToPath } from 'url'
import path from 'path'
import genDiff from '../src/index.js'

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const getFixturePath = filename => path.join(currentDir, '..', '__fixtures__', filename)

describe('genDiff', () => {
  const file1Json = getFixturePath('file1.json')
  const file2Json = getFixturePath('file2.json')
  const file1Yaml = getFixturePath('file1.yaml')
  const file2Yaml = getFixturePath('file2.yaml')

  const stylishExpected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

  const plainExpected = `Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true`

  test('stylish format (default)', () => {
    const result = genDiff(file1Json, file2Json)
    expect(result).toBe(stylishExpected)
  })

  test('plain format', () => {
    const result = genDiff(file1Yaml, file2Yaml, 'plain')
    expect(result).toBe(plainExpected)
  })

  test('json format', () => {
    const result = genDiff(file1Json, file2Json, 'json')
    expect(() => JSON.parse(result)).not.toThrow()
    
    const parsed = JSON.parse(result)
    
    expect(parsed).toEqual(expect.arrayContaining([
      expect.objectContaining({
        key: 'follow',
        type: 'removed',
        value: false,
      }),
      expect.objectContaining({
        key: 'host',
        type: 'unchanged',
        value: 'hexlet.io',
      }),
      expect.objectContaining({
        key: 'proxy',
        type: 'removed',
        value: '123.234.53.22',
      }),
      expect.objectContaining({
        key: 'timeout',
        type: 'changed',
        oldValue: 50,
        newValue: 20,
      }),
      expect.objectContaining({
        key: 'verbose',
        type: 'added',
        value: true,
      }),
    ]))
  })
})

