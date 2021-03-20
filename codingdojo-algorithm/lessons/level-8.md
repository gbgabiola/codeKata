# Level 8


```js
for (var num1 = 1; num1 <= 3; num1++) {
  for (var num2 = 1; num2 <= 2; num2++) {
    console.log('Dojo');
  }
}
```

| Variable |          Values          |
| :------: | :----------------------: |
|  `num1`  | `1` -> `2` -> `3` -> `4` |
|  `num2`  |    `1` -> `2` -> `3`     |

1. **Answer**: `Dojo, Dojo, Dojo, Dojo, Dojo, Dojo`

---

```js
for (var num1 = 0; num1 <= 3; num1++) {
  for (var num2 = 0; num2 <= 2; num2++) {
    if (num1 == 5) {
      console.log('coder');
    }
  }

  console.log('ninja');
}
```

| Variable |             Values              |
| :------: | :-----------------------------: |
|  `num1`  | `0` -> `1` -> `2` -> `3` -> `4` |
|  `num2`  |    `0` -> `1` -> `2` -> `3`     |

2. **Answer**: `Dojo, Dojo, Dojo, Dojo, Dojo, Dojo`

---

```js
var x = 'coding';
var y = 'dojo';

for (var num1 = 0; num1 <= x.length - 3; num1++) {
  for (var num2 = 0; num2 <= y.length - 4; num2++) {
    console.log(x + y);
  }
}
```

| Variable |             Values              |
| :------: | :-----------------------------: |
|   `x`    |            `coding`             |
|   `y`    |             `dojo`              |
|  `num1`  | `0` -> `1` -> `2` -> `3` -> `4` |
|  `num2`  |           `0` -> `1`            |

3. **Answer**: `codingdojo, codingdojo, codingdojo, codingdojo`

---

```js
var msg1 = 'hello';
var msg2 = 'world!';

for (var num1 = 1; num1 <= msg1.length; num1++) {
  for (var num2 = 1; num2 <= msg2.length; num2++) {
    if (msg1.length == 4) {
      console.log(msg1 + '' + msg2);
    }
  }

  if (num1 != 4) {
    console.log(msg1.length + msg2.length);
  }
}
```

| Variable |                    Values                     |
| :------: | :-------------------------------------------: |
|  `msg1`  |                    `hello`                    |
|  `msg2`  |                   `world!`                    |
|  `num1`  |    `1` -> `2` -> `3` -> `4` -> `5` -> `6`     |
|  `num2`  | `1` -> `2` -> `3` -> `4` -> `5` -> `6` -> `7` |

4. **Answer**: `11, 11, 11, 11`

---

```js
var array = [5, 3, 4, 1];

for (var x = 0; x < array.length; x++) {
  for (var y = array.length - 1; y >= x; y--) {
    if (array[x] > array[y]) {
      var temp = array[y];
      array[y] = array[x];
      array[x] = temp;
    }
  }
}

console.log(array);
```

| Variable |                       Values                       |
| :------: | :------------------------------------------------: |
| `array`  | `[5, 3, 4, 1]` -> `[5, 3, 4, 5]` -> `[1, 3, 4, 5]` |
|   `x`    |          `0` -> `1` -> `2` -> `3` -> `4`           |
|   `y`    |          `3` -> `2` -> `1` -> `0` -> `-1`          |
|  `temp`  |                        `1`                         |

5. **Answer**: `[1, 3, 4, 5]`
