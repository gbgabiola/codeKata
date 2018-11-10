const getMaxLessThanK = (n, k) => ((k | (k - 1)) > n) ? (k - 2) : (k - 1);


/*
function getMaxLessThanK(n, k) {
  let max = 0;
  let current = -1;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      current = i & j;
      if (current < k && current > max) {
        max = current;
      }
    }
  }
  return max;
}
*/


/*
function getMaxLessThanK(n, k) {
  let max = 0;
  for (let i = 1; i < k; i++) {
    for (let j = i; j <= n; j++) {
      if ((i != j) && (i & j) > max) {
        max = i & j;
      }
    }
  }
  return max;
}
*/