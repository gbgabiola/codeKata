/**
 * Matchstick Houses
 *
 * This challenge will help you interpret mathematical relationships both algebraically and geometrically.
 *
 * Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step.
 * See step 1, 2 and 3 in the image above.
 *
 * Examples:
 * matchHouses(1) ➞ 6
 * matchHouses(4) ➞ 21
 * matchHouses(87) ➞ 436
 *
 * Notes:
 * Step 0 returns 0 matchsticks.
 * The input (step) will always be a non-negative integer.
 */

// function matchHouses(step) {
//   if (step === 0) {
//     return 0;
//   }
//   return 1 + step * 5;
// }

const matchHouses = step => (step === 0) ? 0 : 1 + step * 5;
