# [Button Containers in JavaScript](https://www.hackerrank.com/challenges/js10-buttons-container/topics)

We want to create four buttons and lay them out in the form of a `2 x 2` grid. To do this, we'll define a button container to contain the four buttons and then set the width of the container and the buttons in such a way that only two buttons can be contained in each row of the container.

## Creating a Button Container
We use the HTML `div` tag to section off (or create a division in) a page. Any items between the `<div>` and `</div>` tags are contained within the _div_.

Consider the following HTML code:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        
        <style>
            /* Style for the 'buttonContainer' class */
            .buttonContainer {
                width: 148px;
            }
            /* Style for 'buttonClass' elements inside a 'buttonContainer' 
            
               We can think of the '>' combinator as a sort of binary operator:
               the syntax 'parent > child' specifies that we're selecting ONLY 
               elements of type 'child' that are within elements of type 'parent'. 
            */
            .buttonContainer > .buttonClass {
                    width: 72px;
                    height: 48px;
                    font-size: 16px;
            }
        </style>
    </head>
    
    <body>
        <div id="btns" class="buttonContainer">
            <button id="btn1" class="buttonClass">1</button>
            <button id="btn2" class="buttonClass">2</button>
            <button id="btn3" class="buttonClass">3</button>
            <button id="btn4" class="buttonClass">4</button>
        </div>
    </body>
</html>
```

The code above generates the following page:

![Code generated](https://s3.amazonaws.com/hr-challenge-images/0/1457036943-d1c2367330-ScreenShot2016-03-04at1.57.40AM.png)

In this image, the _gray_ background denotes the window and the _green_ background denotes the button container.

## Scaling Button Layout
Setting fixed widths for our container and buttons to ensure they're laid out in a `2 x 2` grid only works if we know the width of the screen it's being viewed on. To ensure our buttons are laid out exactly how we want them to be regardless of who's viewing them, we can set the width of our elements relative to the width of the document body (i.e., screen).

Consider the following HTML code:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        
        <style>
            .buttonContainer {
                width: 20%;
            }

            .buttonContainer > .buttonClass {
                width: 33%;
                height: 48px;
                font-size: 16px;
            }
        </style>
    </head>
    
    <body>
        <div id="btns" class="buttonContainer">
            <button id="btn1" class="buttonClass">1</button>
            <button id="btn2" class="buttonClass">2</button>
            <button id="btn3" class="buttonClass">3</button>
            <button id="btn4" class="buttonClass">4</button>
        </div>
    </body>
</html>
```

The code above generates the following page:

![Generated code](https://s3.amazonaws.com/hr-challenge-images/0/1457036954-c509c3f65b-ScreenShot2016-03-04at1.58.21AM.png)

Observe that:

- We set the `width` property of our _button container_ to `20%` of the screen width.
- We set the `width` property of our individual _buttons_ relative to the width of our _button container_. This means that if we increase the width of our _buttons_ from `33%` to `100%`, then the width of each _button_ will be equal to the width of the _button container_.

These specifications ensure our grid scales properly regardless of the size of the screen displaying it.

In this code, we set the width of each _button_ within a _button container_ to be `100%` (i.e., the width of the container).

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        
	    <style>
	        .buttonContainer {
	            width: 20%;
	        }

	        .buttonContainer > .buttonClass {
	            width: 100%;
	            height: 48px;
	            font-size: 16px;
	        }
        </style>
    </head>
    
    <body>
        <div id="btns" class="buttonContainer">
            <button id="btn1" class="buttonClass">1</button>
            <button id="btn2" class="buttonClass">2</button>
            <button id="btn3" class="buttonClass">3</button>
            <button id="btn4" class="buttonClass">4</button>
        </div>
    </body>
</html>
```

The code above generates the following page:

![Generatd code](https://s3.amazonaws.com/hr-challenge-images/0/1457036970-4c288a5587-ScreenShot2016-03-04at1.58.41AM.png)