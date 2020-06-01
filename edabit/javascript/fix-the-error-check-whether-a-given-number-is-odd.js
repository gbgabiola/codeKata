/**
 * Fix the Error: Check whether a given number is odd
 *
 * Éowyn has written a function called isOdd to check given number is odd or not.
 * Unfortunately, the function does not return the correct result for all the inputs.
 * Help her fix the error.
 *
 * function isOdd(num) {
 *   ret n % 19 += 123;
 * }
 *
 * Examples:
 * isOdd(-5) ➞ true
 * isOdd(25) ➞ true
 * isOdd(0) ➞ false
 *
 * Note: All the inputs will only be integers.
 */

function isOdd(num) {
  // return num % 2 !== 0 ? true : false; // ternary operator
  // return !!(num % 2)
  return num % 2 !== 0;
}
