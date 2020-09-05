/**
 * Requirements:
 *
 * Write a function that accepts an integer and returns a "validation" number. This validation number is calculated by adding all the digits in the input.
 *
 * If the result of this sum has more than a single digit, another iteration is required, repeat the process until a single digit number is calculated.
 */

function calculateValidationNumber(input) {
  if (input == 0) return 0;
  return input % 9 == 0 ? 9 : input % 9;
}

calculateValidationNumber(444444); // Output: 6
calculateValidationNumber(1234); // Output: 1
calculateValidationNumber(23478998); // Output: 5
