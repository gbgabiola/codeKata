# [Arrays in JavaScript](https://www.hackerrank.com/challenges/js10-arrays/topics)

## Arrays
The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

New to working with Arrays? Learn more about this data structure in our [Arrays](https://www.hackerrank.com/topics/arrays/) article.

### 1. Create an Array
```js
var a = ['first', 'second'];

console.log('a\'s contents:', a);
console.log('a\'s length:', a.length);
```

Ouput
```js
a's contents: [ 'first', 'second' ]
a's length: 2
```

### 2. Access (Index Into) an Array Item
```js
let a = ['first', 'second'];

// first = 'first'
let first = a[0]; 

// last = 'second'
let last = a[a.length - 1]; 

console.log('a[0]:', first);
console.log('a[a.length - 1]:', last);
```

Output
```js
a[0]: first
a[a.length - 1]: second
```

### 3. Loop Over an Array
```js
var a = ['first', 'second'];

a.forEach(function(e, i, array) {
    // 'i' is the index
    // 'e' is the element
    console.log(i + ' ' + e);
});
```

Output
```js
0 first
1 second
```

### 4. Append to the End of an Array
```js
var a = ['first', 'second'];

// Append 'third' to array 'a'
a.push('third');

console.log('a:', a);
```

Output
```js
a: [ 'first', 'second', 'third' ]
```

### 5. Remove From the end of an Array
```js
var a = ['first', 'second', 'third'];
console.log('Original Array:', a);

// Remove the last element from the array
let removed = a.pop();

console.log('Modified Array:', a);
console.log('Removed Element:', removed);
```

Output
```js
Original Array: [ 'first', 'second', 'third' ]
Modified Array: [ 'first', 'second' ]
Removed Element: third
```

### 6. Remove From the Front of an Array
```js
var a = ['first', 'second', 'third'];
console.log('Original Array:', a);

// Remove the first element from the array
let removed = a.shift();

console.log('Modified Array:', a);
console.log('Removed Element:', removed);
```

Output
```js
Original Array: [ 'first', 'second', 'third' ]
Modified Array: [ 'second', 'third' ]
Removed Element: first
```

### 7. Add to the Front of an Array
```js
var a = ['first', 'second', 'third'];
console.log('Original Array:', a);

// Insert element at the beginning of the array
a.unshift('fourth');

console.log('Modified Array:', a);
```

Output
```js
Original Array: [ 'first', 'second', 'third' ]
Modified Array: [ 'fourth', 'first', 'second', 'third' ]
```

### 8. Find the Index of an Item in the Array
```js
var a = ['first', 'second', 'third', 'fourth'];

let position = a.indexOf('second');

console.log('a:', a);
console.log('position:', position);
```

Output
```js
a: [ 'first', 'second', 'third', 'fourth' ]
position: 1
```

### 9. Remove an Item by Index Position
```js
var a = ['first', 'second', 'third', 'fourth', 'fifth'];
console.log('Original Array:', a);

let position = 1;
let elementsToRemove = 2;
// Remove 'elementsToRemove' element(s) starting at 'position'
a.splice(position, elementsToRemove);

console.log('Modified Array:', a);
```

Output
```js
Original Array: [ 'first', 'second', 'third', 'fourth', 'fifth' ]
Modified Array: [ 'first', 'fourth', 'fifth' ]
```

### 10. Copy an Array
```js
var a = ['first', 'second', 'third', 'fourth'];
console.log('a:', a);

// Shallow copy array 'a' into a new object
let b = a.slice();

console.log('b:', b);
```

Output
```js
a: [ 'first', 'second', 'third', 'fourth' ]
b: [ 'first', 'second', 'third', 'fourth' ]
```

### 11. Sort an Array
```js
var a = ['c', 'a', 'd', 'b', 'aa'];
var b = [9, 2, 13, 7, 1, 12, 123];

// Sort in ascending lexicographical order using a built-in
a.sort();
b.sort();

console.log('a:', a);
console.log('b:', b);
```

Output
```js
a: [ 'a', 'aa', 'b', 'c', 'd' ]
b: [ 1, 12, 123, 13, 2, 7, 9 ]
```

```js
var a = ['c', 'a', 'd', 'b', 'aa'];
var b = [9, 2, 13, 7, 1, 12, 123];

// Sort in descending lexicographical order using a compare function
a.sort(function(x, y) { return x < y; } );
b.sort(function(x, y) { return x < y; } );

console.log('a:', a);
console.log('b:', b);
```

Output
```js
a: [ 'd', 'c', 'b', 'aa', 'a' ]
b: [ 123, 13, 12, 9, 7, 2, 1 ]
```

```js
var a = ['c', 'a', 'd', 'b', 'aa'];

// Sort in descending lexicographical order using a compare arrow function
a.sort((x, y) => x < y);

console.log('a:', a);
```

Output
```js
a: [ 'd', 'c', 'b', 'aa', 'a' ]
```

### 12. Iterate Over an Array
We can use the _for…of_ statement to iterate over an array. This type of statement creates a loop that lets you iterate over iterable objects such as _Array_, _String_, _Set_, and _Map_.
```js
var a = ['first', 'second', 'third', 'fourth'];

for (let e of a) {
    console.log('e:', e);
}
```

Output
```js
e: first
e: second
e: third
e: fourth
```