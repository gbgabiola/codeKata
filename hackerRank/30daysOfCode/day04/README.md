# Day 4: Class vs. Instance

## Objective 
In this challenge, we're going to learn about the difference between a <em>class</em> and an <em>instance</em>; because this is an Object Oriented concept, it's only enabled in certain languages. Check out the <a href="https://www.hackerrank.com/challenges/30-class-vs-instance/tutorial">Tutorial</a> tab for learning materials and an instructional video!

## Task 
Write a <em>Person</em> class with an instance variable, <em>age</em>, and a constructor that takes an integer, <em>initialAge</em>, as a parameter. The constructor must assign <em>initialAge</em> to <em>age</em> after confirming the argument passed as <em>initialAge</em> is not negative; if a negative argument is passed as <em>initialAge</em>, the constructor should set <em>age</em> to 0 and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

1. <em>yearPasses()</em> should increase the <em>age</em> instance variable by 1.
2. <em>amIOld()</em> should perform the following conditional actions:
  * If <em>age</em> < 13, print You are young..
  * If <em>age</em> >= 13 and <em>age</em> < 18, print You are a teenager..
  * Otherwise, print You are old..
  
To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your <em>Person</em> class is in the <em>main</em> method. Don't worry if you don't understand it all quite yet!

**Note:** Do not remove or alter the stub code in the editor.

## Input Format

Input is handled for you by the stub code in the editor.

The first line contains an integer, <em><strong>T<strong></em> (the number of test cases), and the <em><strong>T<strong></em> subsequent lines each contain an integer denoting the <em>age</em> of a Person instance.

## Constraints
  * 1 <= <em><strong>T<strong></em> <= 4
  * -5 <= <em>age</em> <= 30

## Output Format

Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print 2 or 3 lines (depending on whether or not a valid <em>initialAge</em> was passed to the constructor).

## Sample Input

4
-1
10
16
18

## Sample Output

Age is not valid, setting age to 0.
You are young.
You are young.

You are young.
You are a teenager.

You are a teenager.
You are old.

You are old.
You are old.

## Explanation

<em>Test Case 0: initialAge</em> = -1
Because <em>initialAge</em> < 0, our code must set <em>age</em> to 0 and print the "Age is not valid..." message followed by the young message. Three years pass and <em>age</em> = 3, so we print the young message again.

<em>Test Case 1: initialAge</em> = 10
Because <em>initialAge</em> < 13, our code should print that the person is young. Three years pass and <em>age</em> = 13, so we print that the person is now a teenager.

<em>Test Case 2: initialAge</em> = 16
Because 13 <= <em>initialAge</em> < 18, our code should print that the person is a teenager. Three years pass and <em>age</em> = 19, so we print that the person is old.

<em>Test Case 3: initialAge</em> = 18
Because <em>initialAge</em> >= 18, our code should print that the person is old. Three years pass and the person is still old at <em>age</em> = 21, so we print the old message again.

**The extra line at the end of the output is supposed to be there and is trimmed before being compared against the test case's expected output. If you're failing this challenge, check your logic and review your print statements for spelling errors.**