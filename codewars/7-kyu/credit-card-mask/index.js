/*
// Solution 1:
function maskify(cc) {
  if (cc.length <= 4) return cc;
  return cc
    .split('')
    .map((char, i, arr) => {
      return i < arr.length - 4 ? '#' : char;
    })
    .join('');
}

// Solution 2:
const maskify = cc => cc.replace(/[a-zA-Z0-9](?=([a-zA-Z0-9]{4}))/g, '#');
*/

// Solution 3:
const maskify = cc => cc.replace(/.(?=.{4})/g, '#');

maskify('4556364607935616'); // '############5616'
maskify('1'); // '1'
maskify('11111'); // '#1111'
maskify('Skippy'); // "##ippy"
maskify('Nananananananananananananananana Batman!'); // "####################################man!"
