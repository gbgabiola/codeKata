# [Arrow Functions in JavaScript](https://www.hackerrank.com/challenges/js10-arrows/topics)

## Arrow Functions
These expressions lexically bind the `this` value while using less syntax than a typical function expression. Arrow functions are always [anonymous](https://en.wikipedia.org/wiki/Anonymous_function).

Here are some basic examples of arrow function syntax:

```js
(parameter) => {statements}
parameter => {statements}
parameter => expression
parameter => {return expression}

(param1, param2, ..., paramN) => {statements}
(param1, param2, ..., paramN) => expression
(param1, param2, ..., paramN) => {return expression}
```

Let's look at some simple ways to apply this syntax:

```js
'use strict';

const makeArray = (...values) => { return values };
console.log('Array:', makeArray(1, 2, 3, 4));
console.log('Array:', makeArray(1, 2, 3, 4, 5, 6));

const getSum = (a, b) => { return a + b };
console.log('1 + 2 =', getSum(1, 2));

const greeting = 'Hello, World.';
const capitalize = (myString) => { return myString.toUpperCase() };
console.log(greeting, '=>', capitalize(greeting));
```

Output
```js
Array: [ 1, 2, 3, 4 ]
Array: [ 1, 2, 3, 4, 5, 6 ]
1 + 2 = 3
Hello, World. => HELLO, WORLD.
```

## Using Arrow Functions
Let's look at some ways we can use arrow functions to make our code shorter.

#### Sum the Elements of an Array
While we can certainly iterate over an array and sum each value, we can also use the _reduce_ function.

```js
'use strict';

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce(function (a, b) {
    return a + b;
}, 0);

console.log('Array:', arr);
console.log('Sum:', sum);
```

Output
```js
Array: [ 1, 2, 3, 4, 5 ]
Sum: 15
```

Now, let's reduce the length of our code using an arrow function:

```js
'use strict';

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((a, b) => { return a + b }, 0);

console.log('Array:', arr);
console.log('Sum:', sum);
```

Output
```js
Array: [ 1, 2, 3, 4, 5 ]
Sum: 15
```

Let's further reduce it by getting rid of the `return`:

```js
'use strict';

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((a, b) => a + b, 0);

console.log('Array:', arr);
console.log('Sum:', sum);
```

Output
```js
Array: [ 1, 2, 3, 4, 5 ]
Sum: 15
```

#### Find the Length of Strings in an Array
Let's take an array of strings and use it to create a new array containing the respective lengths of its elements.

```js
'use strict';

const arr = ['first', 'second', 'third', 'fourth', 'fifth'];

const len = arr.map(function(s) { return s.length });

console.log('Array:', arr);
console.log('Lengths:', len);
```

Output
```js
Array: [ 'first', 'second', 'third', 'fourth', 'fifth' ]
Lengths: [ 5, 6, 5, 6, 5 ]
```

Now, let's reduce the length of our code using an arrow function:

```js
'use strict';

const arr = ['first', 'second', 'third', 'fourth', 'fifth'];

const len = arr.map(s => s.length);

console.log('Array:', arr);
console.log('Lengths:', len);
```

Output
```js
Array: [ 'first', 'second', 'third', 'fourth', 'fifth' ]
Lengths: [ 5, 6, 5, 6, 5 ]
```

#### Find Array Elements Greater Than a Value
Let's find all the elements in an array that are greater than `3` and add them to a new array.

```js
'use strict';

const arr = [1, 2, 3, 4, 5];

const greaterThan3 = arr.filter(function(a) {
    return a > 3;
});

console.log('Array:', arr);
console.log('Elements Greater Than 3:', greaterThan3);
```

Output
```js
Array: [ 1, 2, 3, 4, 5 ]
Elements Greater Than 3: [ 4, 5 ]
```

Now, let's reduce the length of our code using an arrow function:

```js
'use strict';

const arr = [1, 2, 3, 4, 5];

const greaterThan3 = arr.filter(a => a > 3);

console.log('Array:', arr);
console.log('Elements Greater Than 3:', greaterThan3);
```

Output
```js
Array: [ 1, 2, 3, 4, 5 ]
Elements Greater Than 3: [ 4, 5 ]
```