# Level 11


```js
var x = [];
x[0] = 'Hello';
x[1] = 'World';
x[2] = 100;
console.log(x.length + '' + x[0]);
```

| Variable |              Values               |
| :------: | :-------------------------------: |
|   `x`    | `[]` -> `['Hello', 'World', 100]` |

1. **Answer**: `3 Hello`

---

```js
var x = 2;
var points = [40, 100, 1, 5, 25, 10];

if (points[x] == 1) {
  console.log(points[x - 2]);
} else {
  console.log('hello');
}
```

| Variable |          Values           |
| :------: | :-----------------------: |
|   `x`    |            `2`            |
| `points` | `[40, 100, 1, 5, 25, 10]` |

2. **Answer**: `40`

---

```js
var x = 2;
var y = [1, 2, 3, 4, 5];
var z = [6, 7, 8, 9, 10];

if (y[x] + z[1] == z[4]) {
  console.log('Dojo');
} else {
  console.log('Hello World');
}
```

| Variable |       Values       |
| :------: | :----------------: |
|   `x`    |        `2`         |
|   `y`    | `[1, 2, 3, 4, 5]`  |
|   `z`    | `[6, 7, 8, 9, 10]` |

3. **Answer**: `Dojo`

---

```js
var x = 'boom';
var y = ['hi', 'hello', 'hey'];

if (x.length == 3) {
  y.push(x);
  console.log(x[3]);
} else {
  console.log(x);
}
```

| Variable |          Values          |
| :------: | :----------------------: |
|   `x`    |         `'boom'`         |
|   `y`    | `['hi', 'hello', 'hey']` |

4. **Answer**: `boom`

---

```js
var x = ['John', 'Chris', 'Mark', 'PJ'];

if (x.length == 4) {
  console.log(x[x.length - 3]);
} else {
  console.log('Dojo');
}
```

| Variable |              Values               |
| :------: | :-------------------------------: |
|   `x`    | `['John', 'Chris', 'Mark', 'PJ']` |

5. **Answer**: `Chris`
