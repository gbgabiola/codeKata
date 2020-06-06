/**
 * Repeating Letters
 *
 * Create a function that takes a string and returns a string in which each character is repeated once.
 *
 * Examples:
 * doubleChar("String") ➞ "SSttrriinngg"
 * doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
 * doubleChar("1234!_ ") ➞ "11223344!!__  "
 *
 * Note: All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.
 */

// Using for loop
// const doubleChar = str => {
//   let chars = '';
//   for (let i = 0; i < str.length; i++) {
//     chars += str[i] + str[i];
//   }
//   return chars;
// };

// Using spread operator, map, join, w/ or w/o repeat
// const doubleChar = str => [...str].map(char => char.repeat(2)).join('');

// Using split, map, join, w/ or w/o repeat
const doubleChar = str => str.split('').map(char => char.repeat(2)).join('');
