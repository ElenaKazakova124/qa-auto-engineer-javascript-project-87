const formatStylish = (diff) => {
  const lines = Object.entries(diff).map(([key, value]) => {
    const prefix = key.slice(0, 2);
    const cleanKey = key.slice(2);
    
    const formattedValue = typeof value === 'string' ? value : JSON.stringify(value);
    
    return `${prefix} ${cleanKey}: ${formattedValue}`;
  }).sort((a, b) => {
    const keyA = a.split(':')[0].trim();
    const keyB = b.split(':')[0].trim();
    return keyA.localeCompare(keyB);
  });

  return `{\n${lines.map(line => `  ${line}`).join('\n')}\n}`;
};

export default formatStylish;
