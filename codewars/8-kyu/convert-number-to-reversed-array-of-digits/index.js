/*
function digitize(n) {
  return String(n)
    .split('')
    .reverse()
    .map((num) => Number(num));
}
*/

// Short Solution
const digitize = n => Array.from(String(n), (num) => Number(num)).reverse();
