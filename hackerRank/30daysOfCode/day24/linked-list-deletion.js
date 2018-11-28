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

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {

  /****** SOLUTION START ******/
  this.removeDuplicates = function (head) {
    //Write your code here
    if (head == null)
      return head;
    var node = head;
    while (node.next != null) {
      if (node.data == node.next.data)
        node.next = node.next.next;
      else
        node = node.next;
    }
    return head;

    /*
    // Solution 2 START
    var node = head;
    while (node) {
      var next = node.next;
      if (next && node.data == next.data) {
        node.next = next.next;
      } else {
        node = node.next;
      }
    }
    return head;
    // SOLUTION 2 END
    */
  }
  /****** SOLUTION END ******/

  this.insert = function (head, data) {
    var p = new Node(data);
    if (head == null) {
      head = p;
    } else if (head.next == null) {
      head.next = p;
    } else {
      var start = head;
      while (start.next != null) {
        start = start.next;
      }
      start.next = p;
    }
    return head;

  };

  this.display = function (head) {
    var start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}

function main() {
  var T = parseInt(readLine());
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < T; i++) {
    var data = parseInt(readLine());
    head = mylist.insert(head, data);
  }
  head = mylist.removeDuplicates(head);
  mylist.display(head);
}