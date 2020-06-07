/**
 * No Conditionals?
 *
 * Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
 *
 * Examples:
 * flip(1) ➞ 0
 * flip(0) ➞ 1
 *
 * Notes:
 * Try completing this challenge without using any:
 * - Conditionals
 * - Ternary operators
 * - Negations
 * - Bit operators
 */

// const flip = y => y ^ 1; // but using bitwise operator
const flip = y => 1 - y;
