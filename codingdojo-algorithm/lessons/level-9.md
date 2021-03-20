# Level 9


```js
var number = '';
var x = 5;

while (x < 10) {
  number += x;
  x++;
}

console.log(number);
```

| Variable |        Values         |
| :------: | :-------------------: |
| `number` |   `''` -> `'56789'`   |
|   `x`    | `5` -> `6...` -> `10` |

1. **Answer**: `56789`

---

```js
var count = 1;

while (count < 5) {
  console.log('Dojo');
  count++;
}

```

| Variable |        Values        |
| :------: | :------------------: |
| `count`  | `1` -> `2...` -> `5` |

2. **Answer**: `Dojo, Dojo, Dojo, Dojo`

---

```js
var x = 1;
var y = 48;

while (x < 100) {
  if (x == y) {
    break;
  }

  x++;
}

console.log(x);
```

| Variable |        Values         |
| :------: | :-------------------: |
|   `x`    | `1` -> `2...` -> `48` |
|   `y`    |         `48`          |

3. **Answer**: `48`

---

```js
var message = 'Coding';
var x = 1;

while (x < 100) {
  x++;
}

console.log(message);
```

| Variable  |         Values         |
| :-------: | :--------------------: |
| `message` |       `'Coding'`       |
|    `x`    | `1` -> `2...` -> `100` |

4. **Answer**: `Coding`

---

```js
var x = 7;
var message = 'boom';

while (x > message.length) {
  console.log(message + x);
  x--;
}
```

| Variable  |        Values        |
| :-------: | :------------------: |
|    `x`    | `7` -> `6...` -> `4` |
| `message` |       `'boom'`       |

5. **Answer**: `boom7, boom6, boom5`
