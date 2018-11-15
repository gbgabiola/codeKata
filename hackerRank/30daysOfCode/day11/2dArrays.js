'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}



function main() {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ');
    arr[i] = arr[i].map(Number);
  }

  let total = -63;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0, curSum = 0; j < arr[i].length - 2; j++) {
      curSum = arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (curSum > total) total = curSum;
    }
  }
  console.log(total);
}



/*
function main() {
  // transform input into an array of rows, containing the array of column values
  const matrix = inputString.map(row => row.split(' '))
  let hourglassValues = []

  // Loop through matrix rows
  for (let i = 0; i < matrix.length - 2; i++) {
    // loop through matrix columns
    for (let j = 0; j < matrix[0].length - 2; j++) {
      // save the collection of hourglass values
      hourglassValues.push([
        matrix[i][j], matrix[i][j + 1], matrix[i][j + 2],
        matrix[i + 1][j + 1],
        matrix[i + 2][j], matrix[i + 2][j + 1], matrix[i + 2][j + 2]
      ])
    }
  }

  // reduce down to sum values
  const sums = hourglassValues
    .map(hourglass => hourglass
      .reduce((total, num) => total + parseInt(num), 0)
    )

  // print the largest value
  console.log(Math.max(...sums))
}
*/



/*
function main() {
  var arr = [];
  for (var arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }

  var sumArray = [];
  for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < arr[i].length; j++) {
      var singleSum = 0;
      if (arr[i] && arr[i + 1] && arr[i + 2]) {
        if (arr[i][j + 1] != undefined && arr[i][j + 2] != undefined) {
          sumArray.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
        }
      }
    }
  }
  console.log(Math.max.apply(null, sumArray));
}
*/



/*
function main() {
  var arr = [];
  for (var arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }

  var sumarr = [];

  var h = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      sumarr[h] = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
        arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      h++;
    }
  }

  sumarr.sort();

  var max = -99999;
  for (var x = 0; x < 16; x++) {
    if (sumarr[x] > max)
      max = sumarr[x];
  }

  console.log(max);
}
*/



/*
function main() {
  var arr = [];
  for (var arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < -9 || arr[i][j] > 9) {
        return;
      }
    }

  }

  var sum, i, j, a, b, c, d, e, f, g, total;

  for (i = 0; i < arr.length - 2; i++) {
    for (j = 0; j < arr[i].length - 2; j++) {
      a = arr[i][j];
      b = arr[i][j + 1];
      c = arr[i][j + 2];
      d = arr[i + 1][j + 1];
      e = arr[i + 2][j];
      f = arr[i + 2][j + 1];
      g = arr[i + 2][j + 2];

      sum = typeof sum == 'undefined' ? -63 : sum;
      total = a + b + c + d + e + f + g;
      sum = total > sum ? total : sum;
    }
  }

  console.log(sum);
}
*/