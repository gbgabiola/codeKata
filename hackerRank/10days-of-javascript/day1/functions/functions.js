/*
 * Create the function factorial here
 */
function factorial(n) {
  // if (n > 1) {
  //   return n * factorial(n - 1);
  // } else {
  //   return 1;
  // }

  // conditional ternary operator
  return (n > 1) ? n * factorial(n - 1) : 1;
}