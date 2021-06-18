const superSize = num =>
  Number(
    String(num)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );

superSize(69); // 96
superSize(513); // 531
superSize(2017); // 7210
superSize(414); // 441
superSize(608719); // 987610
superSize(123456789); // 987654321
superSize(700000000001); // 710000000000
superSize(666666); // 666666
superSize(2); // 2
