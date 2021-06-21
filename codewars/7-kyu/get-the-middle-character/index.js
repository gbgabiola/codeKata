/*
// Solution 1:
function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  }
  return s.slice(s.length / 2, s.length / 2 + 1);
}

// Solution 2:
const getMiddle = s => s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
*/

// Solution 3
const getMiddle = s => s.slice((s.length - 1) / 2, s.length / 2 + 1);

// Test Case
getMiddle('test'); // "es"
getMiddle('testing'); // "t"
getMiddle('middle'); // "dd"
getMiddle('A'); // "A"
