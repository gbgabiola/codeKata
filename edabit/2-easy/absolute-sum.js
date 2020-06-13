/**
 * Absolute Sum
 *
 * Take an array of integers(positive or negative or both) and return the sum of the absolute value of each element.
 *
 * Examples:
 * getAbsSum([2, -1, 4, 8, 10]) ➞ 25
 * getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
 * getAbsSum([2, 4, 6, 8, 10]) ➞ 30
 * getAbsSum([-1]) ➞ 1
 *
 * Note: The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
 */

// const getAbsSum = arr => arr.length === 1 ? Math.abs(arr[0]) : arr.reduce((a, b) => Math.abs(a) + Math.abs(b));

// Using foEach, Math.abs
// const getAbsSum = arr => {
//   let sum = 0;
//   arr.forEach(num => sum += Math.abs(num));
//   return sum;
// };

// Using map, Math.abs, reduce
// const getAbsSum = arr => arr.map(num => Math.abs(num)).reduce((count, num) => count + num);

const getAbsSum = arr => arr.reduce((count, num) => count + Math.abs(num), 0);
