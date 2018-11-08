/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    return this.sides.reduce((res, elem) => (res += elem));
  }
}


 /*
function Polygon(sideLengths) {
  this.sideLengths = sideLengths;
  this.perimeter = function () {
    return this.sideLengths.reduce((a, b) => a + b, 0);
  };
}
*/