const sumArray = array => {
  return Array.isArray(array)
    ? array
        .sort((a, b) => a - b)
        .slice(1, array.length - 1)
        .reduce((a, b) => a + b, 0)
    : 0;
};
