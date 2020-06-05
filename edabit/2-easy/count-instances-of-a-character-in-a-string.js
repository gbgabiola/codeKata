/**
 * Count Instances of a Character in a String
 *
 * Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
 *
 * Examples:
 * charCount("a", "edabit") ➞ 1
 * charCount("c", "Chamber of secrets") ➞ 1
 * charCount("b", "big fat bubble") ➞ 4
 *
 * Note: Your output must be case-sensitive (see second example).
 */

// Using while loop
// const charCount = (myChar, str) => {
//   let count = 0, i = 0;
//   while (i < str.length) {
//     if (str[i] === myChar) count++;
//     i++;
//   }
//   return count
// }

// Using for loop
// const charCount = (myChar, str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === myChar) count++;
//   }
//   return count
// }

// Using split, filter, length
// const charCount = (myChar, str) => str.split('').filter(char => char === myChar).length;

// Using split, length
// const charCount = (char, str) => str.split(char).length - 1;

// Using Spread operator, filter, length
const charCount = (myChar, str) => [...str].filter(char => char === myChar).length;
