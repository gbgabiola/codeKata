# [Functions in JavaScript](https://www.hackerrank.com/challenges/js10-function/topics)

### Functions
Functions in JavaScript are declared using the `function` keyword. A function declaration creates a function that's a _Function_ object having all the properties, methods, and behaviors of Function objects. By default, functions return the value `undefined`; to return any other value, the function must have a return statement that consists of the `return` keyword followed by the value to be returned (this can be a literal value, a variable, or even a call to a function).

Take some time to review the code below that declares functions and prints their return values.

**Input Format**

The first line contains a string denoting `name`. 
The second line contains two space-separated integers, `a` and `b`, to be summed.

```js
'use strict';
process.stdin.on('data', function (data) {
    let input = String(data).split(new RegExp("[\n ]+"));
    main(input[0], +(input[1]), +(input[2]));
});
/**** Ignore above this line. ****/

function greetings(name) {
    console.log("Hello, " + name);
}

function sum(a, b) {
    return a + b;
}

function main(name, a, b) {
    greetings(name);
    console.log(sum(a, b));
}
```

Input

```js
Julia
8 2
```

Output
```js
Hello, Julia
10
```

### The Function Expression
A function expression is very similar to (and has almost the same syntax as) a function statement. The main difference between a _function expression_ and a _function statement_ is the function _name_, which can be omitted from a function expression to [create an anonymous](https://en.wikipedia.org/wiki/Anonymous_function) function. Function expressions are often used as [Immediately Invoked Function Expressions](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (IIFEs), which run as soon as they're defined.

#### Unnamed Function Expression
The code below demonstrates an _unnamed_ function expression.

**Input Format**

A single integer denoting `x`.

```js
'use strict';
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {

    /**
    *   Defines an unnamed function and assigns it to a variable named square. 
    *   @param {Number} x
    *   @returns {Number} The value of argument squared.         
    **/
    var square = function(x) {
        return x * x;
    };

    // Print the value returned by passing input as x to the 
    // anonymous function referenced by variable square
    console.log(square(input));
}
```
Input

```js
4
```

Output

```js
16
```

#### Named Function Expression
The code below demonstrates a _named_ function expression.

**Input Format**

Two space-separated integers describing the respective values of `factN` and `fibN`.

```js
'use strict';
process.stdin.on('data', function (data) {
    let input = String(data).split(new RegExp("[\n ]+"));
    main(+(input[0]), +(input[1]));
});
/**** Ignore above this line. ****/

function main(factN, fibN) {

    /**
    *   Defines a named recursive function as a property of the math variable. 
    *   @param {Number} n
    *   @returns {Number} The value of n factorial.         
    **/
    var math = {
        // Declare the factorial property
        factorial: 
            // Declare the function as the property's value
            function factorial(n) {
                if (n > 1) {
                    return n * factorial(n - 1);
                }
                // Returns 1 if n <= 1
                return 1;
            }
    };

    /**
    *   Defines a named recursive function referenced by the fib variable. 
    *   @param {Number} n
    *   @returns {Number} The value of fibonacci(n).         
    **/
    var fib = function fibonacci(n){
        if (n > 2) {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        else if (n < 1) {
            return 0;
        }
        // else, return 1
        return 1;
    }

    // Print the value returned by passing factN as n to the 
    // function referenced by variable math:
    console.log(math.factorial(factN));
    // and by passing fibN as n to the function referenced by variable fib:
    console.log(fib(fibN));

}
```

Input

```js
5 11
```

Output

```js
120
89
```