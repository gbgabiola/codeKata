var summation = function (num) {
  // Using for loop
  // let sum = 0;
  // for (let i = 0; i <= num; i++) sum += i;
  // return sum;

  // Using recursion
  return (num > 1) ? num + summation(num - 1) : num;
}
