const sumTwoSmallestNumbers = numbers => {
  const sortedNums = numbers.sort((a, b) => a - b);
  return sortedNums[0] + sortedNums[1];
};

sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // 13
sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // 6
sumTwoSmallestNumbers([3, 87, 45, 12, 7]); // 10
sumTwoSmallestNumbers([23, 71, 33, 82, 1]); // 24
sumTwoSmallestNumbers([52, 76, 14, 12, 4]); // 16
