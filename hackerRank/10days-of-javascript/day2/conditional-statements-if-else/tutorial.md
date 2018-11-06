# [If-Else Conditional Statementse](https://www.hackerrank.com/challenges/js10-if-else/topics)

## JavaScript Comparison Operators

### Equality Operators

#### Equality (`==`)
The equality operator is a binary operator that compares two operands, returning _true_ if they are deemed to be equal. It works by converting the operands if they are not of the same type, then applying strict comparison. If both operands are primitive types, it will compare their values (i.e., `1 == 1` evaluates to _true_). If both operands are objects, then JavaScript compares their internal references; this means it checks to see if both operands point to the same object (i.e., location) in memory. For example:

```js
console.log(1 == 1);
console.log(1 == "1");
console.log('1' == 1);
console.log(0 == false);
console.log(0 == null);
console.log(0 == undefined);
console.log(null == undefined);
```

Output
```js
true
true
true
true
false
false
true
```

#### Inequality (`!=`)
The inequality operator is a binary operator that returns _true_ if the operands are _not equal_. If the two operands are of different types, JavaScript attempts to convert the operands to an appropriate type to compare them. If both operands are objects, then JavaScript compares the internal references to see if they are not equal (i.e., refer to different objects in memory).

```js
console.log(1 != 1);
console.log(1 != "1");
console.log('1' != 1);
console.log(0 != false);
console.log(0 != null);
console.log(0 != undefined);
console.log(null != undefined);
```

Output
```js
false
false
false
false
true
true
false
```

#### Example: Comparing Objects
1. In this diagram, we have two references that point to different objects that _look_ the same:

![Diagram: Not Equal](https://s3.amazonaws.com/hr-assets/0/1516121795-0271dbe403-ScreenShot2018-01-16at9.58.07PM.png)

2. In this diagram, we have two references that point to the same object: 

![Diagram: Equality](https://s3.amazonaws.com/hr-challenge-images/0/1479860915-47c1c5c64b-equality.png)

```js
// This creates a custom object named MyObject
class MyObject {
    // Each object of this type has an attribute named 'magic'
    constructor(magic) {
        this.magic = magic;
    }
    // We'll discuss this syntax in more detail later
}

// Create two objects 
var variable1 = new MyObject(":)");
var variable2 = new MyObject(":)");

// Print the result of an equality comparison
console.log( variable1.magic + " == " + variable2.magic
            + " evaluates to "
            + (variable1 == variable2)
            );

// Set variable1 to reference the same object as variable2
variable1 = variable2;
// Print the result of an equality comparison
console.log( variable1.magic + " == " + variable2.magic
            + " evaluates to "
            + (variable1 == variable2)
            );
```

Output
```js
:) == :) evaluates to false
:) == :) evaluates to true
```

#### Identity or Strict Equality (`===`)
The identity operator returns _true_ if both of the following conditions are satisfied:
- The operands are strictly equal.
- The operands are of the same type.

```js
console.log(1 === 1);
console.log(1 === "1");
console.log('1' === 1);
console.log(0 === false);
console.log(0 === null);
console.log(0 === undefined);
console.log(null === undefined);
```

Output
```js
true
false
false
false
false
false
false
```

#### Non-Identity or Strict Inequality (`!==`)
The non-identity operator returns _true_ if the operands satisfy any of the following conditions:
- The operands are not equal.
- The operands are not of the same type.

```js
console.log(1 !== 1);
console.log(1 !== "1");
console.log('1' !== 1);
console.log(0 !== false);
console.log(0 !== null);
console.log(0 !== undefined);
console.log(null !== undefined);
```

Output
```js
false
true
true
true
true
true
true
```

### Relational Operators

#### Greater Than Operator (`>`)
This binary operator returns _true_ if the left operand is greater than the right operand; otherwise, it returns _false_.

#### Greater Than or Equal Operator (`>=`)
This binary operator returns _true_ if the left operand is greater than or equal to the right operand; otherwise, it returns _false_.

#### Less Than Operator (`<`)
This binary operator returns _true_ if the left operand is less than the right operand; otherwise, it returns _false_.

#### Less Than or Equal Operator (`<=`)
This binary operator returns _true_ if the left operand is less than or equal to the right operand; otherwise, it returns _false_.

#### Example: Relational Operators
```js
console.log(5 > 5);
console.log(5 >= 5);
console.log(7 < 6);
console.log(4 <= 6);
```

Output
```js
false
true
false
true
```

### Logical Operators

#### Logical AND (`&&`)
Usage: `expression1 && expression2`

If both expressions evaluate to _true_, then it returns _true_; otherwise, it returns _false_.

#### Logical OR (`||`)
Usage: `expression1 || expression2`

If both expressions evaluate to _false_, then it returns _false_; otherwise, it returns _true_.

#### Logical NOT (`!`)
Usage: `!expression` If the expression (by itself) evaluates to _false_, it returns _true_ (i.e., the logical negation of _false_); otherwise, it returns _false_.

```js
console.log((5 < 7) && (4 < 4))
console.log((5 < 7) && (4 >= 4))
console.log((5 < 7) || (4 < 4)) 
console.log((5 >= 7) || (4 > 4))
console.log(!(2**3))
```

Output
```js
false
true
true
false
false
```

#### Short-Circuit Evaluation
As logical expressions are evaluated from left to right, they are tested for possible [short-circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation) using the following rules:
- `false && expression` is short-circuit evaluated to _false_.
- `true || expression` is short-circuit evaluated to _true_.

#### If-Else Statements
- [Video: if...else statements](https://www.youtube.com/embed/6Bp6Z37TRfE?enablejsapi=1&version=3&autoplay=1&rel=0&origin=https%3A%2F%2Fwww.hackerrank.com)

Use the _if_ statement to execute a statement if a logical condition (i.e., some statement that evaluates to _true_ or _false_) is _true_. Use the optional _else_ clause to execute a statement _only in the event that the if condition evaluates to false_. The code below demonstrates the basic syntax for this:

```js
if (condition) {
    statement1;
} 
else {
    statement2;
}
```

In the code above:
- `condition` can be any expression that evaluates to _true_ or _false_.
- If `condition` evaluates to _true_, then `statement1` is executed; otherwise, `statement2` is executed.
- `statement1` and `statement2` represent any statement (or sequence of statements), including additional nested _if_ statements.

The code below demonstrates multiple statements inside an _if-else_ block:

```js
if (condition1) {
    statement1;
    statement4;
    statement5;
} 
else {
    statement2;
    statement3;
    if (condition2) {
    	statement6;
    }
}
```

Additionally, you can compound the statements using the _else-if_ clause to test multiple conditions in sequence:

```js
if (condition1) {
    statement1;
} 
else if (condition2) {
    statement2;
} 
else if (conditionN) {
    statementN;
} 
else {
    statementLast;
}
```

Chaining related logic conditions using _else-if_ in this way has a few benefits:

- When there are multiple conditions being checked within a chained sequence of statements, only the first logical condition to evaluate to true will be executed. This also means that after one of the logical conditions evaluates to true, any subsequent logical statements in the block will be skipped over. For example, let's say `condition1` in the code above evaluates to _false_, but `condition2` evaluates to _true_. If this happens, the program will execute `statement2` and then jump to the end of the chain of statements and continue executing (meaning it skips over `conditionN` and the last _else_).
- If a later condition check is reached, you know that all the preceding condition checks within that chain all evaluated to false. This means you don't have to re-check certain conditions.

```js
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function classifyAge(age) {
    /* First, let's check the lower bound on our age range: */
    if (age < 13) {
        return age + " is a child.";
    }
    /* If this condition is checked, we know that age < 13 is false: */
    else if (age < 20) {
        return age + " is a teenager.";
    }
    /* If this condition is checked, we know both of these are false:
    *   age < 13 is false
    *   age < 20 is false
    *  This tells us that either age >= 20 is true, or age is not a number:
    */
    else if (age >= 20){
        return age + " is an adult.";
    }
    /* The input wasn't a number. */
    else {
        return "Your input must be an integer.";
    }
}

function main(input) {
    console.log(classifyAge(input));
}
```

Input
```js
12
```

Output
```js
12 is a child.
```

#### Falsy Values
The following six values are known as _Falsy_ values, meaning they evaluate to _false_:

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- `""` (i.e., the empty string)

All other values, including all objects, evaluate to true when used as the _condition_ in a conditional statement.

```js
var a = true;
var b = new Boolean(false);
var c = "";

console.log(a);
console.log(b);
console.log("\"" + c + "\"");

if (a) {
    console.log("Hello from a");
}

if (b) {
    console.log("Hello from b");
}

if (c) {
    console.log("Hello from c");
}
else {
    console.log("c is false");
}
```

Output
```js
true
[Boolean: false]
""
Hello from a
Hello from b
c is false
```

#### Conditional (Ternary) Operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands, and it's used as a shortcut for the _if_ statement. The basic syntax is:

```js
condition ? trueStatement : falseStatement
```

You can essentially read the `?` as the word "then" and the `:` as the word "else". If `condition` evaluates to true, then `trueStatement` is executed; else, `falseStatement` is executed.

```js
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    // The examples below all accomplish the same thing.

    // Example 1:
    input % 2 == 0 ? console.log(input + " is EVEN") : console.log(input + " is ODD");

    // Example 2:
    console.log( input + " is " + ((input % 2 == 0) ? "EVEN" : "ODD"));

    // Example 3:
    var parity = input % 2 == 0 ? "EVEN" : "ODD";
    console.log(input + " is " + parity);
}
```

Input
```js
4
```

Output
```js
4 is EVEN
4 is EVEN
4 is EVEN
```