const formatValue = value => {
  if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
    return '[complex value]'
  }
  return typeof value === 'string' ? `'${value}'` : value
}

const formatPlain = diff => {
  const lines = diff.map(item => {
    const { key, type } = item

    switch (type) {
      case 'added':
        return `Property '${key}' was added with value: ${formatValue(item.value)}`
      case 'removed':
        return `Property '${key}' was removed`
      case 'changed':
        return `Property '${key}' was updated. From ${formatValue(item.oldValue)} to ${formatValue(item.newValue)}`
      case 'unchanged':
        return null
      default:
        throw new Error(`Unknown type: ${type}`)
    }
  })

  return lines.filter(Boolean).join('\n')
}

export default formatPlain
