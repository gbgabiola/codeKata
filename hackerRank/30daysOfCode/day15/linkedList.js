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

  this.insert = function (head, data) {
    //complete this method
    let newNode = new Node(data); // Create a new node with the data passed in

    // if the list is empty, return the created node
    if (head === null) {
      head = newNode;
    } else {
      let tempNode = head; // Set the temporary node as the passed in head

      // Otherwise, walk the node list
      while (tempNode.next !== null)
        tempNode = tempNode.next;
      tempNode.next = newNode;
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
  mylist.display(head);
}



// Other solution
/*
this.insert = function (head, data) {
  //complete this method
  // Create a new node with the data passed in
  let newNode = new Node(data);
  

  // If the current node is not null (it has values), walk the node list
  if (head !== null) {
    let tempNode = head; // Set the temporary node as the passed in head

    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
  }
  // Otherwise, if the list is empty, return the created node
  else {
    head = newNode;
  }

  return head;
};
*/