const formatStylish = (diff) => {
  const lines = Object.entries(diff).map(([key, value]) => {
    const prefix = key.startsWith('  ') ? '  ' : key.slice(0, 1) + ' ';
    const cleanKey = key.slice(2);
    
    let formattedValue = value;
    if (typeof value === 'object' && value !== null) {
      formattedValue = '[complex value]';
    } else if (typeof value === 'string') {
      formattedValue = value;
    }
    
    return `${prefix}${cleanKey}: ${formattedValue}`;
  });

  return `{\n  ${lines.join('\n  ')}\n}`;
};

export default formatStylish;
