/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  return nums.map(n => (n % 2 == 0 ? n * 2 : n * 3));
}



/*
function modifyArray(nums) {
  nums.forEach((number, index) => {
    if (number % 2 === 0) {
      nums[index] *= 2;
    } else {
      nums[index] *= 3;
    }
  });
  return nums;
}
*/


/*
function modifyArray(nums) {
  const func = nums.map(function (num) {

    if (num % 2 == 0) {
      return 2 * num;
    } else {
      return 3 * num;
    }
  });
  return func;
}
*/