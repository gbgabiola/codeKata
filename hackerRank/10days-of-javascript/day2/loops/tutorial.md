# [Loops](https://www.hackerrank.com/challenges/js10-loops/topics)

## JavaScript Loops
_Loops_ are a quick and easy way to repeatedly perform a series of instructions, and they are typically run a finite number of times. JavaScript has the following types of loops:

- _for_
- _while_
- _do-while_
- _for-in_
- _for-of_

### _for_
The _for_ statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by one or more statements that will be executed in the loop.

#### Basic Syntax
```js
for (initialization; condition; finalExpression) {
    statement(s);
}
```

#### Components
- `initialization`: An expression or variable declaration that is typically used to initialize a counter variable.
- `condition`: This is the _termination condition_, which is an expression that's evaluated before each pass through the loop. If this expression evaluates to _true_, then `statement` is executed. If the expression evaluates to _false_, execution jumps to the first line of code after the end of the loop. If this statement is omitted, then `condition` always evaluates to _true_.
- `finalExpression`: An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of `condition`.
- `statement`: The statement (or statements) that is executed each time `condition` evaluates to _true_.

It's important to note that:
- The `initialization`, `condition`, and `finalExpression` in the head of the _for_ loop are _optional_, but are generally always used.
- The head of a for loop typically looks like for `(var i = 0; i < maxValue; i++)`, where `maxValue` is the maximum value you wish to iterate until.

Print all the integers in the range from `1` to some number given as input.

```js
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    for (var i = 1; i <= input; i++) {
        process.stdout.write(i + " ");
    }
}
```

Input
```js
10
```

Output
```js
1 2 3 4 5 6 7 8 9 10 
```

#### Initialize
In this example, we omit the `initialization` expression and instead initialize the variable used in `condition` and `finalExpression` before our loop:

```js
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    var i = 1;

    for (; i <= input; i++) {
        process.stdout.write(i + " ");
    }
}
```

Input
```js
10
```

Output
```js
1 2 3 4 5 6 7 8 9 10 
```

#### Condition
In this example, we omit the `condition` expression and instead add an _if_ statement inside the loop that terminates the loop once a the condition `i > input` is satisfied:

```js
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {

    for (var i = 1;; i++) {
        if (i > input) {
            break;
        }

        process.stdout.write(i + " ");
    }
}
```

Input
```js
10
```

Output
```js
1 2 3 4 5 6 7 8 9 10 
```

#### Infinite Loop
If we omit all three blocks, our loop will run infinitely or until such a time as we call `break;` from inside the loop. In this example, we do just that:

```js
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    var i = 1;

    for (;;) {
        if (i > input) {
            break;
        }

        process.stdout.write(i + " ");
        i++;
    }
}
```

Input
```js
10
```

Output
```js
1 2 3 4 5 6 7 8 9 10 
```

### _while_
The _while_ statement creates a loop that executes its internal statement(s) as long as the specified `condition` evaluates to _true_. The condition is evaluated before executing the statement.

#### Basic Syntax
```js
while (condition) {
    statement(s);
}
```

- `condition`: This is the _termination condition_, which is an expression that's evaluated before each pass through the loop. If this expression evaluates to _true_, then `statement` is executed; if it evaluates to _false_, execution jumps to the first line of code after the end of the loop.
- `statement`: The statement (or statements) that is executed each time `condition` evaluates to _true_.

Print all the integers from `1` to `10`.

```js
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    var i = 1;

    while (i <= input) {
        process.stdout.write(i + " ");

        i++;
    }
}
```

Input
```js
10
```

Output
```js
1 2 3 4 5 6 7 8 9 10 
```

### _do-while_
The _do-while_ statement creates a loop that executes its internal statement(s) until the specified `condition` evaluates to false. The condition is evaluated after executing the internal statement(s), so the contents of the loop always execute _at least_ once.

#### Basic Syntax
```js
do {
    statement(s);
} while (condition);
```

- `condition`: This is the _termination condition_, and it's evaluated after each pass through the loop (meaning the loop will always run at least once). Once the statement(s) inside the loop is executed, `condition` is evaluated. If this expression evaluates to _true_, then `statement` is executed again; if it evaluates to _false_, execution jumps to the first line of code after the end of the loop.
- `statement`: The statement (or statements) that is executed each time `condition` evaluates to _true_.

Print all the integers in the range from `1` to some number given as input.

```js
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    var i = 1;

    do {
        process.stdout.write(i + " ");

        i++;
    } while (i <= input);
}
```

Input
```js
10
```

Output
```js
1 2 3 4 5 6 7 8 9 10
```

### _for-in_
This loop iterates (in an arbitrary order) over the _name_ of each enumerable property in an object, allowing statements to be executed for each distinct property.

#### Basic Syntax
```js
for (var variable in object) {
    // insert code that uses variable here
}
```

- `variable`: A variable that refers to a different property _name_ during each iteration of the loop. You can declare this with `var` or `let`.
- `object`: The object whose enumerable properties are being iterated through.

In the code below, we create an object (referenced by the `actress` variable) and iterate over its enumerable properties:

```js
var actress = {
    firstName: "Julia",
    lastName: "Roberts",
    dateOfBirth: "October 28, 1967",
    nationality: "American",
    firstMovie: "Satisfaction"
};

for (var property in actress) {
    console.log("actress." + property + " = " + actress[property]);
}
```

Output
```js
actress.firstName = Julia
actress.lastName = Roberts
actress.dateOfBirth = October 28, 1967
actress.nationality = American
actress.firstMovie = Satisfaction
```

In this code, we create a _Monster_ object named `monster`, then print the object followed by its individual properties.

**Input Format**

The first line contains a string, `name`, denoting the type of monster.  
The second line contains a string, `home`, denoting the location where the monster lives.  
The third line contains a string, `description`, describing the monster.

```js
'use strict';
process.stdin.on('data', function (data) {
    main(String(data).trim().split(new RegExp("[\n]+")));
});
/**** Ignore above this line. ****/

class Monster {
    constructor(name, home, description) {
        this.name = name;
        this.home = home;
        this.description = description;
    }
}

function main(input) {
    var monster = new Monster(input[0], input[1], input[2]);

    // Print array
    console.log(monster);

    // Print each of its elements on a new line
    for (let property in monster) {
        console.log(property + ": " + monster[property]);
    }
}
```

Input
```js
Minotaur
Labyrinth
Bull head, man body.
```

Output
```js
Monster {
  name: 'Minotaur',
  home: 'Labyrinth',
  description: 'Bull head, man body.' }
name: Minotaur
home: Labyrinth
description: Bull head, man body.
```

### _for-of_
This loop iterates over iterable objects such as an _Array_, _Map_, _Set_, _String_, _TypedArray_, _arguments object_, etc. It essentially iterates over the _value_ of each distinct property in the structure, such as each letter in a word or each element in an array.

#### Basic Syntax
```js
for (let variable of iterable) {
    statement(s);
}
```

- `variable`: A variable that refers to a different property _value_ during each iteration of the loop. You can declare this with `var` or `let`.
- `object`: The object whose enumerable properties are being iterated through.

The code below splits the input into an array and prints it. It then iterates over each element of the array and prints it on a new line.

**Input Format**  
Space and/or newline-separated words.

```js
'use strict';
process.stdin.on('data', function (data) {
    main(String(data).trim());
});
/**** Ignore above this line. ****/

function main(input) {
    // Split the words read as input into an array of words
    var array = input.split(new RegExp("[ \n]+"));

    // Print array
    console.log(array);

    // Print each of its elements on a new line
    for (let value of array) {
        console.log(value);
    }
}
```

Input
```js
hi bye 
hello goodbye
```

Output
```js
[ 'hi', 'bye', 'hello', 'goodbye' ]
hi
bye
hello
goodbye
```

In this code, we iterate over the set of _Key-Value_ pairs in a _Map_, first printing each _Key-Value_ pair and then printing each individual _Key_ and its paired _Value_.

```js
'use strict';

let actress = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
]);

// Print each Key-Value pair in the map
for (let info of actress) {
    console.log(info);
}

// Print each Key and Value as "Key: Value"
console.log();
for (let info of actress) {
    console.log(info[0] + ": " + info[1]);
}
```

Output
```js
[ 'firstName', 'Julia' ]
[ 'lastName', 'Roberts' ]
[ 'dateOfBirth', 'October 28, 1967' ]
[ 'nationality', 'American' ]
[ 'firstMovie', 'Satisfaction' ]

firstName: Julia
lastName: Roberts
dateOfBirth: October 28, 1967
nationality: American
firstMovie: Satisfaction
```