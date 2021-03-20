/**
 * Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
 */

function maxMinAvg(arr) {
  var max = 0;
  var min = 0;
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
  }

  var avg = sum / arr.length;
  var arrnew = [max, min, avg];
  return arrnew;
}
