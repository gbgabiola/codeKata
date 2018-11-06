/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let consonants = [];

  for (let v of s) {
    (vowels.includes(v)) ? console.log(v): consonants.push(v);
  }
  console.log(consonants.join("\n"));
}
 

/*
function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let consonants = [];

  for (let v of s) {
    if (vowels.includes(v)) {
      console.log(v);
    } else {
      consonants.push(v);
    }
  }
  console.log(consonants.join("\n"));
}
*/



/*
function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let v of s) {
    if (vowels.includes(v))
      console.log(v);
  }

  for (let v of s) {
    if (!vowels.includes(v))
      console.log(v);
  }
}
*/


/*
function vowelsAndConsonants(s) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) > -1) {
      console.log(s[i]);
    }
  }

  for (var j = 0; j < s.length; j++) {
    if (vowels.indexOf(s[j]) < 0) {
      console.log(s[j]);
    }
  }
}
*/


/*
function vowelsAndConsonants(s) {
  let consonants = "";
  for (let i = 0; i < s.length; i++) {
    if (['a', 'e', 'i', 'o', 'u'].includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }
  console.log(consonants);
}
*/


/*
function vowelsAndConsonants(s) {
  // At first print the vowels
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      console.log(char);
    }
  }

  // Print the consonant
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
      console.log(char);
    }
  }
}
*/


/*
function vowelsAndConsonants(s) {
  var letters = [];

  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        console.log(s[i]);
        break;
      default:
        letters.push(s[i]);
    }
  }

  for (var j in letters) {
    console.log(letters[j])
  }
}
*/