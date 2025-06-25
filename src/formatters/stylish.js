const formatValue = value => {
  if (value !== null && typeof value === 'object') {
    return '[complex value]'
  }
  return value
}

const formatStylish = diff => {
  const lines = diff.map(item => {
    const { key, type } = item
    const value = formatValue(item.value)
    const oldValue = formatValue(item.oldValue)
    const newValue = formatValue(item.newValue)

    switch (type) {
    case 'added':
      return `  + ${key}: ${value}`
    case 'removed':
      return `  - ${key}: ${value}`
    case 'changed':
      return `  - ${key}: ${oldValue}\n  + ${key}: ${newValue}`
    case 'unchanged':
      return `    ${key}: ${value}`
    default:
      throw new Error(`Unknown type: ${type}`)
    }
  })

  return `{\n${lines.join('\n')}\n}`
}

export default formatStylish
