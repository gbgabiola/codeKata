# [Button Basics in JavaScript](https://www.hackerrank.com/challenges/js10-create-a-button/topics)

In this article, we discuss some basics of writing JS (JavaScript) and [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) code in an [HTML](https://en.wikipedia.org/wiki/HTML) file. Note that we assume a certain level of basic HTML knowledge.

## Templates

#### Basic Format
We use the following template to write JavaScript and CSS code to an HTML file:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        
        <style>
            /* Write CSS styles here */
        </style>
    </head>
    <body>
        <script>
            /* Write JS code here */
        </script>
    </body>
</html>
```

We write our CSS style code between the `<style>` and `</style>` tags, and our JS code between the `<script>` and `</script>` tags.

**Note:** Any text between `<!--` and` -->` is considered to be an _HTML comment_. These comments won't render on the webpage, but we can read them if we view the page's source code. For content between tags that contain actual code (i.e., _style_ and _script_), we enclose comments between `/*` and `*/`.

#### Working with Separate Documents
In an instance where all our code is located in separate files (i.e., we have a `.html` file with our HTML, a `.css` file with our CSS, and a `.js` file with our JS code), we use this template to tell our HTML file where to find the JS and CSS files:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        
        <!-- Link to the style sheet in the 'head' section -->
        <link rel="stylesheet" href="css-file-path" type="text/css">
    </head>
    
    <body>
        <!-- Link to the JS code in the 'body' section -->
        <script src="js-file-path" type="text/javascript">
        </script>
    </body>
</html>
```

Let's look at what this code does:

- By putting `<link rel="stylesheet" href="css-file-path" type="text/css">`, where `css-file-path` is the path of the `.css` file, in the _head_ section (i.e., between the `<head>` and `</head>` tags), we're telling the document to use the style sheet at the location referenced by the `href` attribute.
- By putting` <script src="js-file-path" type="text/javascript">`, where `js-file-path` is the path of the `.js` file, in the _body_ section (i.e., between the `<body>` and `</body>` tags), we're saying that we want to run a script using the JS code at the location referenced by the `src` attribute.

## HTML Buttons
We use the `<button>` tag to create a clickable button that has the following optional attributes:

- `id`: the button's unique identifier within the page
- `class`: the CSS class(es) used to style the button

The text enclosed between the button's opening (`<button>`) and closing (`</button>`) tags is the label that displays on the button. We can also access this text using the _innerHTML_ property of the JS button object (see the JavaScript section below). The basic syntax for an HTML button looks like this:

```html
<button id="buttonIdentifier" class="buttonStyleClass">Click Me</button>
```

The image below shows two lines of HTML code and the content they produce:

![Code and content](https://s3.amazonaws.com/hr-assets/0/1498079219-522a8cc71a-ScreenShot2017-06-21at2.06.07PM.png)

## JavaScript Buttons
Consider the following code:

```js
var clickMeButton = document.createElement('button');
clickMeButton.id = 'myButton';
clickMeButton.innerHTML = 'Click Me';
clickMeButton.style.background = '#4FFF8F';
document.body.appendChild(clickMeButton);
```

Now, let's walk through what it does:

1. `document.createElement('Button')` creates a clickable button object (_createElement('Button')_) referenced by the variable name `clickMeButton`.
2. `clickMeButton.id = 'myButton'` sets the button's _id_ to be `myButton`.
3. `clickMeButton.innerHTML = 'Click Me'` sets the button's inner HTML (i.e., the label we normally see between the HTML _button_ tags) to say _"Click Me"_.
4. `clickMeButton.style.background = '#4FFF8F'` sets the button's background color to green. To style multiple attributes of our button using a style class, we would write `clickMeButton.className = 'myStyleClassName'` instead.
5. `document.body.appendChild(clickMeButton)` appends `clickeMeButton` to the body of the document as a child.

Let's say we want to modify the label on an HTML button element with the _id_ `myButton`. We simply use the _getElementById_ method and pass the desired element's _id_ as an argument:

```js
var clickMeButton = document.getElementById('myButton');
clickMeButton.innerHTML = 'This is my new label text!';
```

The image below shows some HTML code with a JavaScript script and the content they produce:

![JS Button Demo](https://s3.amazonaws.com/hr-assets/0/1498086398-06b80b55cd-JS-Button-Demo.png)

## Styling Buttons with CSS
First, we want to define the style constraints for our button. We can do this in either of the two ways below.

#### 1. Using an ID Selector
For instances where we want to apply a style to a single element within an HTML page, we use a CSS _id selector_ using the syntax `#identifier` (where `identifier` is the _id_ of the element to style within the page). We then follow it with a pair of curly braces that contain the desired style constraints for all elements within the container that has that identifier. For example:

```css
#myButtonId {
    /* Set the background color to a shade of green */
    background: #4FFF8F;
    /* Center-align the text */
    text-align: center;
    /* Set the cursor to be a pointer */
    cursor: pointer;
}
```

Note that we must put our CSS inside the _stye_ tags in the head section.

Let's look at what happens when we style the element with the _id_ `myButtonId`:

![Style Button By Id](https://s3.amazonaws.com/hr-assets/0/1498087555-67677515e9-Style-Button-By-ID.png)

Note that the button's background is _green_ because of the _background_ attribute we defined for the _id_ `myButtonId`.

#### 2. Using a Class Selector
For instances where we want to apply the same styling to multiple elements, we define a CSS class using the syntax `.className` (where `className` is the name of our class). We then follow it with a pair of curly braces that contain the desired style constraints for all elements of that class. For example:

```css
.myStyleClass {
    /* Set the background color to a shade of green */
    background: #4FFF8F;
    /* Center-align the text */
    text-align: center;
    /* Set the cursor to be a pointer */
    cursor: pointer;
}
```

Note that we must put our CSS inside the stye tags in the _head_ section.

Let's look at what happens when we style any element with the _class_ `myStyleClass`:

![Style Button By Class](https://s3.amazonaws.com/hr-assets/0/1498090690-522884587b-Style-Button-By-Class.png)

Note that the button's background is _green_ because of the _background_ attribute we defined for the class `myStyleClass`.

## Combining HTML and JavaScript
Now, let's look at how we can combine what we've learned about HTML and JavaScript buttons.

Take some time to read through the following code:

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {
                text-align: center;
            }
            /* Styling for the 'button' class */
            .button {
                background-color: #4FFF8F;
            }
            /* Styling for id='htmlButton1' */
            #htmlButton1 {
                font-weight: bold;
            }
            /* Styling for id='htmlButton2' */
            #htmlButton2 {
                font-style: italic;
            }
            /* Styling for id='jsButton' */
            #jsButton {
                font-weight: bold;
                font-style: italic;
            }
        </style>
    </head>
    <body>
        <p>This is what our code produces:</p>
        <button id='htmlButton1' class='button'>I'm an HTML button!</button>
        <button id='htmlButton2' class='button'>I'm an HTML button!</button>
        
        <script>
            /* Create a button element */
            var clickMeButton = document.createElement('button');
            /* Set the button's text label */
            clickMeButton.innerHTML = 'I\'m a JavaScript button!';
            /* Set the button's id */
            clickMeButton.id = 'jsButton';
            /* Set the button's style class */
            clickMeButton.className = 'button';
            /* Add the button to the page */
            document.body.appendChild(clickMeButton);
            
            /* Get the element with id='htmlButton2' */
            var htmlButton = document.getElementById('htmlButton2');
            /* Modify the text label for htmlButton2 */
            htmlButton.innerHTML = 'I\'m a modified HTML button!';
        </script>
    </body>
</html>
```

When we render the above code, it looks like this:

![JS Button Demo Style](https://s3.amazonaws.com/hr-assets/0/1498164112-41cbc71b92-JS-Button-Demo-Style.png)

Observe that:

- All three buttons have the background color styling from the _button_ class, but each button has additional font styling specific to its distinct _id_.
- The initial text label for `htmlButton2` was `I'm an HTML button!`, but we used JavaScript to modify it to say `I'm a modified HTML button!` instead.

## Click Events
When a user clicks a button, we call it a _click event_. Let's look at using _onclick_ and _addEventListener_ to prompt an action in response to a click event.

#### Using `onclick`
Consider the following code:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        
        <style>
            .buttonClass {
                color: #4CAF50;
            }
        </style>
    </head>
    
    <body>
        <!-- This puts a button with the id 'button id' on our page. -->
        <button id="buttonId" class="buttonClass">I am a button!</button>

        <script>
            /* This assigns the element with id 'buttonId' to 'btn' */
            var btn = document.getElementById('buttonId');
            
            /* This sets the action to perform on a click event */
            btn.onclick = function() {
                /* This changes the button's label */
                btn.innerHTML = 'You clicked me!';
            };
    	</script>
    </body>
</html>
```

The image below shows what the button looks like before and after it's clicked:

![HTML Button Before After](https://s3.amazonaws.com/hr-assets/0/1498092410-64ab576921-HTML-Button-Before-After.png)

#### Using `addEventListener`
Consider the following code:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        
        <style>
            .buttonClass {
                color: #4CAF50;
            }
        </style>
    </head>
    
    <body>
        <!-- This puts a button with the id 'button id' on our page. -->
        <button id="buttonId" class="buttonClass">I am a button!</button>

        <script>
            /* This assigns the element with id 'buttonId' to 'btn' */
            var btn = document.getElementById("buttonId");
            
            /* This sets the action to perform on a click event */
            btn.addEventListener("click", function() {
                /* This changes the button's label */
                btn.innerHTML = 'You clicked me!';
            });
    	</script>
    </body>
</html>
```

The image below shows what the button looks like before and after it's clicked:

![HTML Button Before After](https://s3.amazonaws.com/hr-assets/0/1498092410-64ab576921-HTML-Button-Before-After.png)