/**
 * Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
 */

function sum_even_numbers() {
  var sum = 0;
  for (var i = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum; // 250500
}
