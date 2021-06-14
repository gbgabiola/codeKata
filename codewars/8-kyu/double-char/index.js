/*
function doubleChar(string) {
  return string
    .split('')
    .map(char => `${char}${char}`)
    .join('');
}
*/

const doubleChar = str => str.split('').map(char => `${char}${char}`).join('');
