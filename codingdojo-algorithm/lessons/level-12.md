# Level 12


```js
var a = 100;

function abc() {
  var a = 25;
}

console.log(a);
```

| Variable | Values |
| :------: | :----: |
|   `a`    | `100`  |

1. **Answer**: `100`

---

```js
var a = 100;

function abc() {
  var a = 25;
}

abc();
console.log(a);
```

| Variable | Values |
| :------: | :----: |
|   `a`    | `100`  |

2. **Answer**: `100`

---

```js
var a = 100;

function abc() {
  var a = 25;
  console.log(a);
}

abc();
console.log(a);
```

| Variable | Values |
| :------: | :----: |
|   `a`    | `100`  |

3. **Answer**: `25, 100`

---

```js
var x = 10;

function abc(x) {
  console.log(x);
  return x * 10;
}

console.log(x);
```

| Variable | Values |
| :------: | :----: |
|   `x`    | `100`  |

4. **Answer**: `10`

---

```js
var x = 10;

function abc(x) {
  console.log(x);
  return x * 10;
}

abc(x);
console.log(x);
```

| Variable | Values |
| :------: | :----: |
|   `x`    | `100`  |

5. **Answer**: `10, 10`

---

```js
var x = 10;

function abc(x) {
  console.log(x);
  return x * 10;
}

var z = abc(x);
console.log(z);
```

| Variable | Values |
| :------: | :----: |
|   `x`    |  `10`  |
|   `z`    | `100`  |

6. **Answer**: `10, 100`

---

```js
var x = 10;

function abc(x) {
  console.log(x);
  return x * 10;
}

var z = abc(x) + abc(x);
console.log(z);
```

| Variable | Values |
| :------: | :----: |
|   `x`    |  `10`  |
|   `z`    | `100`  |

7. **Answer**: `10, 10, 200`

---

```js
var x = 10, y = 20;

function abc(x, y) {
  x = x + 10;
  y = y + 10;
  console.log(x);
  console.log(y);
}
```

| Variable | Values |
| :------: | :----: |
|   `x`    |  `10`  |
|   `y`    |  `20`  |

8. **Answer**: `10, 10, 200`

---

```js
var x = 10, y = 20;

function abc(x, y) {
  x = x + 10;
  y = y + 10;
  console.log(x);
  console.log(y);
}

abc(x, y);
console.log(x);
console.log(y);
```

| Variable | Values |
| :------: | :----: |
|   `x`    |  `10`  |
|   `y`    |  `20`  |

9. **Answer**: `20, 30, 10, 20`

---

```js
var x = 10, y = 20;

function abc(x, y) {
  x = x + 10;
  y = y + 10;
  console.log(x);
  console.log(y);
  return x * 10;
}

z = abc(x, y);
console.log(x);
console.log(y);
console.log(z);
```

| Variable | Values |
| :------: | :----: |
|   `x`    |  `10`  |
|   `y`    |  `20`  |
|   `z`    | `200`  |

10. **Answer**: `20, 30, 10, 20, 200`

---

```js
var x = 10, y = 20;

function abc(x, y) {
  x = x + 10;
  y = y + 10;
  return x * 10;
}

z = abc(x, y) + abc(y, x);
console.log(z);
```

| Variable | Values |
| :------: | :----: |
|   `x`    |  `10`  |
|   `y`    |  `20`  |
|   `z`    | `500`  |

11. **Answer**: `500`

---

```js
var x = [1, 3, 5, 7];

function abc() {
  var x = [0, 1, 2, 3];
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] + 2;
  }
}

abc();
console.log(x);
```

| Variable |     Values     |
| :------: | :------------: |
|   `x`    | `[1, 3, 5, 7]` |

12. **Answer**: `[1, 3, 5, 7]`

---

```js
var x = [1, 3, 5, 7];

function abc() {
  var x = [0, 1, 2, 3];
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] + 2;
  }
  return x;
}

abc();
console.log(x);
```

| Variable |     Values     |
| :------: | :------------: |
|   `x`    | `[1, 3, 5, 7]` |

13. **Answer**: `[1, 3, 5, 7]`

---

```js
var x = [1, 3, 5, 7];

function abc() {
  var x = [0, 1, 2, 3];
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] + 2;
  }
  return x;
}

x = abc();
console.log(x);
```

| Variable |              Values              |
| :------: | :------------------------------: |
|   `x`    | `[1, 3, 5, 7]` -> `[2, 3, 4, 5]` |

14. **Answer**: `[2, 3, 4, 5]`

---

```js
function abc(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}

dojo = abc(5);
console.log(dojo);
```

| Variable |      Values       |
| :------: | :---------------: |
|  `dojo`  | `[0, 1, 2, 3, 4]` |

15. **Answer**: `[0, 1, 2, 3, 4]`

---

```js
function abc(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
}

dojo = abc(5);
console.log(dojo);
```

| Variable |   Values    |
| :------: | :---------: |
|  `dojo`  | `[0, 2, 4]` |

16. **Answer**: `[0, 2, 4]`

---

```js
function abc(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'dojo';
    }
  }
  return arr;
}

output = abc([-3, 0, 3, -5]);
console.log(output);
```

| Variable |          Values          |
| :------: | :----------------------: |
| `output` | `['dojo', 0, 3, 'dojo']` |

17. **Answer**: `['dojo', 0, 3, 'dojo']`

---

```js
function abc(number) {
  var arr = [];
  for (var i = 0; i < number; i++) {
    arr.push(0);
  }
  return arr;
}

output = abc(5);
console.log(output);
```

| Variable |      Values       |
| :------: | :---------------: |
| `output` | `[0, 0, 0, 0, 0]` |

18. **Answer**: `[0, 0, 0, 0, 0]`

---

```js
function abc(number) {
  var sum = 0;
  for (var i = 0; i <= number; i++) {
    sum = sum + i;
  }
  console.log(sum); // 3
  return sum + 10; // 13
}

output = abc(2);
console.log(output);
```

| Variable | Values |
| :------: | :----: |
| `output` |  `13`  |

19. **Answer**: `3, 13`

---

```js
function abc(number) {
  var sum = 0;
  for (var i = 0; i <= number; i++) {
    sum = sum + i;
  }
  console.log(sum); // 3 - 6
  return sum + 10; // 13 - 29
}

output = abc(2) + abc(3);
console.log(output);
```

| Variable | Values |
| :------: | :----: |
| `output` |  `29`  |

20. **Answer**: `3, 6, 29`

---

```js
function looping(x, y) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      console.log(i * j);
    }
  }
  return x * y;
}

z = looping(2, 3);
console.log(z);
```

| Variable | Values |
| :------: | :----: |
|   `z`    |  `6`   |

21. **Answer**: `0, 0, 0, 0, 1, 2, 6`

---
