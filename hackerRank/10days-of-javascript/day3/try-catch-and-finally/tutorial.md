# [String Basics](https://www.hackerrank.com/challenges/js10-try-catch-and-finally/topics)

## JavaScript Strings
These are chains of zero or more Unicode characters (i.e., letters, digits, and punctuation marks) used to represent text.

We denote string literals by enclosing them in single (`'`) or double (`"`) quotation marks. Double quotation marks can be contained in strings surrounded by single quotation marks (e.g., `'"'` evaluates to `"`), and single quotation marks can be contained in strings surrounded by double quotation marks (e.g., `"'"` evaluates to `'`). In addition, you can also enclose a single or double quotation within another quotation of its same type by preceding the quotation you wish to have interpreted literally with the escape character (`\`).

Each string has a property called `String.length` denoting the length of, or number of characters in, the string. For example, if we write `var s = "Hello."`, the value of `s.length` is `6`.

```js
var input = "";
process.stdin.on('data', function (data) {
    input = String(data).trim();
    main();
});
/** Ignore above this line. **/

function main() {
    console.log("\"" + input + "\"");
    console.log('\'' + input + '\'');
    console.log(input.length);
}
```

Input
```js
HackerRank

```

Ouput
```js
"HackerRank"
'HackerRank'
10
```

## String Constructor
To create a new string, we use the syntax `String(value)` where `value` denotes the data we want to turn into a string.

```js
var myNumber = 4;
var myString = String(myNumber);

console.log(myNumber + " is a " + typeof myNumber);
console.log(myString  + " is a " + typeof myString)
```

Output
```js
4 is a number
4 is a string
```

Observe that the value `4` assigned to the `MyNumber` variable is typed as a number, and that the `myString` variable is typed as a string because we passed `MyNumber` to the string constructor.

## Methods
Here are some frequently used methods that operate on strings:

### `String.charAt()`
Returns the character at the specified index. For example:

```js
var input = "";
process.stdin.on('data', function (data) {
    input = data;
    main();
});
function readLine() { return input; }
/** Ignore above this line. **/
var s = "HackerRank";
var i = +(readLine());
console.log(s.charAt(i));
```

Input
```js
6
```

![topic string](https://s3.amazonaws.com/hr-assets/0/1516119799-559ef4eb7c-js10_topic_strings.png)

### `String.concat()`
Returns a new string consisting of the calling string concatenated with another string passed as an argument. For example:

```js
var s = "Hacker";
var t = "Rank";
var u = s.concat(t);
console.log(s + " " + t);
console.log(u);
```

Output
```js
Hacker Rank
HackerRank
```

### `String.includes()`
Returns a boolean denoting whether a string passed as an argument exists within the calling string. For example:

```js
var s = "HackerRank"; 
console.log(s.includes() + " " + s.includes(""));
console.log(s.includes("hack") + " " + s.includes("Hack"));
```

Output
```js
false true
false true
```

### `String.endsWith()`
Returns a boolean denoting whether the calling string ends with the characters of another string passed as an argument. For example:

```js
var s = "HackerRank"; 
console.log(s.endsWith() + " " + s.endsWith(""));
console.log(s.endsWith("rank") + " " + s.endsWith("Rank"));
```

Output
```js
false true
false true
```

### `String.indexOf()`
Returns an integer denoting the index within the calling String object of the _first_ occurrence of the given argument:

- If the argument isn't found in the string or no argument was passed to the function, it returns `-1`.
- If an integer is passed as a second argument, it will start searching the string from the index denoted by the integer.

For example:
```js
var s = "HackerRank";
console.log(
    s.indexOf("a") + " " 
    + s.indexOf("a", s.length) + " " 
    + s.indexOf("a", 6)
);
console.log(
    s.indexOf("an") + " " 
    + s.indexOf("x") + " " 
    + s.indexOf("")
);
```

Output
```js
1 -1 7
7 -1 0
```

### `String.lastIndexOf()`
Returns an integer denoting the index within the calling String object of the _last_ occurrence of the given argument:

- If the argument isn't found in the string or no argument was passed to the function, it returns `-1`.
- If an integer is passed as a second argument, it will search the string backward starting from the index denoted by the integer.

For example:
```js
var s = "HackerRank";
console.log(
    s.lastIndexOf("a") + " " 
    + s.lastIndexOf("a", s.length) + " " 
    + s.lastIndexOf("a", 6)
);
console.log(
    s.lastIndexOf("ac") + " " 
    + s.lastIndexOf("x") + " " 
    + s.lastIndexOf("")
);
```

Output
```js
7 7 1
1 -1 10
```

### `String.match()`
Match a regular expression passed as an argument against the calling string. If a match is found, it returns an object with three properties: the matched substring, the `index` it was found at, and the `input` (i.e., the initial string); if no match is found, it returns null. For example:

```js
var s = "HackerRank";
console.log(s.match());
console.log(s.match("[a-z]+"));
```

Ouput
```js
[ '', index: 0, input: 'HackerRank' ]
[ 'acker', index: 1, input: 'HackerRank' ]
```

### `String.normalize()`
Returns a string containing the Unicode Normalization Form of the calling string's value. The argument must be one of the following:

- `"NFC":` Normalization Form Canonical Composition. This is the default in the event that no argument is given.
- `"NFD":` Normalization Form Canonical Decomposition.
- `"NFKC":` Normalization Form Compatibility Composition.
- `"NFKD":` Normalization Form Compatibility Decomposition.

For example:
```js
var s = "HackerRank";
console.log(s.normalize());
console.log(s.normalize("NFKC"));
```

Output
```js
HackerRank
HackerRank
```

### `String.repeat()`
Returns a string consisting of the elements of the calling String object repeated some number of times (given as an integer argument). If no argument or a `0` argument are given, then it returns the empty string. For example:

```js
var s = "HackerRank";
console.log(s.repeat () + "x" + s.repeat(0));
console.log(s.repeat(2));
```

Output
```js
x
HackerRankHackerRank
```

### `String.replace()`
Finds a match between a regular expression and a string, then returns a string where the first matched substring is replaced with a new substring. If no match is found, the returned string is the same as the original string. For example:

```js
var s = "HackerRank";
console.log(s.replace() + " " + s.replace("a", ""));
```

Output
```js
HackerRank HckerRank
```

### `String.search()`
Executes the search for a match between a regular expression and a specified string, then returns the index of the first character of the first match. For example:

```js
var s = "HackerRank";
console.log(s.search() + " " + s.search("[a-z]"));
console.log(s.search("a") + " " + s.search("an"));
```

Output
```js
0 1
1 7
```

### `String.slice()`
Extracts a section of a string and returns it as a new string. The extracted section depends on the arguments passed to the function:

- If no arguments are passed to the function, it returns the entire string.
- If one integer argument, `i`, is passed to the function, it returns a substring starting at index  and ending at the end of the string.
- If two integer arguments, `i` and `j`, are passed to the function, it returns a substring consisting of characters in the range `[i, j)`; in other words, this is a substring starting at index `i` and ending at `j - 1`. For example:

If one (or both) of the arguments passed to this function is negative, then the index corresponding to that argument is calculated as `String.length` minus the given argument. For example:

```js
var s = "HackerRank";
console.log(s.slice(0, 6) + " " + s.slice(6));
console.log(
    s.slice() + " " 
    + s.slice(-4, 8) + " " 
    + s.slice(-4, -2)
);
```

Output
```js
Hacker Rank
HackerRank Ra Ra
```

### `String.split()`
Splits a String object into an array of strings by separating the string into substrings:

- If no argument is given, it returns an array containing the original string.
- If the empty string is passed as an argument, it returns an array of the string's individual letters.
- If a string consisting of one or more letters is passed as an argument, it splits the string at each occurrence of that string and returns an array of the split substrings.

For example:

```js
var s = "HackerRank";
console.log(s.split(""));
console.log(s.split("k"));
console.log(s.split());
```

Output
```js
[ 'H', 'a', 'c', 'k', 'e', 'r', 'R', 'a', 'n', 'k' ]
[ 'Hac', 'erRan', '' ]
[ 'HackerRank' ]
```

### `String.startsWith()`
Returns a boolean denoting whether a string begins with the characters of another string passed as an argument. For example:

```js
var s = "HackerRank";
console.log(s.startsWith("Hack"));
console.log(s.startsWith("Hacks"));
```

Output
```js
true
false
```

### `String.substr()`
Returns a substring consisting of characters in a given range, depending on the arguments passed to the function:

- If no arguments are passed to the function, it returns the entire string.
- If one integer argument, `i`, is passed to the function, it returns a substring starting at index `i` and ending at the end of the string.
- If two integer arguments, `i` and `j`, are passed to the function, it returns a substring consisting of characters in the range `[i, j)`; in other words, this is a substring starting at index `i` and ending at `j - 1`.

For example:
```js
var s = "HackerRank";
console.log(s.substr());
console.log(s.substr(0, 6) + " " + s.substr(6));
```

Output
```js
HackerRank
Hacker Rank
```

### `String.substring()`
Returns a substring consisting of characters in a given range, depending on the arguments passed to the function:

- If no arguments are passed to the function, it returns the entire string.
- If one integer argument, `i`, is passed to the function, it returns a substring starting at index `i` and ending at the end of the string.
- If two integer arguments, `i` and `j`, are passed to the function, it returns a substring consisting of characters in the range `[i, j)`; in other words, this is a substring starting at index `i` and ending at `j - 1`.

For example:
```js
var s = "HackerRank";
console.log(s.substring());
console.log(s.substring(0, 6) + " " + s.substring(6));
```

Output
```js
HackerRank
Hacker Rank
```

### `String.toLowerCase()`
Returns the calling string's value, converted to lowercase letters. For example:

```js
var s = "HackerRank";
s = s.toLowerCase();
console.log(s);
```

Output
```js
hackerrank
```

### `String.toUpperCase()`
Returns the calling string's value, converted to uppercase letters. For example:

```js
var s = "HackerRank";
s = s.toUpperCase();
console.log(s);
```

Output
```js
HACKERRANK
```

### `String.trim()`
Returns the string with the whitespace trimmed from its beginning and end. This is part of the _ECMAScript 5_ standard. For example:

```js
var s = "    HackerRank    ";
console.log("Original Length: " + s.length);
s = s.trim();
console.log("Trimmed Length: " + s.length);
```

Output
```js
Original Length: 18
Trimmed Length: 10
```

### `String.trimLeft()`
Returns the string with the whitespace trimmed from its left side. For example:

```js
var s = "    HackerRank    ";
console.log("Original Length: " + s.length);
s = s.trimLeft();
console.log("Trimmed Length: " + s.length);
```

Output
```js
Original Length: 18
Trimmed Length: 14
```

### `String.trimRight()`
Returns the string with the whitespace trimmed from its right side. For example:

```js
var s = "    HackerRank    ";
console.log("Original Length: " + s.length);
s = s.trimRight();
console.log("Trimmed Length: " + s.length);
```

Output
```js
Original Length: 18
Trimmed Length: 14
```

- [Video: Try, Catch, and Finally](https://www.youtube.com/embed/Vv1CLj4vLjE?enablejsapi=1&version=3&autoplay=1&rel=0&origin=https%3A%2F%2Fwww.hackerrank.com)