# [Error Handling](https://www.hackerrank.com/challenges/js10-throw/topics)

## JavaScript Errors
There are three types of errors in programming:

#### 1. Syntax Error (Parsing Error)
In a traditional programming language, this type of error occurs at _compile time_; because JavaScript is an _interpreted language_, this type of error arises when the code is interpreted. When a syntax error occurs in JavaScript, only the code contained within the same _thread_ as the syntax error is affected; independent code running in other threads will still be executed, as nothing in them depends on the code containing the error. For example, consider the following code containing a syntax error:

```js
console.log("Hello" 
```

This produces the following error: `SyntaxError: missing ) after argument list`. This is because we failed to add a closing parenthesis to our call to _console.log_.

#### 2. Runtime Error (Exception)
Commonly referred to as _exceptions_, this type of error occurs during execution (i.e., after compilation or interpretation). Once a runtime error is encountered, an exception is _thrown_ in the hope that it will be _caught_ by a subsequent section of code containing instructions on how to recover from the error. Much like syntax errors, these affect the thread where they occured but allow other, independent threads to continue normal execution. For example, consider the following code containing a runtime error:

```js
function sum(a, b) {}
add(2, 3)
```

This produces the following error: `ReferenceError: add is not defined`. This is because we attempted to call the _add_ function without ever declaring and defining it.

#### 3. Logical Error
These are some of the most difficult errors to isolate because they cause the program to operate without terminating or crashing, but the operations the code performs are not correct. Unlike syntax and runtime errors which arise due to some violation of the rules of the language, these errors occur when there is a mistake in your the code's logic.

_Run_ below to see this in code for a program that prints the _sum_ of two integers. Can you spot the logical error?

**Input Format**

The first line must contain an integer denoting `a`. 
The second line must contain an integer denoting `b`.

```js
var input = "";
var inputLines = "";
var lineNumber = 0;
process.stdin.on('data', function (data) {
    input += data;
});
process.stdin.on('end', function () {
    inputLines = input.split("\n");
    main();    
});
function readLine() { return inputLines[lineNumber++]; }
/**** Ignore above this line. ****/

function sum(a, b) {
    return a - b;
}

function main() {
    var a = +(readLine());
    var b = +(readLine());

    console.log( sum(a, b) );
}
```

Input
```js
2
3
```

Output
```js
-1
```

##### Solution
In the code above, we're reading two integers from stdin and passing them to our _sum_ function. We expect the function to return the sum of two integers, `a` and `b`; however, due to a logical error (used the `-` operator instead of the `+` operator), it's actually returning the _difference_ between `a` and `b`. This program is functional in that it runs, but it is broken in that it does not properly calculate the sum of two integers.

**Tip:** When trying to isolate logical errors in code, it's often helpful to print the contents of your variables to _stderr_ (_standard error_) at various stages in the logic using `console.warn()` or `console.error()`. For example, if we used this version of the _sum_ function instead:

```js
function sum(a, b) {
    var result = a - b;
    console.error("The sum of " + a + " and " + b + " is " + result);
    return result;
}
```

The following line would be printed to our error console during execution: `The sum of 2 and 3 is -1`. This makes it obvious during debugging that there is a logical issue with how our function calculates the sum of `a` and `b`.

## Try, Catch, and Finally
The _try_ block is the first step in error handling and is used for any block of code that is likely to raise an exception. It should contain one or more statements to be executed and is typically followed by at least one _catch clause_ and/or the optional _finally clause_. In other words, the _try_ statement has three forms:

- _try-catch_
- _try-finally_
- _try-catch-finally_

The _catch_ block immediately follows the _try_ block and is executed only if an exception is thrown when executing the code within the _try_ block. It contains statements specifying how to proceed and recover from the thrown exception; if no exception is thrown when executing the _try_ block, the _catch_ block is skipped. If any statement within the _try_ block (including a function call to code outside of the block) throws an exception, control immediately shifts to the catch clause.

It's important to note that we always want to avoid throwing an exception. It's best if the contents of the _try_ block execute without issue but, if an exception is unavoidable, control passes to the _catch_ block which should contain instructions that report and/or recover from the exception.

The _finally_ block is optional. It executes after the _try_ and _catch_ blocks, but before any subsequent statements following these blocks. The _finally_ block always executes, regardless of whether or not an exception was thrown or caught.

In the code below, the call to `getElement(arr, 4)` inside the _try_ block will throw an exception because the code declaring `arr` was commented out. It's immediately followed by a _catch_ block that catches the exception and prints the _message_ associated with it (`arr is not defined`). Because the exception was caught, the program continues executing, printing the next line after the _catch_ block (`The program continued executing!`).

```js
"use strict"

function getElement(arr, pos) {
    return arr[pos];
}


//let arr = [1, 2, 3, 4, 5];

try {
    console.log(getElement(arr, 4));
} 
catch (e) {
    console.log(e.message);
}
console.log("The program continued executing!");
```

Output
```js
arr is not defined
The program continued executing!
```

If we remove the _catch_ block and add the _finally_ block shown below, it will instead print `Finally Block` and then terminate due to the uncaught exception (`ReferenceError: arr is not defined`).

```js
//let arr = [1, 2, 3, 4, 5];

try {
    console.log(getElement(arr, 4));
} 
finally {
    console.log("Finally Block");
}
console.log("The program continued executing!");
```

In this example, we create a constant variable, `arr`, that's an array of integers. We then _try_ to reassign the value of `arr` to a different array of numbers; this throws an exception because the value of a constant cannot be reassigned or re-declared.

```js
"use strict";

const arr = [1, 2, 3, 4, 5];

try {
    arr = [4, 2];
    console.log(arr.sort());
} 
catch (e) {
    console.log(e.message);
}
```

Output
```js
Assignment to constant variable.
```

Let's say we want to make sure that the contents of `arr` are printed to stdout regardless of whether or not an exception is thrown or caught; we can do this by adding a _finally_ block:

```js
"use strict";

const arr = [1, 4, 3, 4, 5];

try {
    arr = [4, 2];
    console.log(arr.sort());
} 
catch (e) {
    console.log(e.message);
} 
finally {
    console.log(arr.sort());
}
```

Output
```js
Assignment to constant variable.
[ 1, 3, 4, 4, 5 ]
```

## Throw
We use the _throw_ statement, denoted by the `throw` keyword, to throw an exception. There are two ways to do this, shown below.

#### 1. `throw value`
We can throw an exception by following the keyword `throw` with some `value` that we wish to use for the exception being thrown.

```js
function throwString() {
    // Generate an exception with a String value
    throw "some exception";
}

function throwFalse() {
    // Generate an exception with a boolean value of false
    throw false;
}

function throwNumber() {
    // Generate an exception with a Number value of -1
    throw -1;
}

try {
    throwString();
}
catch (e) {
    console.log(e);
}

try {
    throwFalse();
}
catch (e) {
    console.log(e);
}

try {
    throwNumber();
}
catch (e) {
    console.log(e);
}
```

Output
```js
some exception
false
-1
```

#### 2. `throw new Error(customError)`
We can throw an exception by following the keyword `throw` with `new Error(customError)`, where `customError` is the value we want for the `message` property of the exception being thrown.

```js
var input = "";
process.stdin.on('data', function (data) {
    input = String(data).trim();
    main();
});
/** Ignore above this line. **/

function throwMyError() {
    // Generate an exception with a value read from stdin
    throw new Error(input);
}

function main() {
    try {
        throwMyError();
    }
    catch (e) {
        console.log(e.message);
    }
}
```

Input
```js
This is my fancy error.
```

Output
```js
This is my fancy error.
```

In this example, we wrote a simple program that throws an exception if the given integer argument is outside of the bounds of an array.

**Input Format**

Three space-separated integers denoting indices in an array.

```js
"use strict";
var input = "";
var index = 0;
process.stdin.on('data', function (data) {
    input = String(data).split(" ");
    main();    
});
function readLine() { return +(input[index++]); }
/**** Ignore above this line. ****/

/*
 * This function returns the value at index pos (i.e., arr[pos]).
 * 
 * If the index 'pos' is outside of the bounds of the array (i.e., value of arr[pos] is 'undefined'), throw errors.
 */
function getValue(arr, pos) {
    if (pos < 0) {
        throw new Error("Index Underflow: " + pos);
    }

    let len = arr.length;

    if (pos >= len) {
        throw new Error("Index Overflow: " + pos);
    }

    return arr[pos];
}

function main() {
    var index;  
    const arr = [1, 2, 3, 4, 5];
    try {
        index = readLine()
        console.log(getValue(arr, index));
    } 
    catch (e) {
        console.log(e.message);
    }

    try {
        index = readLine();
        console.log(getValue(arr, index));
    } 
    catch (e) {
        console.log(e.message);
    }

    try {
        index = readLine();
        console.log(getValue(arr, index));
    } 
    catch (e) {
        console.log(e.message);
    }
}
```

Input
```js
5 2 -3
```

Output
```js
Index Overflow: 5
3
Index Underflow: -3
```

- [Video: Throw](https://www.youtube.com/embed/bRpncbV-u1Q?enablejsapi=1&version=3&autoplay=1&rel=0&origin=https%3A%2F%2Fwww.hackerrank.com)