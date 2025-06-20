const buildDiff = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 });
  const result = {};

  keys.forEach((key) => {
    if (!(key in obj2)) {
      result[`- ${key}`] = obj1[key];
    } else if (!(key in obj1)) {
      result[`+ ${key}`] = obj2[key];
    } else if (obj1[key] !== obj2[key]) {
      result[`- ${key}`] = obj1[key];
      result[`+ ${key}`] = obj2[key];
    } else {
      result[`  ${key}`] = obj1[key];
    }
  });

  return result;
};

export default buildDiff;
