/**
 * Return a String as an Integer
 *
 * Create a function that takes a string and returns it as an integer.
 *
 * Examples:
 * stringInt("6") ➞ 6
 * stringInt("1000") ➞ 1000
 * stringInt("12") ➞ 12
 *
 * Note: All numbers will be whole numbers.
 */

function stringInt(str) {
  // return Math.round(str);
  // return +str;
  // return Number(str);
  return parseInt(str);
}
