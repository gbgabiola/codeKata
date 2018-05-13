function array2D(arr) {
  let [sum, index] = [[], 0];
  for (let i = 1; i + 1 < arr.length; i++) {
    for (let j = 1; j + 1 < arr[j].length; j++) {
      sum[index++] =
        arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] +
                            arr[i][j] +
        arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
    }
  }
  return Math.max(...sum);
}