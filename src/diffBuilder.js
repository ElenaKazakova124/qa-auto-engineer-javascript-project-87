const buildDiff = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 })
  const sortedKeys = keys.sort((a, b) => a.localeCompare(b))
  const diff = []

  for (const key of sortedKeys) {
    if (!(key in obj2)) {
      diff.push({ key, type: 'removed', value: obj1[key] })
    }
    else if (!(key in obj1)) {
      diff.push({ key, type: 'added', value: obj2[key] })
    }
    else if (obj1[key] !== obj2[key]) {
      diff.push({
        key,
        type: 'changed',
        oldValue: obj1[key],
        newValue: obj2[key],
      })
    }
    else {
      diff.push({ key, type: 'unchanged', value: obj1[key] })
    }
  }

  return diff
}

export default buildDiff
