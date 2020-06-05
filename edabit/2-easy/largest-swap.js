/**
 * Largest Swap
 *
 * Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
 *
 * To illustrate:
 * largestSwap(27) ➞ false
 * largestSwap(43) ➞ true
 *
 * If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27.
 * On the other hand, swapping 43 gives us 34, and 43 > 34.
 *
 * Examples:
 * largestSwap(14) ➞ false
 * largestSwap(53) ➞ true
 * largestSwap(99) ➞ true
 *
 * Note: Numbers with two identical digits (third example) should yield true (you can't do better).
 */

// Using Number, toString, split, reverse. join
// const largestSwap = num => num >= Number(num.toString().split('').reverse().join(''));

const largestSwap = num =>  num / 10 > num % 10;
