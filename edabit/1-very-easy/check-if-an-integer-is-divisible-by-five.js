/**
 * Check if an Integer is Divisible By Five
 *
 * Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
 *
 * Examples:
 * divisibleByFive(5) ➞ true
 * divisibleByFive(-55) ➞ true
 * divisibleByFive(37) ➞ false
 *
 * Note: Don't forget to return the result.
 */

function divisibleByFive(n) {
	// return n % 5 == 0 ? true : false; // ternary operator
	return n % 5 == 0;
}
