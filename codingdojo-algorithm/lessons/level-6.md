# Level 6


```js
function a() {
  console.log(5);
}

a();
```

1. **Answer**: `5`

---

```js
function a() {
  console.log(55);
}
```

2. **Answer**: 

---

```js
a();

function a() {
  console.log(25);
}
```

3. **Answer**: `25`

---

```js
function a() {
  var b = 25;
  b = b + 10;
  console.log(b);
}

a();
```


| Variable |    Values    |
| :------: | :----------: |
|   `b`    | `25` -> `35` |

4. **Answer**: `35`

---

```js
function a(b, c) {
  console.log(b);
  console.log(c);
}

a(3, 5);
```

| Variable | Values |
| :------: | :----: |
|   `b`    |  `3`   |
|   `c`    |  `5`   |

5. **Answer**: `3, 5`

---

```js
function a(b, c) {
  return b + c;
}

console.log(a(3, 5));
```

| Variable | Values |
| :------: | :----: |
|   `b`    |  `3`   |
|   `c`    |  `5`   |

6. **Answer**: `8`

---

```js
function a(b, c) {
  return b * c;
}

console.log(a(3, 5));
```

| Variable | Values |
| :------: | :----: |
|   `b`    |  `3`   |
|   `c`    |  `5`   |

7. **Answer**: `15`

---

```js
function a(b, c) {
  return b * 3 - c;
}

console.log(a(3, 2));
console.log(a(1, 1));
```

| Variable |  Values  |
| :------: | :------: |
|   `b`    | `3`, `1` |
|   `c`    | `2`, `1` |

8. **Answer**: `7, 2`

---

```js
function a(b, c) {
  return b + c;
}

console.log(a(1, 1) + a(2, 2));
```

| Variable |  Values  |
| :------: | :------: |
|   `b`    | `1`, `2` |
|   `c`    | `1`, `2` |

9. **Answer**: `6`

---

```js
function a(b, c) {
  return b + c;
}

console.log(a(1, a(2, 3)));
```

| Variable |  Values  |
| :------: | :------: |
|   `b`    | `1`, `2` |
|   `c`    |   `3`    |

10. **Answer**: `6`

---

```js
function a(b, c) {
  return b + c;
}

console.log(a(a(1, 2), a(2, 3)));
```

| Variable |  Values  |
| :------: | :------: |
|   `b`    | `1`, `2` |
|   `c`    | `2`, `3` |

11. **Answer**: `8`

---

```js
function a(b, c) {
  return b + c;
}

console.log(a(a(1, 2), a(2, a(1, 2))));
```

| Variable |    Values     |
| :------: | :-----------: |
|   `b`    | `1`, `2`, `1` |
|   `c`    |   `2`, `2`    |

12. **Answer**: `8`

---

```js
function a(b, c) {
  console.log(b);
  return b + c;
}

console.log(a(3, 2));
```

| Variable | Values |
| :------: | :----: |
|   `b`    |  `3`   |
|   `c`    |  `2`   |

13. **Answer**: `3, 5`

---

```js
function a(b, c) {
  console.log(b);
  return b - c;
}

console.log(a(3, 2));
```

| Variable | Values |
| :------: | :----: |
|   `b`    |  `3`   |
|   `c`    |  `2`   |

14. **Answer**: `2, 1`

---

```js
function a() {
  return 25;
  return 50;
}

console.log(a());
```

| Variable | Values |
| :------: | :----: |
|   `b`    |  `3`   |
|   `c`    |  `2`   |

15. **Answer**: `25`

---

```js
function a(b, c) {
  return 25;
  return b + c;
}

console.log(a(3, 2));
```

| Variable | Values |
| :------: | :----: |
|   `b`    |  `3`   |
|   `c`    |  `2`   |

16. **Answer**: `25`

---

```js
function a(b, c) {
  return b + c;
}

console.log(a(a(2, 3), a(1, 1)));
```

| Variable |  Values  |
| :------: | :------: |
|   `b`    | `2`, `1` |
|   `c`    | `3`, `1` |

17. **Answer**: `7`

---

```js
function a(b, c) {
  return b + c;
}

console.log(a(a(2, 3), a(1, 1)));
```

| Variable |  Values  |
| :------: | :------: |
|   `b`    | `2`, `1` |
|   `c`    | `3`, `1` |

17. **Answer**: `7`

---

```js
function a(b, c) {
  return 0;
}

console.log(a(a(2, 3), a(1, 1)));
```

| Variable |  Values  |
| :------: | :------: |
|   `b`    | `2`, `1` |
|   `c`    | `3`, `1` |

18. **Answer**: `0`
