# [Classes in JavaScript](https://www.hackerrank.com/challenges/js10-class/topics)

## Functional Classes
In this section, we'll discuss some of the ways we can use functions to simulate the behavior of classes.

### Using Functions
1. Define a normal JavaScript function.
2. Create an object by using the `new` keyword.
3. Define properties and methods for a created object using the `this` keyword.

```js
'use strict';

function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = getFruitInformation;
}

function getFruitInformation() {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());
```

Output
```js
This Mexican lime is unknown.
This Mexican lime is green.
```

We can also define the _getInformation_ function internally:

```js
'use strict';

function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());
```

Output
```js
This Mexican lime is unknown.
This Mexican lime is green.
```

### The Prototype Property
The drawback of internally defining the _getInformation_ function is that it recreates that function every time we create a new _Fruit_ object. Fortunately, every function in JavaScript has something called a _prototype property_, which is empty by default. We can think of a function's prototype as an object blueprint or paradigm; when we add methods and properties to the prototype, they are accessible to _all_ instances of that function. This is especially useful for _inheritance_ (discussed below).

We can add a function to our constructor function's prototype like so:

```js
'use strict';

function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
}

Fruit.prototype.getInformation = function() {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());
```

Output
```js
This Mexican lime is unknown.
This Mexican lime is green.
```

### Using Object Literals
We can use object literals to define an object's properties and functions by initializing a variable with a comma-separated list of property-value pairs enclosed in curly braces.

```js
'use strict';

let lime = {
    type: 'Mexican lime',
    color: 'green',
    getInformation: function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());
```

Output
```js
This Mexican lime is green.
This Mexican lime is yellow.
```

### Singleton Class Using a Function
A _singleton_ class is a design pattern that restricts a class to a _single instance_. When we assign the value of `new function(){...}` to a variable, the following happens:

1. We define an anonymous constructor function.
2. We invoke the anonymous constructor function with the `new` keyword.

```js
'use strict';

let lime = new function() {
    this.type = 'Mexican lime';
    this.color = 'green';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    };
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());
```

Output
```js
This Mexican lime is green.
This Mexican lime is yellow.
```

## Classes
JavaScript classes, introduced in _ECMAScript 6_, are essentially syntactic sugar over JavaScript's existing prototype-based inheritance that don't actually introduce a new object-oriented inheritance model. This syntax is a means of more simply and clearly creating objects and deal with inheritance.

We define classes in two ways:

### Class Declarations
One way to define a class is using a class declaration. To declare a class, we use the `class` keyword and follow it with the class' name. Ideally, we always write class names in TitleCase.

```js
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let p = new Polygon(1, 2);
console.log('Polygon p:', p);
```

Output
```js
Polygon p: Polygon { height: 1, width: 2 }
```

An important difference between function declarations and class declarations is that function declarations are hoisted (i.e., can be referenced before they're declared) but class declarations are not. This means we must first declare our class before attempting to access (or reference) it; if we fail to do so, our code throws a _ReferenceError_.

```js
try {
    let p = new Polygon(1, 2);
    console.log('Polygon p:', p);
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

p = new Polygon(1, 2);
console.log('Polygon p:', p);
```

Output
```js
ReferenceError: Polygon is not defined
Polygon p: Polygon { height: 1, width: 2 }
```

### Class Expressions
_Class expressions_ are another way to define a class, and they can be either _name_d or _unnamed_. The name given to a named class expression is local to the class' body.

#### Unnamed Class Expression
```js
let Polygon = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log('Polygon:', Polygon);
let p = new Polygon(1, 2);
console.log('p:', p);
```

Output
```js
Polygon: class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
p: Polygon { height: 1, width: 2 }
```

#### Named Class Expression
```js
let Polygon = class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log('Polygon:', Polygon);
let p = new Polygon(1, 2);
console.log('p:', p);
```

Output
```js
Polygon: class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
p: Polygon { height: 1, width: 2 }
```

## The Constructor Method
- The _constructor method_ is a special method we use to create and initialize objects of a class.
- A class can only have one special method with the name `constructor`, and attempting to write a class containing more than one constructor method will throw a _SyntaxError_.
- To implement _inheritance_, we can use the `super` keyword in a constructor to call a parent class constructor.

## Prototype Methods
```js
'use strict';

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}

const square = new Polygon(10, 10);

console.log(square.getArea());
```

Output
```js
100
```

## Static Methods
_Static methods_ are methods relevant to all instances of a class — not just any one instance. These methods receive information from their arguments and not a class instance, which allows us to invoke a class' static methods without creating an instance of the class. In fact, we actually _can't_ call a static method on an instantiated class object (attempting to do so throws a _TypeError_).

We define a class' static methods using the `static` keyword. We typically use these methods to create utility functions for applications, as they can't be called on class objects.

```js
'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// The correct way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class
try {
    console.log(p1.distance(p1, p2));
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}
```

Output
```js
7.0710678118654755
TypeError: p1.distance is not a function
```

## Inheritance
In essence, this construct allows us to create an object prototype or class that's an _extension_ of another object prototype or class. A class inheriting from some other class (referred to as a superclass or parent class) is called a subclass (or child class). The subclass inherits the superclass' methods and behaviors, but it can also declare new ones or even override existing ones.

- [Inheritance in Java](https://www.hackerrank.com/topics/java-inheritance/)

## Subclassing with the `extends` Keyword
We use the `extends` keyword in class declarations or class expressions to create a child class (i.e., subclass).

```js
'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();
```

Output
```js
Spot barks.
Spot speaks.
```

We can also _extend_ functional classes:

```js
'use strict';

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name, 'speaks.');
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();
```

Output
```js
Spot barks.
Spot speaks.
```

## Superclass Calls Using the `super` Keyword
We use the `super` keyword to call functions on an object's parent.

```js
'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();
```

Output
```js
Spot speaks.
Spot barks.
```

## Extending an Object
The ability to extend multiple classes from the same superclass (or model multiple object types after the same prototype) is powerful because it provides us with certain implied guarantees about the basic functionality of the subclasses; as extensions of the parent class, subclasses are guaranteed to (at minimum) have the superclass' fields, methods, and functions.

In this example, we call the superclass constructor using `super()`, override a superclass function `(speak()`), add an additional property (`collarColor`), and add a new subclass method (`collar()`).

```js
'use strict';

class Animal {
    constructor(name) {
        this.animalType = 'Animal'
        this.name = name;
    }
    type() {
        console.log(this.name, 'is type', this.animalType);
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    constructor(name, collarColor) {
        super(name);
        this.animalType = 'Dog';
        this.collarColor = collarColor;
    }
    speak() {
        console.log(this.name, 'barks.');
    }
    collar() {
        console.log(this.name, 'has a', this.collarColor, 'collar.');
    }
}

let spot = new Dog('Spot', 'red');
spot.type();
spot.speak();
spot.collar();

// Because the Animal constructor only expects one argument,
// only the first value passed to it is used
spot = new Animal('Spot', 'white');
spot.type();
spot.speak();
try {
    spot.collar();
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message
    + ' (collar is a method of Dog, not Animal).');
}
```

Output
```js
Spot is type Dog
Spot barks.
Spot has a red collar.
Spot is type Animal
Spot speaks.
TypeError: spot.collar is not a function (collar is a method of Dog, not Animal).
```

---

- [Video: Prototype in JavaScript](https://www.youtube.com/embed/2rkEbcptR64?enablejsapi=1&version=3&autoplay=1&rel=0&origin=https%3A%2F%2Fwww.hackerrank.com)