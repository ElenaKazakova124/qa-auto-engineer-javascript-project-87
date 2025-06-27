import path from 'path'
import { fileURLToPath } from 'url'
import genDiff from '../src/index.js'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixture = filename => fs.readFileSync(getFixturePath(filename), 'utf-8').trim()

describe('genDiff', () => {
  const file1Json = getFixturePath('file1.json')
  const file2Json = getFixturePath('file2.json')
  const file1Yaml = getFixturePath('file1.yaml')
  const file2Yaml = getFixturePath('file2.yaml')

  const stylishExpected = readFixture('stylish_result.txt').trim()
  const plainExpected = readFixture('plain_result.txt')
  const jsonExpected = readFixture('json_result.json')

  test.each([
    [file1Json, file2Json, stylishExpected],
    [file1Yaml, file2Yaml, stylishExpected],
  ])('stylish format: %#', (filepath1, filepath2, expected) => {
    const result = genDiff(filepath1, filepath2).trim()
    expect(result).toBe(expected)
  })

  test.each([
    [file1Json, file2Json, plainExpected],
    [file1Yaml, file2Yaml, plainExpected],
  ])('plain format: %#', (filepath1, filepath2, expected) => {
    const result = genDiff(filepath1, filepath2, 'plain')
    expect(result).toBe(expected)
  })

  test.each([
    [file1Json, file2Json, jsonExpected],
    [file1Yaml, file2Yaml, jsonExpected],
  ])('json format: %#', (filepath1, filepath2, expected) => {
    const result = genDiff(filepath1, filepath2, 'json')
    expect(JSON.parse(result)).toEqual(JSON.parse(expected))
  })
})
