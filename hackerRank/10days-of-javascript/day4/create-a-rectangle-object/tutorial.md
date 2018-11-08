# [Objects in JavaScript](https://www.hackerrank.com/challenges/js10-objects/topics)

## Object Basics
We define the following:

- _Object_: A collection of properties.
- _Property_: An association between a _name_ (i.e., key) and a _value_. Note that when the value associated with a key is a function, we call the property a _method_. A property name can be any valid string, or anything that can be converted into a string (including the empty string).

An object has properties associated with it, and we explain an object's properties as variables that are part of the object. We can think of an object's properties as a set of regular variables specific to that object that define its characteristics.

Let's say we have an object named `objectName` and a property named `propertyName`. We can access this property in the following ways:

1. _Dot Notation_: Call `objectName.propertyName`.
2. _Bracket Notation_: Call `objectName['propertyName']`. Note that `propertyName` must be enclosed in string quotes and is _case-sensitive_. Any property name that's not a valid JavaScript identifier (e.g., starts with a number, contains a space or hyphen, etc.) can only be accessed using bracket notation. This type of notation is also good to use when property names are dynamically determined (i.e., not known until runtime).

We can _add a new property to an existing object_ by assigning a value to it using either dot or bracket notation (see the example below).

```js
/*
 * Create an object with two properties, 'Name' and 'Age'
 */
var actor = {
    Name: 'Julia Roberts', 
    Age: 36
};

// Print the object
console.log('The \'actor\' object:', actor);

// Access object's properties using bracket notation
console.log('The \'Name\' property:', actor['Name']);
console.log('The \'Age\' property:', actor['Age']);

// Access object's properties using dot notation
console.log('The \'Name\' property:', actor.Name);
console.log('The \'Age\' property:', actor.Age);

// Add a new property called 'EyeColor'
actor.EyeColor = 'Brown';

// Print the object
console.log('The updated \'actor\' object:', actor);

// Trying to access undefined property results in 'undefined'
console.log('Attempt to access an undefined property (\'HairColor\'):', 
    actor.HairColor);
```

Output
```js
The 'actor' object: { Name: 'Julia Roberts', Age: 36 }
The 'Name' property: Julia Roberts
The 'Age' property: 36
The 'Name' property: Julia Roberts
The 'Age' property: 36
The updated 'actor' object: { Name: 'Julia Roberts', Age: 36, EyeColor: 'Brown' }
Attempt to access an undefined property ('HairColor'): undefined
```

## Creating Objects
We can create objects using an _object initializer_, or we can first create a _constructor function_ and then instantiate an object using that function's name in conjunction with the _new_ operator.

### 1. Using Object Initializers
We can initialize an object using `new Object()`, `Object.create()`, or by using the _literal_ (or _initializer_) notation. An object initializer is a comma-separated list of zero or more property name-value pairs defining an object, enclosed in curly braces (i.e., `{}`).

#### Using Initializer Notation
```js
var a = 3;
var b = 'Rome';
var c = false;

var o = {a, b, c};

console.log('Object \'o\':', o);

var p = {
    a: 3, 
    b: 'Rome', 
    c: false
};

console.log('Object \'p\':', p);

var q = {};
console.log('Object \'q\' (Initial):', q);
q.a = a;
q.b = b;
q.c = c;
console.log('Object \'q\' (Updated):', q);
```

Output
```js
Object 'o': { a: 3, b: 'Rome', c: false }
Object 'p': { a: 3, b: 'Rome', c: false }
Object 'q' (Initial): {}
Object 'q' (Updated): { a: 3, b: 'Rome', c: false }
```

#### Using `new Object()`
```js
var o = new Object();

o.a = 4;
o.b = 'Rome';
o.c = true;

console.log('Object \'o\':', o);
```

Output
```js
Object 'o': { a: 4, b: 'Rome', c: true }
```

#### Using `Object.create()`
```js
var x = {
    a: 5, 
    foo: function() {
        return this.a * this.a;
    }
};

var o = Object.create(x);

console.log('\'x\':', x);
console.log('Object \'o\':', o);
console.log('Property \'o.a\':', o.a);
console.log('Method \'o.foo()\':', o.foo());

o.a = 7;

console.log('Property \'o.a\':', o.a);
console.log('Method \'o.foo()\':', o.foo());
```

Output
```js
'x': { a: 5, foo: [Function: foo] }
Object 'o': {}
Property 'o.a': 5
Method 'o.foo()': 25
Property 'o.a': 7
Method 'o.foo()': 49
```

### 2. Using a Constructor Function
We can use a _constructor function_ to create an object in two steps:

1. Define the object type by writing a constructor function. The strong convention here is for the function's name to be in [UpperCamelCase](https://en.wikipedia.org/wiki/Camel_case).
2. Use the `new` operator to create an instance of the object.

```js
function Actor(firstName, lastName, Age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
}

var a1 = new Actor('Julia', 'Roberts', 48);
var a2 = new Actor('Kate', 'Winslet', 40);

console.log('Object \'a1\':', a1);
console.log('Object \'a2\':', a2);
```

Output
```js
Object 'a1': Actor { firstName: 'Julia', lastName: 'Roberts', Age: 48 }
Object 'a2': Actor { firstName: 'Kate', lastName: 'Winslet', Age: 40 }
```