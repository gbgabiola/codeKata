# [Day 1: Let and Const](https://www.hackerrank.com/challenges/js10-let-and-const/topics)

## Variable Declaration Keywords

### `var`
We use the _var_ keyword to declare variables. The scope of a variable declared using this keyword is within the context wherever it was declared. For variables declared outside any function, this means they are globally available throughout the program. For variables declared within a function, this means they are only available within the function itself.

```js
"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    var a = input;

    // If 'a' is odd:
    if (a % 2 == 1) {
        var a = input + 1;
        console.log("if(a): " + a);
    }

    console.log("main(a): " + a);
}
```

Input

```js
11
```

Output

```js
if(a): 12
main(a): 12
```

Solution
1. Variable `a` is declared in the _main_ function using the _var_ keyword and initialized with the given value, `11`.
2. `a % 1` evaluates to _true_ because `a = 11` is odd, so we enter the _if_ block.
3. Variable `a` is declared a second time inside the _if_ block (still using the _var_ keyword) and initialized with a value of `11 + 1 = 12`. We print the value of `a = 12`.
4. We exit the _if_ block and print the value of `a` in _main_. This value is `12` because the scope of the initial declaration of `a` in _main_ includes the _if_ block.

### `let`
We use the _let_ keyword to declare variables that are limited in scope to the block, statement, or expression in which they are used. This is unlike the _var_ keyword, which defines a variable globally or locally to an entire function regardless of block scope.

```js
"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    let a = input;

    // If 'a' is odd:
    if (a % 2 == 1) {
        // Increment 'a' by 1
        let a = input + 1;
        console.log("if(a): " + a);
    }

    console.log("main(a): " + a);
}
```

Input

```js
11
```

Output

```js
if(a): 12
main(a): 11
```

Solution
1. Variable `a` is declared in the _main_ function using the _let_ keyword and initialized with the given value, `11`.
2. `a % 1` evaluates to `true` because `a = 11` is odd, so we enter the _if_ block.
3. Variable `a` is declared a second time inside the _if_ block (again using the _let_ keyword) and initialized with a value of `11 + 1 = 12`. We print the value of `a = 12`.
4. We exit the _if_ block and print the value of `a` in _main_. Because we used the _let_ keyword for both declarations and the scope of the second declaration of `a` was limited to the _if_ block, the value of `a` in _main_ is still `11`.

It's important to note that you cannot redeclare a variable declared using the _let_ keyword within the same scope as the original variable. An attempt to do this raises an _Error_, as demonstrated by the code below.

```js
"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    let a = input;

    // This will throw "SyntaxError: Identifier 'a' has already been declared"
    let a = input + 1;

    console.log(a); 
}
```

Input

```js
11
```

Output

```js
solution.js:12
    let a = input + 1;
        ^

SyntaxError: Identifier 'a' has already been declared
    at ReadStream.<anonymous> (solution.js:4:5)
    at emitOne (events.js:116:13)
    at ReadStream.emit (events.js:211:7)
    at addChunk (_stream_readable.js:263:12)
    at readableAddChunk (_stream_readable.js:250:11)
    at ReadStream.Readable.push (_stream_readable.js:208:10)
    at fs.read (fs.js:2051:12)
    at FSReqWrap.wrapper [as oncomplete] (fs.js:658:17)
```

### `const`
We use the _const_ keyword to create a _read-only_ reference to a value, meaning the value referenced by this variable cannot be reassigned. Because the value referenced by a constant variable cannot be reassigned, JavaScript _requires_ that constant variables always be initialized.

```js
"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    const a = input;

    // This will throw "SyntaxError: Missing initializer in const declaration"
    const b; 

    console.log(a);
}
```

Input

```js
11
```

Output

```js
solution.js:12
    const b; 
          ^

SyntaxError: Missing initializer in const declaration
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:616:28)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
```