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

//Write your code here
class Calculator {
  power(int1, int2) {
    if (int1 < 0 || int2 < 0) {
      throw 'n and p should be non-negative';
    } else {
      return Math.pow(int1, int2);
    }
  }
}

/*
// other solution
function Calculator() {
  Calculator.prototype.power = function (n, p) {
    if (n < 0 || p < 0) {
      throw 'n and p should be non-negative';
      // return ('n and p should be non-negative');
    }
    else {
      return Math.pow(n, p);
    }
  }
}
*/

/*
// another solution
function Calculator() {
  this.power = function (n, p) {
    try {
      if (n < 0 || p < 0) {
        throw 'n and p should be non-negative'
      } else {
        return Math.pow(n, p)
      }
    } catch (e) {
      return e;
    }
  }

}
*/

function main() {
  var myCalculator = new Calculator();
  var T = parseInt(readLine());
  while (T-- > 0) {
    var num = (readLine().split(" "));
    try {
      var n = parseInt(num[0]);
      var p = parseInt(num[1]);
      var ans = myCalculator.power(n, p);
      console.log(ans);
    }
    catch (e) {
      console.log(e);
    }

  }
}