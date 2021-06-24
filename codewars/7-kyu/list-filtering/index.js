/*
// Solution 1:
function filter_list(l) {
  return l.filter(val => typeof val === 'number');
}
*/

// Solution 2:
const filter_list = l => l.filter(Number.isInteger);

filter_list([1, 2, 'a', 'b']); // [1,2]
filter_list([1, 'a', 'b', 0, 15]); // [1,0,15]
filter_list([1, 2, 'aasf', '1', '123', 123]); // [1,2,123]
