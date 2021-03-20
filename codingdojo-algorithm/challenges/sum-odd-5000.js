/**
 * Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
 */

function sum_odd_5000() {
  var sum = 0;
  for (var i = 0; i <= 5000; i++) {
    if (i % 2 === 1) {
      sum += i;
    }
  }

  return sum; // 6250000
}
