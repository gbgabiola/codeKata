/*
function findMultiples(integer, limit) {
  const multiples = [];
  for (let i = 1; i <= limit; i++) {
    if (integer * i <= limit) multiples.push(integer * i);
  }
  return multiples;
}
*/

const findMultiples = (integer, limit) => {
  const multiples = [];
  for (let i = integer; i <= limit; i += integer) multiples.push(i);
  return multiples;
};
