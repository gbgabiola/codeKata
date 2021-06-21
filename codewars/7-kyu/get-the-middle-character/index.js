const getMiddle = s => {
  return s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s.slice(s.length / 2, s.length / 2 + 1);
};

// Test Case
getMiddle('test'); // "es"
getMiddle('testing'); // "t"
getMiddle('middle'); // "dd"
getMiddle('A'); // "A"
