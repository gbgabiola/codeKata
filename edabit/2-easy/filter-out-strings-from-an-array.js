/**
 * Filter out Strings from an Array
 *
 * Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 * filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Note: Zero is a non-negative integer.
 */

// Using filter, typeof, 'number'
// const filterArray = arr => arr.filter(item => typeof (item) === 'number');

// Using filter, Number.isInteger
const filterArray = arr => arr.filter(item => Number.isInteger(item));
