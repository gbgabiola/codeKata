# [Regular Expressions in JavaScript](https://www.hackerrank.com/challenges/js10-regexp-1/topics)

A _Regular Expression_, or _RegEx_, is a _pattern_ used to match character combinations in a string. In JavaScript, regular expressions are also objects. We'll start by giving some basic examples, and then explain the syntax needed to construct and understand RegExes in further detail.

## Creating a Regular Expression
A regular expression consists of a _pattern string_ and, potentially, a _flag_ specifying further detail on how the pattern should be matched. We construct regular expressions by using _regular expression literals_ or _RegExp_ class objects.

## Regular Expression Patterns
We generally construct RegEx patterns using the basic characters we wish to match (e.g., `abc`), or a combination of basic and special characters (e.g., `ab\*c` or `(\d+)\.\d\*`).

#### Regular Expression Literal
A regular expression literal is a RegEx pattern encosed within forward slashes:

```js
const re = /ab+c/;
```

This RegEx above matches the character `a`, followed by one or more instances of the character `b`, followed by the character `c`.

#### _RegExp_ Objects
We can write a regular expression string and pass it as an argument to the _RegExp_ constructor:

```js
const re = new RegExp('ab+c');
```

## Flags
To create a _RegExp_ object, we use this syntax:

```js
new RegExp(pattern[, flags])
```

To create a regular expression literal, we use this syntax:

```js
/pattern/flags
```

If specified, flags can have any combination of the following values:

- _g_: global match.
- _i_: ignore case.
- _m_: multiline. Treats beginning (^) and end ($) characters as working over multiple lines.
- _u_: unicode. Treat pattern as a sequence of unicode code points.
- _y_: sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string.

## Special Characters in Regular Expressions
- _Character Classes_
- _Character Sets_
- _Alteration_
- _Boundaries_
- _Grouping and back references_
- _Quantifiers_
- _Assertions_

## Character Classes
This is not a class in the traditional sense, but rather a term that refers to a set of one or more characters that can be used to match a single character from some input string. Here are the basic forms:

- Enclosed within square brackets. Specify the what you'd like your expression to match within square brackets; for example, [a-f] will match any lowercase `a` through `f` character.
- Predefined: These consist of a backslash character (`\`) followed by a letter. The table below shows some predefined character classes and the characters they match.

| Character   | Matches                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `.`         | The period matches any single character, except line terminators (e.g., a newline).                                |
| `\d`        | A single digit character (i.e., `[0-9]`).                                                                          |
| `\D`        | A single non-digit character (i.e., `[^0-9]`).                                                                     |
| `\w`        | A single alphanumeric word character, including the underscore (i.e., `[A-Za-z0-9_]`).                             |
| `\W`        | A single non-word character (i.e., `[^A-Za-z0-9_]`).                                                               |
| `\s`        | A single whitespace character. This includes space (), tab (`\t`), form feed, line feed, and other Unicode spaces. |
| `\S`        | A single non-whitespace character (i.e., `[^\w]`).                                                                 |

## Character Sets
- The character set `[abcd]` will match any one character from the set {`a`, `b`, `c`, `d`}. This is equivalent to `[a-d]`.
- The character set `[^abcd]`: Matches anything other than the enclosed characters. This is equivalent to `[^a-d]`.

#### Alteration
We use the `|` symbol to match one thing or the other. For example, `a | b` matches either `a` or `b`.

#### Boundaries
| Character   | Matches                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `^`         | Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. |
| `$`         | Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.      |
| `\b`        | A zero-width word boundary, such as between a letter and a space.                                                        |
| `\B`        | Matches a zero-width non-word boundary, such as between two letters or between two spaces.                               |

#### Grouping and back references
_(a)_: Matches a and remembers the match. These are called capturing groups.

_(?:a)_: Matches a but does not remember the match. These are called non-capturing groups.

_\n_: Here n is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression.

#### Quantifiers
_a*_: Matches the preceding item a, 0 or more times.

_a+_: Matches the preceding item a, 1 or more times.

_a?_: Matches the preceding item a, 0 or 1 time.

_a{n}_: Here n is a positive integer. Matches exactly n occurrences of the preceding item a.

_a{n, }_: Here n is a positive integer. Matches at least n occurrences of the preceding item a.

_a{n, m}_: Here n and m are positive integers. Matches at least n and at most m occurrences of the preceding item a.

#### Assertions
_a(?=b)_: Matches a only if a is followed by b.

_a(?!b)_: Matches a only if a is not followed by b.

#### Working with Regular Expressions
Regular expressions are used with the RegExp methods:

- _test_
- _exec_

and with the String methods:

- _match_
- _search_
- _split_
- _replace_

#### The _test_ Method
The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.

```js
// Test whether 'learn' is contained at the very beginning of a string

var re = /^learn/;
var str1 = 'learn regular expressions';
var str2 = 'write regular expressions';

console.log(re.test(str1));
console.log(re.test(str2));
```

Output
```js
true
false
```

#### The _exec_ Method
The exec() method executes a search for a match in a specified string. Returns a result array or null.

```js
// Match 'quick brown' followed by 'jumps', ignoring characters in between
// Remember 'brown' and 'jumps'
// Ignore case

var re = /quick\s(brown).+?(jumps)/ig;
var str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
var res = re.exec(str);

console.log(res);
console.log();

// The result object contains following information:
// 1. [0] is the full string of characters matched
// 2. [1], ...[n] is the parenthesized substring matches, if any. The number of possible parenthesized substrings is unlimited.
// 3. index is the 0-based index of the match in the string.
// 4. input is the original string.

console.log('string of characters matched = ' + res[0]);
console.log('first parenthesized substring match = ' + res[1]);
console.log('second parenthesized substring match = ' + res[2]);
console.log('index of the match = ' + res.index);
console.log('original string = ' + res.input);
```

Output
```js
[ 'Quick Brown Fox Jumps',
  'Brown',
  'Jumps',
  index: 4,
  input: 'The Quick Brown Fox Jumps Over The Lazy Dog.' ]

string of characters matched = Quick Brown Fox Jumps
first parenthesized substring match = Brown
second parenthesized substring match = Jumps
index of the match = 4
original string = The Quick Brown Fox Jumps Over The Lazy Dog.
```

## Match
The match() method retrieves the matches when matching a string against a regular expression.

```
Find 'Chapter', followed by `$1$` or more numeric characters, followed by a decimal point, followed by a zero or more numeric characters, and use a flag to specify that the results are *case-insensitive*.
```

```js
var re = /see (chapter \d+(\.\d)*)/i;
var str = 'For more information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3';

console.log(str.match(re));
```

Output
```js
[ 'see Chapter 3.4.5.1',
  'Chapter 3.4.5.1',
  '.1',
  index: 45,
  input: 'For more information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3' ]
```

## Search
The search() method executes a search for a match between a regular expression and this String object. If successful, search() returns the index of the first match of the regular expression inside the string. Otherwise, it returns -1.

Check whether or not a string contains the word 'learn'.

```js
const re = /learn/;
const str1 = 'Today, we\'ll learn about regular expressions.';
const str2 = 'Tomorrow, we\'ll write regular expressions '
            + 'and learn some complex expressions.';
const str3 = 'We\'re all done now!';

console.log(str1);
console.log('A search for', re, 'returns', str1.search(re), '\n');
console.log(str2);
console.log('A search for', re, 'returns', str2.search(re), '\n');
console.log(str3);
console.log('A search for', re, 'returns', str3.search(re));
```

Output
```js
Today, we'll learn about regular expressions.
A search for /learn/ returns 13 

Tomorrow, we'll write regular expressions and learn some complex expressions.
A search for /learn/ returns 46 

We're all done now!
A search for /learn/ returns -1
```

## Split
The split() method splits a String object into an array of strings by separating the string into substrings. Separator specifies the character(s) to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.

Split a name string at the space separating the first and last names.

```js
const name = 'Julia Roberts';
const res = name.split(' ');

console.log('The split array:', res);
console.log('First Name:', res[0]);
console.log('Last Name:', res[1]);
```

Output
```js
The split array: [ 'Julia', 'Roberts' ]
First Name: Julia
Last Name: Roberts
```

#### Replace
The `replace(pattern, replacement)` method returns a new string where some (or all) occurrences of a matched `pattern` have been replaced with a `replacement` substring.

- `pattern`: This value can be a string or a _RegExp_ object to match against the calling string.
- `replacement`: This value can be a substring to replace the match with, or it can be a function to invoke that generates the replacement substring.

In this example, we replace any occurrence of the substring 'RegExp' with 'Regular Expression'

```js
const re = /RegExp/;
const myString = 'We\'re learning about RegExps.';
const replacementString = 'Regular Expression';

console.log(myString);
console.log(myString.replace(re, replacementString));
```

Output
```js
We're learning about RegExps.
We're learning about Regular Expressions.
```

## Example
Find a _substring_ of length greater than `1` that starts _and_ ends with same character.

```js
const re = /(.).*\1/;

const str1 = 'wxyz';
const str2 = 'wxyzw';
const str3 = 'wxyzx';
const str4 = 'wxywz';

console.log('substring:', str1.match(re));
console.log('substring:', str2.match(re)[0]);
console.log('substring:', str3.match(re)[0]);
console.log('substring:', str4.match(re)[0]);
```

Output
```js
substring: null
substring: wxyzw
substring: xyzx
substring: wxyw
```

Let's break down the regular expression `(.).*\1`:

1. `(.)` captures _any character_.
2. `.*` stipulates that the captured character must followed by zero or more occurrences of any character.
3. `\1` is a backreference to the first _capture group_ in our expression (i.e., `(.)`). It stipulates that the character following whatever we matched in step `2` must match whatever was captured inside the parentheses in step `1`.