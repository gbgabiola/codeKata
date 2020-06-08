/**
 * How Many Vowels?
 *
 * Create a function that takes a string and returns the number (count) of vowels contained within it.
 *
 * Examples:
 * countVowels("Celebration") ➞ 5
 * countVowels("Palm") ➞ 1
 * countVowels("Prediction") ➞ 4
 *
 * Notes:
 * a, e, i, o, u are considered vowels (not y).
 * All test cases are one word and only contain letters.
 */

// Using for loop, indexOf or includes
// const countVowels = str => {
//   const vowels = 'aeiou';
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.indexOf(str[i].toLowerCase()) !== -1) count++;
//     // if (['a', 'e', 'i', 'o', 'u'].includes(str[i])) count++;
//   }
//   return count;
// }

// Using match, length, Regex
// const countVowels = str => str.match(/[aeiou]/g).length;

// Using split, filter, indexOf or includes
// const countVowels = str => str.split('').filter(char => 'aeiou'.indexOf(char.toLowerCase()) !== -1).length;
const countVowels = str => str.split('').filter(char => 'aeiou'.includes(char.toLowerCase())).length;
