const isSquare = num => Number.isInteger(Math.sqrt(num));

const squareOrSquareRoot = array => array.map(num => isSquare(num) ? Math.sqrt(num) : num * num);
