/**
 * Add up the Numbers from a Single Number
 *
 * Create a function that takes a number as an argument.
 * Add up all the numbers from 1 to the number you passed to the function.
 * For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 *
 * Examples:
 * addUp(4) ➞ 10
 * addUp(13) ➞ 91
 * addUp(600) ➞ 180300
 *
 * Note: Expect any positive number between 1 and 1000.
 */

// const addUp = num => {
//   let sum = 0,
//         i = 1;
//   while (i <= num) {
//     sum += i;
//     i += 1;
//   }
//   return sum;
// };

// const addUp = num => {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) sum += i;
//   return sum;
// };

// const addUp = num => (!num) ? 0 : num + addUp(num - 1);

const addUp = num => (num * (num + 1)) / 2;
