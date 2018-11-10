function processData(input) {
  //Enter your code here
  const cleanInput = input.split("\n").filter(line => isNaN(line))
  // Break each line into even characters and odd characters
  cleanInput.forEach(line => {
      const chars = [...line];
      const evenChars = chars.filter((char, i) => i % 2 === 0).join('');
      const oddChars = chars.filter((char, i) => i % 2 === 1).join('');
      console.log(`${evenChars} ${oddChars}`);
  })
}



/*
function processData(input) {
  const words = input.split('\n').slice(1);
  words.forEach(line => {
    let evenChars = '';
    let oddChars = '';
    for (let i = 0; i < line.length; i++) {
      i % 2 === 0 ? evenChars += line[i] : oddChars += line[i];
    }
    console.log(evenChars, oddChars);
  });
}
*/