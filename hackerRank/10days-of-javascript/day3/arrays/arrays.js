/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  const sortedNums = nums.sort((a, b) => a - b);
  const sortedArray = sortedNums.filter((element, index, self) => {
    return index === self.indexOf(element);
  });

  return sortedArray[sortedArray.length - 2];

  // One line solution
  // return Array.from(new Set(nums)).sort(function(a, b){return b - a})[1];
}


/*
function getSecondLargest(nums) {
  // Get the only unique value from numbers
  nums = [...new Set(nums)];

  // Then sort that unique numbers with follow the bigger to lower pattern
  nums.sort((a, b) => a < b);

  // Then return the second element
  return nums[1];
}
*/


/*
// Using ES6 Concept
function getSecondLargest(nums) {
  let unique_arr = [...new Set(nums)];

  unique_arr = unique_arr.sort((a, b) => a - b);

  if (unique_arr.length == 1) {
    return unique_arr[0];
  } else {
    return unique_arr[unique_arr.length - 2];
  }
}
*/


/*
// Other Approach
function getSecondLargest(nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let first = sortedNums[0];
  let second;
  for (let item of sortedNums) {
    if (item > first) {
      second = first;
      first = item;
    }
  }
  return second;
}
*/