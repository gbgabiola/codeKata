# [Simple Calculator in JavaScript](https://www.hackerrank.com/challenges/js10-binary-calculator/topics)

## Responding to Multiple Click Events
The image below depicts four buttons laid out in a `2 x 2` grid:

![2 x 2 grid](https://s3.amazonaws.com/hr-challenge-images/0/1456957577-d816abe58e-ScreenShot2016-03-03at3.52.07AM.png)

Now, let's write some code so that, when clicked, the clicked button's `innerHTML` increments by `1`.

This code uses separate _onclick_ functions for each button that increment the button's `innerHTML` when it's clicked.

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            .buttonContainer {
                width: 148px;
            }

            .buttonContainer > .buttonClass {
                width: 72px;
                height: 48px;
                font-size: 16px;
            }
        </style>
    </head>
    
    <body>
        <div id='btns' class='buttonContainer'>
            <button id='btn1' class='buttonClass'>1</button>
            <button id='btn2' class='buttonClass'>2</button>
            <button id='btn3' class='buttonClass'>3</button>
            <button id='btn4' class='buttonClass'>4</button>
        </div>

        <script>
            document.getElementById('btn1').onclick = function() {
                document.getElementById('btn1').innerHTML++;
            };

            document.getElementById('btn2').onclick = function() {
                document.getElementById('btn2').innerHTML++;
            };
            
            document.getElementById('btn3').onclick = function() {
                document.getElementById('btn3').innerHTML++;
            };
            
            document.getElementById('btn4').onclick = function() {
                document.getElementById('btn4').innerHTML++;
            };
        </script>
    </body>
</html>
```

## Using a Single Function for All Buttons
We can approach this in a more elegant way by using the _same_ function to increment the `innerHTML` for whichever button is clicked.

#### Approach: _onclick_
The function uses the click event's `target` or `srcElement` properties to get the `id` of the clicked button and modify its `innerHTML`.

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            .buttonContainer {
                width: 148px;
            }

            .buttonContainer > .buttonClass {
                width: 72px;
                height: 48px;
                font-size: 16px;
            }
        </style>
    </head>
    
    <body>
        <div id='btns' class='buttonContainer'>
            <button id='btn1' class='buttonClass'>1</button>
            <button id='btn2' class='buttonClass'>2</button>
            <button id='btn3' class='buttonClass'>3</button>
            <button id='btn4' class='buttonClass'>4</button>
        </div>

        <script>
            function action(e) {
                /* Older IE browsers have a srcElement property,
                but other browsers have a 'target' property; 
                Set btn to whichever exists. */
                var btn = e.target || e.srcElement;
                
                /* Get the clicked element's innerHTML */
                document.getElementById(btn.id).innerHTML++;
            }
            
            /* Set each button to call action(e) when clicked */
            document.getElementById('btn1').onclick = action;
            document.getElementById('btn2').onclick = action;
            document.getElementById('btn3').onclick = action;
            document.getElementById('btn4').onclick = action;
        </script>
    </body>
</html>
```

#### Approach: _Event Listener_
The function uses the click event's `target` or `srcElement` properties to get the `id` of the clicked button and modify its `innerHTML`.

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            .buttonContainer {
                width: 148px;
            }

            .buttonContainer > .buttonClass {
                width: 72px;
                height: 48px;
                font-size: 16px;
            }
        </style>
    </head>
    
    <body>
        <div id='btns' class='buttonContainer'>
            <button id='btn1' class='buttonClass'>1</button>
            <button id='btn2' class='buttonClass'>2</button>
            <button id='btn3' class='buttonClass'>3</button>
            <button id='btn4' class='buttonClass'>4</button>
        </div>

        <script>
            /* Parameter 'e' is the click Event */
            function action(e) {
                /* Older IE browsers have a srcElement property,
                but other browsers have a 'target' property; 
                Set btn to whichever exists. */
                var btn = e.target || e.srcElement;
                
                /* Get the clicked element's innerHTML */
                document.getElementById(btn.id).innerHTML++;
            }
            
            /* Add a click event listener that calls action(e) when clicked */
            document.getElementById('btn1').addEventListener('click', action);
            document.getElementById('btn2').addEventListener('click', action);
            document.getElementById('btn3').addEventListener('click', action);
            document.getElementById('btn4').addEventListener('click', action);
        </script>
    </body>
</html>
```

## Resources and Tips
This section reviews some functions that are helpful in completing the Binary Calculator challenge.

#### The `eval` Function
We can use this function to evaluate a string representing an expression. If the string consists of base-`10` integers and mathematical operators, this function calculates the result of the mathematical expression.

```js
const expression = '5+2-3';
console.log( eval(expression) );
```

Output
```js
4
```

#### Binary Numbers to Integer Strings
To convert a non-base-`10` number, `num`, of radix `r` to a base-`10` integer string, we use the syntax `num.toString(r)`.

Sample conversions from non-base-`10` numeric strings to base-`10` integer strings.

```js
const two = '10';
console.log( parseInt(two, 2) );

const three = '11';
console.log( parseInt(three, 2) );

const five = '101';
console.log( parseInt(five, 2) );

const nine = three;
console.log( parseInt(nine, 8) );
```

Output
```js
2
3
5
9
```

#### Integer Division
Because we're implementing a simple calculator with no decimal values, our calculator must perform _integer division_. We can use the `Math.floor` function to ensure that our calculator discards any remainders.

```js
const result = 3 / 2; 
console.log( result );
console.log( Math.floor(result) );
```

Output
```js
1.5
1
```