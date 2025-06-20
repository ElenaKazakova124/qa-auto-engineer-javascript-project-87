const format = (diff) => {
  const lines = Object.entries(diff).map(([key, value]) => {
    const prefix = key.slice(0, 2);
    const cleanKey = key.slice(2);
    return `${prefix} ${cleanKey}: ${JSON.stringify(value)}`;
  });
  return `{\n  ${lines.join('\n  ')}\n}`;
};

export default format;
