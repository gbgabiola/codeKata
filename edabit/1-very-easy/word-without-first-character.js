/**
 * Word Without First Character
 *
 * Create a function that takes a word and returns the new word without including the first character.
 *
 * Examples:
 * newWord("apple") ➞ "pple"
 * newWord("cherry") ➞ "herry"
 * newWord("plum") ➞ "lum"
 *
 * Note: Input is valid word.
 */

// Using substring or substr
// const newWord = txt => txt.substring(1);

// Using slice
const newWord = txt => txt.slice(1);
