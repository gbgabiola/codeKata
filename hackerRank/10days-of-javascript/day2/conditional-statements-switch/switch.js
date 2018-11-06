function getLetter(s) {
  let letter;
  // Write your code here
  switch (s.charAt(0)) {
    case 'a':
      letter = 'A';
      break;
    case 'b':
      letter = 'B';
      break;
    case 'h':
      letter = 'C';
      break;
    default:
      letter = 'D';
  }

  return letter;
}


/*
switch (true) {
  case 'aeiou'.includes(s[0]):
    letter = 'A';
    break;
  case 'bcdfg'.includes(s[0]):
    letter = 'B';
    break;
  case 'hjklm'.includes(s[0]):
    letter = 'C';
    break;
  case 'npqrstvwxyz'.includes(s[0]):
    letter = 'D';
    break;
}
return letter;
*/