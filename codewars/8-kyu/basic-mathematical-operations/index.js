/*
function basicOp(operation, value1, value2) {
  //   return eval(value1 + operation + value2);
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
}
*/

// Short Solution
const basicOp = (operation, value1, value2) => eval(value1 + operation + value2);
