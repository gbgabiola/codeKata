/**
 * Return the Index of the First Vowel
 *
 * Create a function that returns the index of the first vowel in a string.
 *
 * Examples
 * firstVowel("apple") ➞ 0
 * firstVowel("hello") ➞ 1
 * firstVowel("STRAWBERRY") ➞ 3
 * firstVowel("pInEaPPLe") ➞ 1
 *
 * Notes:
 * Input will be single words.
 * Characters in words will be upper or lower case.
 * "y" is not considered a vowel.
 * Input always contains a vowel.
 */

// Using for loop, toLowerCase, includes
const firstVowel = str => {
  const vowels = 'aeiou';
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) return i; // if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' && i < str);
  }
}

// const firstVowel = str => {
  // const vowels = /(a|e|i|o|u)/;
//   const index = str.toLowerCase().search(vowels);
//   if (index > -1) return index;
// }

// Using match or search, Regex
// const firstVowel = str => str.match(/[aeiou]/i).index;
// const firstVowel = str => str.search(/[aeiou]/i);
