const formatStylish = diff => {
  const lines = diff.map(item => {
    const { key, type, value, oldValue, newValue } = item
    
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
