const formatStylish = (diff) => {
  const lines = Object.entries(diff)
    .map(([key, value]) => {
      const prefix = key.slice(0, 2);
      const cleanKey = key.slice(2);
      
      let formattedValue = value;
      if (typeof value === 'string') {
        formattedValue = value;
      } else if (value === null) {
        formattedValue = 'null';
      } else if (Array.isArray(value)) {
        formattedValue = '[complex value]';
      } else if (typeof value === 'object') {
        formattedValue = '[complex value]';
      }
      
      return `${prefix} ${cleanKey}: ${formattedValue}`;
    })
    .sort((a, b) => {
      const keyA = a.split(':')[0].slice(2).trim();
      const keyB = b.split(':')[0].slice(2).trim();
      return keyA.localeCompare(keyB);
    });

  return `{\n  ${lines.join('\n  ')}\n}`;
};

export default formatStylish;
