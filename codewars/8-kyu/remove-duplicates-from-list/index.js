/*
function distinct(a) {
  let unique = [];
  a.forEach(num => {
    if (!unique.includes(num)) unique.push(num);
  });
  return unique;
}
*/

const distinct = a => [...new Set(a)];

// Test Case
distinct([1]); // [1]
distinct([1, 2]); // [1,2]
distinct([1, 1, 2]); // [1,2]
