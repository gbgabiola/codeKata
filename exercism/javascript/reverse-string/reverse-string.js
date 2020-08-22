// Using destructuring
export const reverseString = str => [...str].reverse().join('');

// Using split reverse and join
// str.split('').reverse().join('');

// Using ternary and recursion
// str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);

// Using for loop
// let newStr = '';
// for (let i = str.length - 1; i >= 0; i--) newStr += str[i];
// return newStr;
