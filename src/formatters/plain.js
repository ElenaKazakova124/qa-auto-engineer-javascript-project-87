const formatValue = (value) => {
    if (typeof value === 'object' && value !== null) {
      return '[complex value]';
    }
    return typeof value === 'string' ? `'${value}'` : String(value);
  };
  
  const formatPlain = (diff) => {
    const lines = [];
    const processedKeys = new Set();
  
    Object.entries(diff).forEach(([key, value]) => {
      const cleanKey = key.slice(2);
      if (key.startsWith('- ') && !(`+ ${cleanKey}` in diff)) {
        lines.push(`Property '${cleanKey}' was removed`);
        processedKeys.add(cleanKey);
      }
    });
  
    Object.entries(diff).forEach(([key, value]) => {
      const cleanKey = key.slice(2);
      
      if (processedKeys.has(cleanKey)) return;
      
      if (key.startsWith('+ ') && !(`- ${cleanKey}` in diff)) {
        lines.push(`Property '${cleanKey}' was added with value: ${formatValue(value)}`);
      } else if (key.startsWith('- ') && (`+ ${cleanKey}` in diff)) {
        lines.push(`Property '${cleanKey}' was updated. From ${formatValue(value)} to ${formatValue(diff[`+ ${cleanKey}`])}`);
      }
    });
  
    return lines.join('\n');
  };
  
  export default formatPlain;
  