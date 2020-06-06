/**
 * Factorial of a Positive Integer
 *
 * Write a function that takes a positive integer and return its factorial.
 *
 * Examples:
 * factorial(4) ➞ 24
 * factorial(0) ➞ 1
 * factorial(9) ➞ 362880
 *
 * Notes:
 * The factorial of 0 is 1.
 * The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).
 */

// Using recursion
// const factorial = z => z <= 0 ? 1 : z * factorial(z - 1);

// Using for loop
const factorial = z => {
  let product = 1;
  for (let i = 2; i <= z; i++) product *= i;
  return product;
};
