# Day 2: Operators

## Objective 
In this challenge, you'll work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video!

## Task 
Given the <em>meal price</em> (base cost of a meal), tip percent (the percentage of the <em>meal price</em> being added as tip), and <em>tax percent</em> (the percentage of the <em>meal price</em> being added as tax) for a meal, find and print the meal's <em>total cost</em>.

**Note:** Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!

## Input Format

There are <strong>3</strong> lines of numeric input: 
The first line has a double, <em>mealCost</em> (the cost of the meal before tax and tip). 
The second line has an integer, <em>tipPercent</em> (the percentage of <em>mealCost</em> being added as tip). 
The third line has an integer, <em>taxPercent</em> (the percentage of <em>mealCost</em> being added as tax).

## Output Format

Print The total meal cost is totalCost dollars., where <em>totalCost</em> is the rounded integer result of the entire bill (<em>mealCost</em> with added tax and tip).

## Sample Input

12.00
20
8

## Sample Output

The total meal cost is 15 dollars.

## Explanation

Given: 
<em>mealCost</em> = 12, <em>tipPercent</em> = 20, <em>taxPercent</em> = 8 

## Calculations: 
<em>tip</em> = 12 x 20/100 = 2.4
<em>tax</em> = 12 x 8/100 = 0.96
<em>totalCost</em> = <em>mealCost</em> + <em>tip</em> + <em>tax</em> = 12 + 2.4 + 0.96 = 15.36
<em>round(totalCost)</em> = 15
 
We round  to the nearest dollar (integer) and then print our result:

The total meal cost is 15 dollars.
