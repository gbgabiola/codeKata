# Level 2


```js
var x = [1, 2, 4];
console.log(x);
```

| Variable |   Values    |
| :------: | :---------: |
|   `x`    | `[1, 2, 4]` |

1. **Answer**: `[1, 2, 4]`

---

```js
var x = [1, 3, 5];
console.log(x[0]);
```

| Variable |   Values    |
| :------: | :---------: |
|   `x`    | `[1, 3, 5]` |

2. **Answer**: `1`

---

```js
var x = [2, 4, 6];
console.log(x[1]);
```

| Variable |   Values    |
| :------: | :---------: |
|   `x`    | `[2, 4, 6]` |

3. **Answer**: `4`

---

```js
var x = [1, 3, 5];
console.log(x[2]);
```

| Variable |   Values    |
| :------: | :---------: |
|   `x`    | `[1, 3, 5]` |

4. **Answer**: `5`

---

```js
var x = [1.3];
console.log(x[0]);
```

| Variable | Values  |
| :------: | :-----: |
|   `x`    | `[1.3]` |

5. **Answer**: `1.3`

---

```js
var x = [1, 2, 4];
x[0] = x[1];
console.log(x);
```

| Variable |           Values           |
| :------: | :------------------------: |
|   `x`    | `[1, 2, 4]` -> `[2, 2, 4]` |

6. **Answer**: `[2, 2, 4]`

---

```js
var x = [1, 3, 5];
var y = x.length;
console.log(y);
```

| Variable |   Values    |
| :------: | :---------: |
|   `x`    | `[1, 3, 5]` |
|   `y`    |     `3`     |

7. **Answer**: `3`

---

```js
var x = [2, 4, 6, 3, 7];
var y = x.length - 2;
console.log(x[y]);
```

| Variable |      Values       |
| :------: | :---------------: |
|   `x`    | `[2, 4, 6, 3, 7]` |
|   `y`    |        `3`        |

8. **Answer**: `3`

---

```js
var x = [2, 4, 6, 3, 7];
var y = x.length;
console.log(x[y - 1]);
```

| Variable |      Values       |
| :------: | :---------------: |
|   `x`    | `[2, 4, 6, 3, 7]` |
|   `y`    |        `5`        |

9. **Answer**: `7`

---

```js
var x = [1, 3, 5, 7];
x[0] = x[x.length - 2];
console.log(x);
```

| Variable |              Values              |
| :------: | :------------------------------: |
|   `x`    | `[1, 3, 5, 7]` -> `[5, 3, 5, 7]` |

10.  **Answer**: `[5, 3, 5, 7]`

---

```js
var x = [1, 3, 5, 7];
x[x.length - 3] = x[x.length / 2 + x.length / 4];
console.log(x);
```

| Variable |              Values              |
| :------: | :------------------------------: |
|   `x`    | `[1, 3, 5, 7]` -> `[1, 7, 5, 7]` |

11.  **Answer**: `[1, 7, 5, 7]`

---

```js
var x = [1, 3, 5, 7];
var y = [2, 4, 6];
x[2] = y[x.length - 3];
console.log(x);
```

| Variable |              Values              |
| :------: | :------------------------------: |
|   `x`    | `[1, 3, 5, 7]` -> `[1, 3, 4, 7]` |

12.  **Answer**: `[1, 3, 4, 7]`

---

```js
var x = [1, 3, 5, 7];
var y = [2, 4, 6];
x[2] = y[x.length - 3] + x[x[0] + y[0]];
console.log(x);
```

| Variable |              Values               |
| :------: | :-------------------------------: |
|   `x`    | `[1, 3, 5, 7]` -> `[1, 3, 11, 7]` |

1.   **Answer**: `[1, 3, 11, 7]`
