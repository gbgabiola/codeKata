/*
function invert(array) {
  const inverted = [];
  for (let i = 0; i < array.length; i++) inverted.push(-array[i]);
  return inverted;
}
*/

// Short Solution
const invert = array => array.map(num => num ? -num : -num);
