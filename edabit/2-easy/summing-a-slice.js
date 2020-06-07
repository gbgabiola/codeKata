/**
 * Summing a Slice
 *
 * Given an array and an integer n, return the sum of the first n numbers in the array.
 *
 * Examples
 * sliceSum([1, 3, 2], 2) ➞ 4
 * sliceSum([4, 2, 5, 7], 4) ➞ 18
 * sliceSum([3, 6, 2], 0) ➞ 0
 *
 * Note: If n is larger than the length of the array, return the sum of the whole array.
 */

// const sliceSum = (arr, n) => n ? arr.slice(0, n).reduce((acc, cur) => acc + cur) : 0;

const sliceSum = (arr, n) => arr.slice(0, n).reduce((acc, cur) => acc + cur, 0);
