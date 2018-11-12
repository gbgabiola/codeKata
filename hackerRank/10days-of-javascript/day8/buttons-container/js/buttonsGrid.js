let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById("btn5");

btn5.onclick = function () {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
}


/*
let btn5 = document.getElementById('btn5');
const arr = [1, 2, 3, 6, 9, 8, 7, 4];
btn5.onclick = function () {
  arr.unshift(arr.pop());
  document.getElementById('btn1').innerHTML = arr[0];
  document.getElementById('btn2').innerHTML = arr[1];
  document.getElementById('btn3').innerHTML = arr[2];
  document.getElementById('btn6').innerHTML = arr[3];
  document.getElementById('btn9').innerHTML = arr[4];
  document.getElementById('btn8').innerHTML = arr[5];
  document.getElementById('btn7').innerHTML = arr[6];
  document.getElementById('btn4').innerHTML = arr[7];
}
*/



/*
// Not Working Properly
// Get the middle btn
const btn5 = document.querySelector('#btn5');
const btnClassId = [1, 2, 3, 6, 9, 8, 7, 4];

// after clicked that button rotate the layout like clockwise
btn5.addEventListener('click', () => {
  // Update the array like clockwise, mean add last element to the first or add element index-1
  btnClassId.unshift(btnClassId.pop());
  for (let i = 1, j = 0; i <= 9; i++, j++) {
    if (i === 5) {
      j--;
      continue;
    }
    document.querySelector(`#btn${i}`).innerText = btnClassId[j];
  }
});
*/