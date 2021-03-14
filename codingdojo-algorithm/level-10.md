# Level 10


```js
var x = [['coding', 'boom'], ['dojo', 'yeah']];
console.log(x[0][0] + '-' + x[1][0]);
```

| Variable |                  Values                  |
| :------: | :--------------------------------------: |
|   `x`    | `[['coding', 'boom'], ['dojo', 'yeah']]` |

1. **Answer**: `coding-dojo`

---

```js
var x = [[5, 10], [15, 20, 25, 30], [45, 50]];
console.log(x[1][3] + x[2][1] + x[0][0]);
```

| Variable |                 Values                  |
| :------: | :-------------------------------------: |
|   `x`    | `[[5, 10], [15, 20, 25, 30], [45, 50]]` |

2. **Answer**: `85`

---

```js
var x = 2;
var y = [[2, 4, 6, 8], [10], [12, 32, 50]];

if (y[0][0] == x) {
  console.log('Hello World');
} else {
  console.log('Codingdojo');
}
```

| Variable |                Values                |
| :------: | :----------------------------------: |
|   `x`    |                 `2`                  |
|   `y`    | `[[2, 4, 6, 8], [10], [12, 32, 50]]` |

3. **Answer**: `Hello World`

---

```js
var numbers = [[1, 4, 5, 7], [2, 6, 8, 9]];

if (numbers[0][3] == 7) {
  numbers[0].push(10);
  console.log(numbers[0]);
}
```

| Variable  |             Values             |
| :-------: | :----------------------------: |
| `numbers` | `[[1, 4, 5, 7], [2, 6, 8, 9]]` |

4. **Answer**: `[1, 4, 5, 7, 10]`

---

```js
var x = [[2, 4, 6 8], [12], [10, 32, 50]];

if (x[1][0] - x[2][0] == x[0][0]) {
  console.log(x[1][0] + x[2][1] + x[0][2]);
} else {
  console.log(x[0][0] + x[1][0] + x[0][3]);    
}
```

| Variable  |               Values                |
| :-------: | :---------------------------------: |
| `numbers` | `[[2, 4, 6 8], [12], [10, 32, 50]]` |

5. **Answer**: `50`
