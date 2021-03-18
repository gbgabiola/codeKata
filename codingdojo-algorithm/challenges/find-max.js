/**
 * Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
 */

function findMax(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
