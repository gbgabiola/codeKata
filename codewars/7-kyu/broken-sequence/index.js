function findMissingNumber(sequence){
  if (sequence === '') return 0;
  sequence = sequence.split(' ').map(Number);
  for (let i = 1; i <= sequence.length; i++) {
    if (sequence[i - 1] !== i) return i;
  }
  return 0;
}

findMissingNumber('1 2 3 5'); // 4
findMissingNumber('1 3'); // 2
findMissingNumber('1 5'); // 2
findMissingNumber(''); // 0
findMissingNumber('1 2 3 4 5'); // 0
findMissingNumber('2 3 4 5'); // 1
findMissingNumber('2 6 4 5 3'); // 1
findMissingNumber('2 1 4 3 a'); // 1
