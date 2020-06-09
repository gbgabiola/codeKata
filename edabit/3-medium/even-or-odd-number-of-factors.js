/**
 * Even or Odd Number of Factors
 *
 * Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.
 *
 * Examples:
 * factorGroup(33) ➞ "even"
 * factorGroup(36) ➞ "odd"
 * factorGroup(7) ➞ "even"
 *
 * Notes:
 * You don't need to actually calculate the factors to solve this problem.
 * Think about why a number would have an odd number of factors.
 */

// const factorGroup = num => Number.isInteger(Math.sqrt(num)) % 2 === 0 ? 'even' : 'odd';

const factorGroup = num => (Number.isInteger(Math.sqrt(num)) ? 'odd' : 'even');
