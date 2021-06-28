/*
// Solution 1:
function capitals(word) {
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) arr.push(i);
  }
  return arr;
}
*/

// Solution 2:
const capitals = word => {
  return word
    .split('')
    .map((char, i) => (char === char.toUpperCase() ? i : false))
    .filter(num => Number.isInteger(num));
};

capitals('CodEWaRs'); // [0,3,4,6]
