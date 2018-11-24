process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

/****** SOLUTION START ******/
function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);
  // Write Your Code Here

  let numOfSwaps = 0;
  // Go through as many times as the array is long
  for (let i = 0; i < n; i++) {
    // Traverse through the array
    for (let j = 0; j < a.length - 1; j++) {
      // Swap ,if in decreasing order, using destructuring
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]
        numOfSwaps++
      }
    }
    // Stop if no sorting is finished
    if (numOfSwaps === 0) break
  }

  console.log(`Array is sorted in ${numOfSwaps} swaps.`)
  console.log(`First Element: ${a.shift()}`)
  console.log(`Last Element: ${a.pop()}`)
}
/****** SOLUTION END ******/


/*
// Solution 2
function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);
  // Write Your Code Here

  let swapped;
  let numOfSwaps = 0;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
        numOfSwaps++
      }
    }
  } while (swapped);

  console.log('Array is sorted in ' + numOfSwaps + ' swaps.')
  console.log('First Element:', a[0]);
  console.log('Last Element:', a[n - 1]);
}
*/


/*
Solution 3
function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);
  // Write Your Code Here
  var totalSwaps = 0;

  for (var i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    var numberOfSwaps = 0;

    for (var j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(j, j + 1, a);
        numberOfSwaps++;
        totalSwaps++;
      }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log("Array is sorted in " + totalSwaps + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[n - 1]);
}

function swap(x, y, array) {
  var b = array[y];
  array[y] = array[x];
  array[x] = b;
}
*/