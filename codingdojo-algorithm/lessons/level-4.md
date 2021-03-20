# Level 4


```js
var counter = 1;

if (counter == 1) {
  console.log('hello');
}
```

| Variable  | Values |
| :-------: | :----: |
| `counter` |  `1`   |

1. **Answer**: `hello`

---

```js
var counter = 1;

if (counter == 1) {
  console.log('hello');
} else if (counter ==2) {
  console.log('world');
}
```

| Variable  | Values |
| :-------: | :----: |
| `counter` |  `1`   |

2. **Answer**: `world`

---

```js
var counter = 1;

if (counter < 10) {
  console.log('less than 10');
} else {
  console.log('greater than or equal to 10');
}
```

| Variable  | Values |
| :-------: | :----: |
| `counter` |  `2`   |

3. **Answer**: `less than 10`

---

```js
var counter = 1;

if (counter == 5) {
  console.log('coding');
} else {
  console.log('dojo');
}
```

| Variable  | Values |
| :-------: | :----: |
| `counter` |  `1`   |

4. **Answer**: `dojo`

---

```js
var x = [2, 4, 5];
var counter = 0;

if (x[counter] < 5) {
  console.log('coding');
} else {
  console.log('dojo');
}
```

| Variable  |   Values    |
| :-------: | :---------: |
|    `x`    | `[2, 4, 5]` |
| `counter` |     `0`     |

5. **Answer**: `coding`

---

```js
var x = [2, 4, 5];
var counter = 2;

if (x[counter] > 10) {
  console.log('coding');
} else {
  console.log('dojo');
}
```

| Variable  |   Values    |
| :-------: | :---------: |
|    `x`    | `[2, 4, 5]` |
| `counter` |     `2`     |

6. **Answer**: `dojo`

---

```js
var x = [2, 4, 5];
var counter = 0;

if (x[counter] > 0) {
  console.log('coding');
  counter = counter + 1;
}

console.log(x[counter]);
```

| Variable  |   Values    |
| :-------: | :---------: |
|    `x`    | `[2, 4, 5]` |
| `counter` | `0` -> `1`  |

7. **Answer**: `coding, 4`

---

```js
var x = [2, 4, 5];
var counter = 0;

if (x[counter] > 0) {
  console.log('coding');
  counter = counter + 1;
}

if (x[counter] > 0) {
  console.log('coding');
  counter = counter + 1;
}

if (x[counter] > 0) {
  console.log('coding');
  counter = counter + 1;
}

console.log(x);
console.log(counter);
```

| Variable  |   Values    |
| :-------: | :---------: |
|    `x`    | `[2, 4, 5]` |
| `counter` | `0` -> `3`  |

8. **Answer**: `coding, coding, coding, [2, 4, 5], 3`
