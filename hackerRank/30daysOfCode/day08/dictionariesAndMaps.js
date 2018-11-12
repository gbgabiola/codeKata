function processData(input) {
  //Enter your code here
  input = input.split('\n');
  var N = parseInt(input[0]);

  var phonebook = [];
  for (var k = 0; k < N; k++) {
    var line = input[k + 1];
    line = line.split(' ');
    phonebook[line[0]] = line[1];
  }

  for (var k = N + 1; k < input.length; k++) {
    var num = (phonebook[input[k]]);
    if (num !== undefined) {
      console.log(input[k] + '=' + num);
    } else {
      console.log('Not found');
    }
  }
}


/*
function processData(input) {]
  const inputArr = input.split("\n");
  const n = parseInt(inputArr[0]);
  const phoneBookEntries = inputArr.slice(1, n + 1).map(entry => entry.split(' '));
  const phoneBookQueries = inputArr.slice(n + 1);
  const phoneBook = {};

  // Save the phone book entries
  phoneBookEntries.forEach(entry => {
    const [name, phone] = entry;
    phoneBook[name] = phone;
  })

  // Respond to the queries
  phoneBookQueries.forEach(query => {
    if (phoneBook[query]) {
      console.log(`${query}=${phoneBook[query]}`);
    } else {
      console.log('Not found');
    }
  });
}
*/


/*
function processData(input) {
  input = input.split('\n');
  var phoneBook = [];

  for (i = 1; i <= parseInt(input[0]); i++) {
    var contactArray = input[i].split(' ');
    phoneBook[contactArray[0]] = contactArray[1];
  }

  for (i = (parseInt(input[0]) + 1); i < input.length; i++) {
    if (phoneBook[input[i]]) {
      console.log(input[i] + '=' + phoneBook[input[i]]);
    } else {
      console.log('Not found');
    }
  }
}
*/