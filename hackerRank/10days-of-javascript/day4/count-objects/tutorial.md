# [JavaScript: Iterating Over Arrays](https://www.hackerrank.com/challenges/js10-count-objects/topics)

In this article, we demonstrate some of the ways of iterating over an array's elements in JavaScript.

## Basic _for_ Loop
We can use a standard _for_ loop to iterate over an array's elements.

```js
const arr = ['a', 'b', 'c', 'd'];

// 'i' is the index
for (let i = 0; i < arr.length; i++) {
    console.log('arr[' + i + ']: ' + arr[i]);
}
```

Output
```js
arr[0]: a
arr[1]: b
arr[2]: c
arr[3]: d
```

## The _for...in_ Statement
The _for...in_ statement iterates over the enumerable properties of an object in an arbitrary order, which allows us to execute statements for each distinct property. In the case of an array, the property would be its elements. In the case of an object, that would be its properties.

#### Iterating Over an Object's Properties
When we use this loop to iterate over an object, we can perform operations on the array's property names and their corresponding values.

```js
const o = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

console.log('property: value');
// 'p' is the property
for (p in o) {
    console.log(p + ': ' + o[p]);
}
```

Output
```js
property: value
a: 1
b: 2
c: 3
d: 4
```

#### Iterating Over an Array's Elements
When we use this loop to iterate over an array, the array's indices behave like properties.

```js
const o = ['first', 'second', false];

// 'p' is the index
for (let p in o) {
    console.log(p + ' ' + o[p]);
}
```

Output
```js
0 first
1 second
2 false
```

## The forEach Method
The _forEach_ method iterates through an array and, for each element, it executes a function once.

```js
const arr = ['a', 'b', 'c', 'd'];

arr.forEach((value, index, array) => {
    console.log('index', index, 'has a value of', value,
    'which correlates to array[' + index + ']:', array[index]);
});

arr.forEach((value, index) => {
    console.log('index', index, 'has a value of', value);
});

arr.forEach((value) => {
    console.log('value:', value);
});
```

Output
```js
index 0 has a value of a which correlates to array[0]: a
index 1 has a value of b which correlates to array[1]: b
index 2 has a value of c which correlates to array[2]: c
index 3 has a value of d which correlates to array[3]: d
index 0 has a value of a
index 1 has a value of b
index 2 has a value of c
index 3 has a value of d
value: a
value: b
value: c
value: d
```

---

## Resources
- [Loops](https://www.hackerrank.com/topics/javascript-loops/)  
Check out our article on JavaScript loops for more information.