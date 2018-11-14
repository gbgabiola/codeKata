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
  const n = parseInt(readLine(), 10);
  // var n = parseInt(readLine());
  
  // to give an array of 1s
  const binArr = n.toString(2).split('0');
  // if you are not using ES6 the you can also do this
  //    var max = Math.max.apply(null, binArr)
  const max = Math.max(...binArr);
  console.log(max.toString().length);

  // One liner
  // console.log(Math.max.apply(null, n.toString(2).split("0").map(x => x.length)));

  // If you don't know binary
  // console.log(n.toString(2).split('0').sort((a, b) => a < b)[0].length)
}


/*
function main() {
  const n = parseInt(readLine(), 10);
  const binArr = [...n.toString(2)]

  let currentCount = 0
  let consecutiveOnes = 0

  for (let i = 0; i <= binArr.length; i++) {
    // if it's a 1, increment the count, otherwise reset it
    if (binArr[i] === '1') {
      currentCount++
    } else {
      currentCount = 0
    }
    // if we're breaking the record on 1s, save it!
    if (currentCount > consecutiveOnes) {
      consecutiveOnes = currentCount
    }
  }
  console.log(consecutiveOnes)
}
*/


/*
function main() {

  var n = parseInt(readLine());
  var bin = "";
  var currentValue;
  var max = 0;
  var count = 0;

  while (n > 0) {
    currentValue = (n / 2) % 1 === 0 ? "0" : "1";
    if (currentValue === "1") {
      count++;
    } else {
      count = 0;
    }

    if (count > max) {
      max = count;
    }

    bin = currentValue + bin;
    n = Math.floor(n / 2);
  }

  console.log(max);
}
*/