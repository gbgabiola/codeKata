/**
 * Football Points
 *
 * Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
 * A win receives 3 points, a draw 1 point and a loss 0 points.
 *
 * Examples:
 * footballPoints(3, 4, 2) ➞ 13
 * footballPoints(5, 0, 2) ➞ 15
 * footballPoints(0, 0, 1) ➞ 0
 *
 * Note: Inputs will be numbers greater than or equal to 0.
 */

function footballPoints(wins, draws, losses) {
  return (wins * 3) + draws;
}
