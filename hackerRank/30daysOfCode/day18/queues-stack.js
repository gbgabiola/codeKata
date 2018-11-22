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


/****** SOLUTION START ******/
function Solution() {
  //Write your code here
  this.stack = [];
  this.queue = [];
  
  // Solution 1
  this.pushCharacter = this.stack.push;
  this.popCharacter = this.stack.pop;
  this.enqueueCharacter = this.queue.push;
  this.dequeueCharacter = this.queue.shift;

  // Solution 2
  // Solution.prototype.pushCharacter = function (ch) { this.stack.push(ch); }
  // Solution.prototype.enqueueCharacter = function (ch) { this.queue.push(ch); }
  // Solution.prototype.popCharacter = function () { return this.stack.pop(); }
  // Solution.prototype.dequeueCharacter = function () { return this.queue.shift(); }
}

/*
// Solution 3 - Using Class
class Solution {
  constructor(stack = [], queue = []) {
    this.stack = stack
    this.queue = queue
  }

  pushCharacter(char) {
    this.stack.push(char)
  }

  popCharacter() {
    return this.stack.pop()
  }

  enqueueCharacter(char) {
    this.queue.push(char)
  }

  dequeueCharacter() {
    return this.queue.shift()
  }
}
*/

/****** SOLUTION END ******/


function main() {
  // read the string s
  var s = readLine();
  var len = s.length;
  // create the Solution class object p
  var obj = new Solution();
  //push/enqueue all the characters of string s to stack
  for (var i = 0; i < len; i++) {
    obj.pushCharacter(s.charAt(i));
    obj.enqueueCharacter(s.charAt(i));
  }

  var isPalindrome = true;
  /*
  pop the top character from stack
  dequeue the first character from queue
  compare both the characters*/

  for (var i = 0; i < len / 2; i++) {
    if (obj.popCharacter() != obj.dequeueCharacter()) {
      isPalindrome = false;
      break;
    }
  }
  //finally print whether string s is palindrome or not

  if (isPalindrome)
    console.log("The word, " + s + ", is a palindrome.");
  else
    console.log("The word, " + s + ", is not a palindrome.");
}