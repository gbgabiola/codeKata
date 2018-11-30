function processData(input) {
  //Enter your code here
  /****** SOLUTION START *******/
  input = input.split("\n");
  let a = input[0].split(" ").map(Number);
  let b = input[1].split(" ").map(Number);
  let actual = new Date(a[2], a[1], a[0]);
  let expected = new Date(b[2], b[1], b[0]);
  let fine = 0

  if (actual <= expected)
    fine = 0;
  else if (a[1] == b[1] && a[2] == b[2])
    fine = 15 * (a[0] - b[0]);
  else if (a[2] == b[2])
    fine = 500 * (a[1] - b[1]);
  else
    fine = 10000;

  console.log(fine);
  /****** SOLUTION END *******/

  /****** SOLUTION 2 START
  input = input.split('\n');
  let actual = input[0].split(' ');
  let expected = input[1].split(' ');
  if ((y = parseInt(actual[2] - expected[2])) > 0)
    console.log(10000);
  else if ((m = parseInt(actual[1] - expected[1])) > 0)
    console.log(m * 500);
  else if ((d = parseInt(actual[0] - expected[0])) > 0)
    console.log(d * 15);
  else
    console.log(0);
  SOLUTION 2 END ******/
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});