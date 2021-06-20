function getSum(a, b) {
  // return a === b ? a
  //   : a > b ? a + getSum(a - 1, b)
  //   : a + getSum(a + 1, b);

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return (max - min + 1) * (max + min) / 2;
}
