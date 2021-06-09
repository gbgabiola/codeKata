/*
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i + 1];
    }
  }
  return null;
}
*/

const firstNonConsecutive = arr => {
  const result = arr.find((num, idx) => num !== idx + arr[0]);
  return Number.isInteger(result) ? result : null;
};
