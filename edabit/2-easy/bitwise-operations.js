/**
 * Bitwise Operations
 *
 * A decimal number can be represented as a sequence of bits.To illustrate:
 * 6 = 00000110
 * 23 = 00010111
 *
 * From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR.
 * Using the example above:
 * bitwiseAND(6, 23) ➞ 00000110
 * bitwiseOR(6, 23) ➞ 00010111
 * bitwiseXOR(6, 23) ➞ 00010001
 *
 * Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
 *
 * Examples:
 * bitwiseAND(7, 12) ➞ 4
 * bitwiseOR(7, 12) ➞ 15
 * bitwiseXOR(7, 12) ➞ 11
 *
 * Note: JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.
 */

// function bitwiseAND(n1, n2) {
//   return n1 & n2;
// }
// function bitwiseOR(n1, n2) {
//   return n1 | n2;
// }
// function bitwiseXOR(n1, n2) {
//   return n1 ^ n2;
// }

const bitwiseAND = (n1, n2) => n1 & n2;
const bitwiseOR = (n1, n2) => n1 | n2;
const bitwiseXOR = (n1, n2) => n1 ^ n2;
