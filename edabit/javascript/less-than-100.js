/**
 * Less Than 100?
 *
 * Given two numbers, return true if the sum of both numbers is less than 100.
 * Otherwise return false.
 *
 * Examples:
 * lessThan100(22, 15) ➞ true // 22 + 15 = 37
 * lessThan100(83, 34) ➞ false // 83 + 34 = 117
 */

function lessThan100(a, b) {
  // return a + b < 100 ? true : false; // ternary operator
  return a + b < 100;
}
