/**
 * Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
 */

function squareVal(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }

  return arr;
}
