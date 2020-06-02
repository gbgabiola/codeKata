/**
 * Multiple of 100
 *
 * Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
 *
 * Examples:
 * divisible(1) ➞ false
 * divisible(1000) ➞ true
 * divisible(100) ➞ true
 *
 * Note: Don't forget to return the result.
 */

function divisible(num) {
  // return num % 100 === 0 ? true : false; // ternary operator;
  return num % 100 === 0;
}

