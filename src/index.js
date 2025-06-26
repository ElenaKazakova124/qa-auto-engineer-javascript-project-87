import { readFileSync } from 'fs'
import path from 'path'
import getParser from './parsers/parserFactory.js'
import buildDiff from './diffBuilder.js'
import getFormatter from './formatters/formatsFactory.js'

const getFileFormat = (filepath) => {
  const ext = path.extname(filepath).toLowerCase()
  return ext.slice(1)
}

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  return readFileSync(absolutePath, 'utf8')
}

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = readFile(filepath1)
  const data2 = readFile(filepath2)

  const format1 = getFileFormat(filepath1)
  const format2 = getFileFormat(filepath2)

  const parse1 = getParser(format1)
  const obj1 = parse1(data1)

  const parse2 = getParser(format2)
  const obj2 = parse2(data2)

  const diff = buildDiff(obj1, obj2)

  const format = getFormatter(formatName)
  return format(diff)
}

export default genDiff
