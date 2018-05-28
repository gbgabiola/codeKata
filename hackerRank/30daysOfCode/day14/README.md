# [Day 14: Scope](https://www.hackerrank.com/challenges/30-scope/problem)

## Objective 
Today we're discussing scope. Check out the Tutorial tab for learning materials and an instructional video!

The absolute difference between two integers, a and b, is written as a - b. The maximum absolute difference between two integers in a set of positive integers, _elements_, is the largest absolute difference between any two integers in _elements_.

The Difference class is started for you in the editor. It has a private integer array (_elements_) for storing _N_ non-negative integers, and a public integer (_maximumDifference_) for storing the maximum absolute difference.

## Task 
Complete the Difference class by writing the following:

* A class constructor that takes an array of integers as a parameter and saves it to the _elements_ instance variable.
* A computeDifference method that finds the maximum absolute difference between any 2 numbers in _N_ and stores it in the _maximumDifference_ instance variable.

## Input Format

You are not responsible for reading any input from stdin. The locked Solution class in your editor reads in 2 lines of input; the first line contains _N_, and the second line describes the _elements_ array.

## Constraints
* 1 <= _N_ <= 10
* 1 <= _elements_[i] <= 100, where 0 <= _i_ <= _N_ - 1

## Output Format

You are not responsible for printing any output; the Solution class will print the value of the _maximumDifference_ instance variable.

## Sample Input

```
3
1 2 5
```

## Sample Output

```
4
```

## Explanation

The scope of the _elements_ array and _maximumDifference_ integer is the entire class instance. The class constructor saves the argument passed to the constructor as the _elements_ instance variable (where the computeDifference method can access it).

To find the maximum difference, computeDifference checks each element in the array and finds the maximum difference between any 2 elements: |1 - 2| = 1
|1 - 5| = 4
|2 - 5| = 3
 
The maximum of these differences is 4, so it saves the value 4 as the _maximumDifference_ instance variable. The locked stub code in the editor then prints the value stored as _maximumDifference_, which is 4.

## No JavaScript Available, so in order for me to finish 30DaysOfCode I answered Python for the mean time.