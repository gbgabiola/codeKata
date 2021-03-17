# Level 7


```js
for (var i = 1; i < 100; i++) {
  if (i == 10) {
    break;
  }

  console.log(i);
}
```

| Variable |                               Values                                |
| :------: | :-----------------------------------------------------------------: |
|   `i`    | `1` -> `2` -> `3` -> `4` -> `5` -> `6` -> `7` -> `8` -> `9` -> `10` |

1. **Answer**: `1, 2, 3, 4, 5, 6, 7, 8, 9`

---

```js
for (var i = 13; i <= 20; i++) {
  if (i == 50) {
    break;
  }

  console.log(i);
}
```

| Variable |                                Values                                |
| :------: | :------------------------------------------------------------------: |
|   `i`    | `13` -> `14` -> `15` -> `16` -> `17` -> `18` -> `19` -> `20` -> `21` |

2. **Answer**: `13, 14, 15, 16, 17, 18, 19, 20`

---

```js
for (var i = 1; i <= 20; i++) {
  if (i > 5) {
    break;
  } else {
    console.log('hello');
  }
}
```

| Variable |                 Values                 |
| :------: | :------------------------------------: |
|   `i`    | `1` -> `2` -> `3` -> `4` -> `5` -> `6` |

3. **Answer**: `hello, hello, hello, hello, hello`

---

```js
for (var i = 9; i <= 20; i++) {
  if (i == 10) {
    break;
  } else {
    console.log('hello');
  }

  console.log(i);
}
```

| Variable |   Values    |
| :------: | :---------: |
|   `i`    | `9` -> `10` |

4. **Answer**: `hello, 9`

---

```js
var message = 'CodingDojo';

for (var i = 5; i <= 20; i++) {
  if (i == message.length) {
    break;
  }

  console.log(i);
}
```

| Variable |             Values              |
| :------: | :-----------------------------: |
|   `i`    | `5` -> `6` -> `7` -> `8` -> `9` |

5. **Answer**: `5, 6, 7, 8, 9`
