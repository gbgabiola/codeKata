function processData(input) {
  //Enter your code here
  /****** SOLUTION START ******/
  let result = input.split("\n").slice(1).map(isPrime);

  function isPrime(input, i) {
    let messageArray = ["Not prime", "Prime"];
    if (input == 1) {
      return messageArray[0];
    }
    if (input == 2) {
      return messageArray[1];
    }
    if (input % 2 === 0) {
      return messageArray[0];
    }
    for (i = 3; i <= Math.sqrt(input); i += 2) {
      if (input % i === 0) {
        return messageArray[0];
      }
    }
    return messageArray[1];
  }
  console.log(result.join("\n"));

  /*
  // Solution 2 START
  function checkPrime(num) {
    if (num === 1)
      return false;
    for (var i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

  input = input.split('\n');
  for (var i = 1; i <= parseInt(input[0]); i++) {
    if (checkPrime(parseInt(input[i])))
      console.log('Prime');
    else
      console.log('Not prime');
  }
  // Solution 2 END
  */
  
} /****** SOLUTION START ******/

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});