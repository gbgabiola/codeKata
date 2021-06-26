const maxRot = n => {
  let str = n.toString();
  const arr = [str];
  for (let i = 0; i < str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    arr.push([str].join());
  }
  return Math.max(...arr);
};

maxRot(56789); // 68957
maxRot(38458215); // 85821534
maxRot(195881031); // 988103115
maxRot(896219342); // 962193428
maxRot(69418307); // 94183076
