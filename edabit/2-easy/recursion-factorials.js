/**
 * Recursion: Factorials
 *
 * Write a function that calculates the factorial of a number recursively.
 *
 * Examples:
 * factorial(5) ➞ 120
 * factorial(3) ➞ 6
 * factorial(1) ➞ 1
 * factorial(0) ➞ 1
 */

const factorial = n => n <= 0 ? 1 : n * factorial(n - 1);
