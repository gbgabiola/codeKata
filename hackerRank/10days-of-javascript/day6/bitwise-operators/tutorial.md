# [Bitwise Operators in JavaScript](https://www.hackerrank.com/challenges/js10-bitwise/topics)

## Bitwise Operators
Before discussing bitwise operators, let's review the following:

- Binary numbers
- Base-`10` (decimal number) to base-`2` (binary number) conversions
- Base-`2` (binary number) to base-`10` (decimal number) conversions
- Representing negative base-`10` numbers in base-`2`

Recommended Article:
- [Binary Numbers and Bit Manipulation](https://www.hackerrank.com/topics/bit-manipulation/)

This article provides some additional background on these topics.

### Binary Number Basics
- The binary, or base-`2`, numeral system is a way for us to express numbers. It's called binary because it only uses _two_ symbols, `0` and `1`, to express these numbers. Examples of binary numbers are `1011`, `100011`, and `111`.
- The number of symbols in a number system is called its _base_ or _radix_. This is why we often see binary numbers referred to as base-`2` (because each digit is in `{0, 1}`), and decimal numbers referred to as base-`10` (because each digit is in `{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}`).
- We use the notation `(?)`<sub>b</sub> to discuss numbers with different radixes, where `?` is the number and `b` is the base. For example, `(1101)`<sub>2</sub> is the binary equivalent of the decimal number `(13)`<sub>10</sub>.
- Each digit in a binary number is called a _bit_.

### Base-`10` (Decimal) to Base-`2` (Binary) Conversions
We use the following algorithm to convert a decimal integer to a binary number:

1. Take the decimal integer, divide it by `2`, and record the quotient (the number of times `2` divided the integer) and the remainder (the number of units left over from the division, which will always be `0` or `1`).
2. Repeat step `1` on the quotient until the quotient becomes `0`.
3. Look at the sequence of remainders. The remainder from the first division operation corresponds to the binary number's _least significant bit_ (LSB) and the remainder from the last division operation corresponds to the number's _most significant bit_ (MSB). To get our binary number, we simply need to concatenate these remainder bits from most to least significant.

**Examples**

The table below depicts the conversion from `(71)`<sub>10</sub> to `(?)`<sub>2</sub>:

| `n` | `n / 2` | Remainder | Significance |
| --- | ------- | --------- | ------------ |
| 71  | 35      | 1         | Least        |
| 35  | 17      | 1         | &uparrow;    |
| 17  |  8      | 1         | &uparrow;    |
|  8  |  4      | 0         | &uparrow;    |
|  4  |  2      | 0         | &uparrow;    |
|  2  |  1      | 0         | &uparrow;    |
|  1  |  0      | 1         | Most         |

When we concatenate our remainder bits from the bottom up (i.e., _most_ to _least_ significant), we get `(71)`<sub>10</sub>`=> (1000111)`<sub>2</sub>.

The table below depicts the conversion from `(129)`<sub>10</sub> to `(?)`<sub>2</sub>:

| `n` | `n / 2` | Remainder | Significance |
| --- | ------- | --------- | ------------ |
| 129 | 64      | 1         | Least        |
| 64  | 32      | 0         | &uparrow;    |
| 32  | 16      | 0         | &uparrow;    |
| 16  |  8      | 0         | &uparrow;    |
|  8  |  4      | 0         | &uparrow;    |
|  4  |  2      | 0         | &uparrow;    |
|  2  |  1      | 0         | &uparrow;    |
|  1  |  0      | 1         | Most         |

When we concatenate our remainder bits from the bottom up (i.e., _most_ to _least_ significant), we get `(129)`<sub>10</sub> `=> (10000001)`<sub>2</sub>.

### Base-`2` (Binary) to Base-`10` (Decimal) Conversions
Let's say we have a binary number with `d` bits we can express as `b`<sub>d-1</sub>`b`<sub>d-2</sub>`b`<sub>d-3</sub>...`b`<sub>1</sub>`b`<sub>0</sub> . We use the following summation to calculate its base-`10` integer value:

`d-1 Symbol 1=0 (b)`<sub>i</sub>`x 2`<sup>i</sup>`)`

Note that `b`<sub>0</sub> is the LSB and `b`<sub>d-1</sub> is the MSB.

**Example**

The table below depicts the conversion from `(111000001)`<sub>2</sub> to `(?)`<sub>10</sub>:

| Significance | `b`<sub>i</sub> | `i` | `2`<sup>i</sup> | `b`<sub>i</sub> `* 2`<sup>i</sup> |
| ------------ | --------------- | --- | --------------- | --------------------------------- |
| Least        | 1               | 0   |   1             |   1                               |
| &uparrow;    | 0               | 1   |   2             |   0                               |
| &uparrow;    | 0               | 2   |   4             |   0                               |
| &uparrow;    | 0               | 3   |   8             |   0                               |
| &uparrow;    | 0               | 4   |  16             |   0                               |
| &uparrow;    | 0               | 5   |  32             |   0                               |
| &uparrow;    | 1               | 6   |  64             |  64                               |
| &uparrow;    | 1               | 7   | 128             | 128                               |
| Most         | 1               | 8   | 256             | 256                               |

When we sum the values of each `b`<sub>i</sub> `* 2`<sup>i</sup>, we get `(111000001)`<sub>2</sub>`=> 1 + 64 + 128 + 256 = (449)`<sub>10</sub>.

### Representing Negative Base-`10` Numbers in Base-`2`
In this explanation, we're representing our integers as `32`-bit signed binary numbers. To represent an integer, `-n`, in binary, we perform the following steps:

1. Find the `32`-bit binary representation of `n`.
2. Take the `1`'s complement. We do this by inverting all the binary number's bits (i.e., every `0` becomes a `1`, and every `1` becomes a `0`).
3. Take the `2`'s complement by adding `1` to the `1`'s complement.

The `2`'s complement is the binary representation of `-n`.

**Examples**

Let's look at the binary representation of `(-12)`<sub>10</sub>:

1. First, let's look at `n = (12)`<sub>10</sub>. When we convert it to binary, we get `(00000000000000000000000000001100)`<sub>2</sub>.
2. The `1`'s complement of `(00000000000000000000000000001100)`<sub>2</sub> is `(11111111111111111111111111110011)`<sub>2</sub>.
3. Then we add `1` to `(11111111111111111111111111110011)`<sub>2</sub> to get `n`'s `2`'s complement, `(11111111111111111111111111110100)`<sub>2</sub>, which is the value of `-n = (-12)`<sub>10</sub>.

Let's look at the binary representation of `(-314)`<sub>10</sub>:

1. `n = (314)`<sub>10</sub>`=> (00000000000000000000000100111010)`<sub>2</sub>
2. `(~314)`<sub>10</sub> `= (11111111111111111111111011000101)`<sub>2</sub> is `n`'s `1`'s complement.
3. `(-314)`<sub>10</sub> `= (~314)`<sub>10</sub> `+ 1 = (11111111111111111111111011000110)`<sub>2</sub> is `n`'s `2`'s complement (i.e., `-n`).

### Bitwise Operation Conventions
Conceptually, the bitwise logical operators work as follows:

- The operands are converted to `32`-bit integers, meaning they're expressed as sequences of `32` zeroes and ones. Any number larger than `32` bits is reduced to `32` bits by cutting off and discarding its excess most significant bits. The example below shows a binary integer before and after it's converted to a `32`-bit integer:

```
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

- Each bit in the first operand is paired with the corresponding bit in the second operand from least to most significant. In other words, the first LSB matches the first LSB, the second LSB matches the second LSB, and so on.

- The operator is applied to each pair of bits so that the resulting number is constructed bitwise (i.e., bit-by-bit).

### Bitwise AND (`&`)
This operator performs the AND operation on each pair of bits. Given two binary numbers, `a` and `b`, the result of an AND operation on the corresponding bits at each position `i` (i.e., `a`<sub>i</sub> `& b`<sub>i</sub>) is `1` if and only if both `a`<sub>i</sub> and `b`<sub>i</sub> are `1`. The truth table for the bitwise AND operation is:

| `a`<sub>i</sub> | `b`<sub>i</sub> | `a`<sub>i</sub> `& b`<sub>i</sub> |
| --------------- | --------------- | --------------------------------- |
|  0              |  0              | 0                                 |
|  0              |  1              | 0                                 |
|  1              |  0              | 0                                 |
|  1              |  1              | 1                                 |

For example, `101 & 110 = 100`.

### Bitwise OR (`|`)
This operator performs the OR operation on each pair of bits. Given two binary numbers,  and , the result of an OR operation on the corresponding bits at each position `i` (i.e., `a`<sub>i</sub> `| b`<sub>i</sub>) is `1` if `a`<sub>i</sub> and/or `b`<sub>i</sub> are `1`. The truth table for the bitwise OR operation is:

| `a`<sub>i</sub> | `b`<sub>i</sub> | `a`<sub>i</sub> `| b`<sub>i</sub> |
| --------------- | --------------- | --------------------------------- |
|  0              |  0              | 0                                 |
|  0              |  1              | 1                                 |
|  1              |  0              | 1                                 |
|  1              |  1              | 1                                 |

For example, `0101 & 0110 = 0111`.

### Bitwise XOR (`^`)
This operator performs the _XOR_ operation on each pair of bits. Given two binary numbers, `a` and `b`, the result of an XOR operation on the corresponding bits at each position `i` (i.e., `a`<sub>i</sub> `^ b`<sub>i</sub>) is `1` if either `a`<sub>i</sub> or `b`<sub>i</sub> is `1` (i.e., the values of the two operands are different). The truth table for the bitwise XOR operation is:

| `a`<sub>i</sub> | `b`<sub>i</sub> | `a`<sub>i</sub> `^ b`<sub>i</sub> |
| --------------- | --------------- | --------------------------------- |
|  0              |  0              | 0                                 |
|  0              |  1              | 1                                 |
|  1              |  0              | 1                                 |
|  1              |  1              | 0                                 |

For example, `0101 ^ 0110 = 0011`.

### Bitwise NOT (`~`)
This operator performs the _NOT_ operation on each pair of bits in a number. Given a binary number, `a`, the NOT operation (i.e., `~ a`) inverts each bit in the number. The truth table for the bitwise NOT operation is:

| `a` | `~ a`|
| --- | ---- |
|  0  |  1   |
|  1  |  0   |

For example, `~ 101 = 010`.

### Additional Examples
Here are some more examples of bitwise operations:

```
// Bitwise AND
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)

// Bitwise OR
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)

// Bitwise XOR
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)

// Bitwise NOT
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```