# JS Basics

## Getting Started

### What is JS?
- JS most popular programming language (68% of devs use JS). Source: [StackOverflow Survey 2019 to 25k developers](https://insights.stackoverflow.com/survey/2019#technology)
- JS has broad community and vendor support.

Average salary
- [Yearly salary in USD](https://2019.stateofjs.com/demographics/#salary) by 4th State of JS survey
- [Salary by language](https://insights.stackoverflow.com/survey/2019#top-paying-technologies) by StackOverFlow Survey 2019
- [Salary by developer type](https://insights.stackoverflow.com/survey/2019#technology) by StackOverFlow Survey 2019

JS initially only supported in browsers. Today you can build
- web/mobile apps
- real-time networking app (chat, video)
- cli tools, games

JS runs in engine
- FireFox uses SpiderMonkey
- Chrome uses v8
- Node, runs outside browser

JS vs ECMAScript
- ECMAScript = specification
- JS = programming language that confirms to specification

Access JS Console tab in Chrome: 
- right click > Inspect > Console
- Option + Command + i

```javascript
console.log('Hello world');
2+2;
alert('yo');
```

### Setting up the Development Environment

Install IDE
- Atom
- Sublime Text
- vscode
  - Generate basic html boilerplate: ! - TAB
  - Install extension live server
  - Access terminal through Control + \`
  - Comment out line through Command + /
  - Move block of text through Option + Up/Down

Install node
```bash
$ brew install node
```

### JavaScript in Browsers

\<script> element
- can be placed in head or body
- browser parses top to bottom
- place \<script> at end content

\\\ Description or comment
- explain why/how, not what

### Seperation of Concerns

- HTML all about content
- JavaScript to implement behavior

### Execute JavaScript in Node

```bash
$ node index.js
```

## Basics

### Variables
* Cannot use reserved keywords such as if, var
* Should be meaningful
* Cannot start with a number
* Cannot contain a space or hyphen (-)
* Are case sensitive
* Use camel notation (eg. firstName)

Define string through let (use let as of ECMA version 6)
```javascript
let name; //undefined is default type
console.log(name);
```

Use single quotes for strings
```javascript
let name='Josje';
console.log(name);
```

Define multiple variables, one per line
```javascript
let firstName = 'Josje';
let lastName = 'Huisman';
```

### Define constant (cannot re-assign)
```javascript
const interestRate = 0.3;
interestRate = 1; // Error
console.log(interestRate);
```

### Primitive or Value types
* Strings
* Number
* Boolean
* undefined
* null

```javascript
let name = 'Josje'; // String literal
let age = 30; // Number literal
let isApproved = false; // Boolean literal
let firstName;
let selectedColor = null;
```

```javascript
typeof age; // Dynamic typing
"number"
```

### Dynamic Typing

JS is dynamically typed, means types can change at runtime.
```javascript
let myvar = 1;
typeof myvar;
myvar = 'Toyota';
typeof myvar;
myvar = ["Saab", "Volvo", "BMW"];
typeof myvar;
```

### Reference Types
* Object
* Array
* Function

### Object type
- Curly braces to define properties
- Dot notation shorter
- Bracket notation: if you only know name of target property at runtime
```javascript
let person = {
    name: 'Josje', // 2 properties
    age: 34
}; //object literal syntax with curly braces
person.name='Josje'; //dot notation
person['name']='Hanne'; //bracket notation
```

### Array type
- Every element has an index (starts with 0)
- Use index to access element in array
```javascript
let selectedColors = [ 'red', 'blue']; //square brackets
console.log(selectedColors);
console.log(selectedColors[0]);
```

### Function performing task type
```javascript
function greet() { // function declaration, no semicolon required
    console.log('Hello World');
    // body of function in between curly braces
}
greet();
```

Function with 1 input
- parameter vs argument
```javascript
function greet2(name) { // one parameter
    console.log('Hello ' + name);
    // variable name accessible in this function
}
greet2('Josje'); // Josje is argument of greet function.
```

### Types of Function

Function with multiple inputs
```javascript
function greet3(name, lastName) { 
    console.log('Hello ' + name);
}
greet3('Josje', 'Hanne');
```

Function returning value
```javascript
function square(number) { 
    return number * number;
}
console.log(square(2)); // function passed as argument
```

## Operators

Used to create expressions to implement logic and algorithms

Type of operators
- [Arithmetic](#arithmetic)
- [Assignment](#assignment)
- [Comparison](#comparison)
- [Ternary](#ternary)
- [Logical](#logical)
- [Bitwise](#bitwise)

### Arithmetic

```javascript
let x = 10;
let y = 3;
console.log(x + y); // addition operator
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // divider
console.log(x % y); // remainder of division
console.log(x ** y); // exponentiation

console.log(++x); // increment, apply operator first, then log x + 1
console.log(x++); // increment, logs x and apply operator
console.log(--y); // decrement
console.log(y--); // decrement
```

### Assignment

```javascript
let x = 10;
console.log(x = x + 5); // addition operator
console.log(x += 5); // addition assignment operator
console.log(x -= 5); // subtract assignment operator
console.log(x *= 5); // multiply assignment operator
console.log(x /= 5); // divide assignment operator
```

### Comparison

- output boolean

Relation
```javascript
let x = 1;
console.log(x > 0); // greater than
console.log(x >= 0); // greater than or equal to
console.log(x < 0); // less than
console.log(x <= 0); // less than or equal to
```

### Equality

- output boolean

Triple Equals = Strict (type + value)
```javascript
console.log(x === 1);
console.log(x !== 1);
```

Double Equals = Loose (value, converts type)
```javascript
console.log(x == 1);
console.log(x != 1);
```

### Ternary 

- aka conditional operators

```javascript
// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.
let points = 110;
let type = points > 100 ? 'gold' : 'silver'
```

### Logical

```javascript
// logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log( true && true );

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log( eligibleForLoan );

// logical OR (||)
// Returns TRUE if one of operands is TRUE
highIncome = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log( eligibleForLoan );

// logical NOT (!)
// Returns TRUE if one of operands is TRUE
console.log('Application Refused', !eligibleForLoan );
```

### Logical Operators with Non-Booleans
- Result is not always true or false, depends on operand (number, string, ...).
- Falsy (false): undefined, null, 0, false, '', NaN
- Anything else is truthy

```javascript
console.log( false || true );     // true
console.log( false || 'Josje' );  // Josje
console.log( false || 1 );        // 1
console.log( false || 1 || 2 );   // short-circuiting 1

// if user selects a color then use userColor, otherwise defaultColor
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log( currentColor );      
```

### Bitwise

```javascript
console.log(1 | 2); // Bitwise OR (logical OR double ||) 
console.log(1 & 2); // Bitwise AND (logical AND double &&)
```

Implement Access Control via octal notation

- use OR to add permissions
- use AND to check permissions

```javascript
const readPermission = 4;    // 100
const writePermission = 2;   // 010
const executePermission = 1; // 001
let myPermission = 0;        // 000
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // => 6

let message = 
    (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);
```

| Permission              | rwx | Binary | # |
|-------------------------|-----|--------|---|
| read, write and execute | rwx | 111    | 7 |
| read and write          | rw  | 110    | 6 | 
| read and execute        | r-x | 101    | 5 | 
| read only               | r-- | 100    | 4 |
| write and execute       | -wx | 011    | 3 | 
| write only              | -w- | 010    | 2 |
| execute only            | --x | 001    | 1 | 
| none                    | --- | 000    | 0 | 

### Operators Precedence

```javascript
let x = 2 + 3 * 4;
console.log(x);
```

### Exercise Swapping Variables

```javascript
let a = 'red';
let b = 'blue';
let temp = b;
b = a;
a = temp;
console.log(a);
console.log(b);
```

## Control Flow

- [if...else](#if...else)
- [switch...case](#switch...case)
- [for](#for)
- [while](#while)
- [do...while](#do...while)
- [infinite...loops](#infinite...loops)
- [for...in](#for...in)
- [for...of](#for...of)
- [break...continue](#break...continue)

### if...else

```javascript
//generic structure
if (condition){
    statement
}
elseif if (anotherCondition){
    statement
}
elseif if (yetAnotherCondition){
    statement
}
else
    statement

// Hour
// If hour is between 6am and 12pm: Good morning !
// If it is between 12pm and 6pm: Good afternoon !
// Otherwise: Good evening !
let hour = 10;
if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else
    console.log('Good evening');
```

### switch...case
- similar to if...else, boils down to your preference
- looks more explicit and old fashioned

```javascript
let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}
```

### for
- for (initialExpression, condition, incrementExpression)

```javascript
for (let i = 0; i < 5; i++) {
    console.log('Hello World', i);
}

// display odd numbers
for (let i = 0; i < 5; i++) {
    if (i % 2 !== 0)
        console.log('Hello World', i);
}
```

### while

```javascript
// display odd numbers
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}
```

### do...while
- not often used, more for/while loops
- at least executed once, even if condition evaluates false
```javascript
// display odd numbers
let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5)
```

### infinite...loops
- executes forever ! 
- will crash your browser window or computer !
```javascript
let i = 0;
while ( i < 5 ) {
    console.log(i);
} 
```

```javascript
while ( true ) {
    console.log("Looping");
} 
```

### for...in
- iterate over properties in object
- iterate over elements in array

```javascript
const singer = {
    name: 'Josje',
    age: 34
};
for (let key in singer) {
    console.log( singer[key] );
}
```

```javascript
const colors = [ 'red', 'green', 'blue' ];
for (let index in colors) {
    console.log( index, colors[index] );
}
```

### for...of
- iterate over elements in array
- introduced in ES6
- don't have to deal with index

```javascript
for (let color of colors)
    console.log(color);
```

### break...continue
- applies to all kind of loops

```javascript
let i = 0;
while ( i <= 10 ) {
    if (i == 5) break; // break out of loop
    console.log(i);
    i++;
};
```

```javascript
i = 0;
while ( i <= 10 ) {
    if ( i % 2 == 0) {
        i++;
        continue; 
        // jump to beginning of loop, next iteration
    }
    console.log(i); 
    i++;
};
```

### Exercise 1 - max of two numbers

```javascript
function maximum(number1, number2) { 
    if ( number1 > number2) return number1;
    // no else required
    return number2;
}
console.log(maximum(2,3));
```

functional identical
```javascript
function maximum(number1, number2) { 
    return (number1 > number2) ? number1 : number2;
}
console.log(maximum(2,3));
```

### Exercise 2 - landscape or portrait

```javascript
function isLandscape(width, height) { 
    return (width > height);
}
console.log(isLandscape(16,9));
console.log(isLandscape(1024,768));
```

### Exercise 3 - FizzBuzz

```javascript
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3,5 => FizzBuzz
// Not divisible by both 3,5 => input
// Not a number => Not a number.
function fizzBuzz(input) { 
    if (typeof(input) !== 'number')
        return NaN;
    else if (input%3 == 0 && input%5 == 0)
        return 'FizzBuzz';
    else if (input%3 == 0)
        return 'Fizz';
    else if (input%5 == 0)
        return 'Buzz';
    else return input;
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz('lalala'));
console.log(fizzBuzz(1));
```

### Exercise 4 - Demerit Points

```javascript
// Speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed <= speedLimit) return 'Ok';
    const points = Math.floor((speed-speedLimit)/kmPerPoint);
    return (points >= 12) ? 'License suspended' : points;
}
console.log(checkSpeed(180));
console.log(checkSpeed(80));
console.log(checkSpeed(75));
console.log(checkSpeed(70));
console.log(checkSpeed(0));
```

### Exercise 5 - Even and Odd Numbers

```javascript
showNumbers(10);
function showNumbers(limit){
    let i = 0;
    while(i <= 10) {
        const message = (i%2==0) ? 'EVEN' : 'ODD';
        console.log(i, message);
        i++;
    }
}
```

### Exercise 6 - Count Truthy

```javascript
const array = [0, null, undefined, '', 2, 3];
function countThruthy(array){
    let count = 0;
    for (let key of array)
        if (key) count++;
    return count;
}
console.log(countThruthy(array)); // => 2
```

### Exercise 7 - [String Properties](./01-js-basics/exercises/control-flow-07.js)
### Exercise 8 - [Sum of Multiples of 3 and 5](./01-js-basics/exercises/control-flow-08.js)
### Exercise 9 - [Grade](./01-js-basics/exercises/control-flow-09.js)
### Exercise 10 - [Stars](./01-js-basics/exercises/control-flow-10.js)
### Exercise 11 - [Prime Numbers](./01-js-basics/exercises/control-flow-11.js)


## Objects

### Basics

Object oriented programming style
- Encapsulate or group related variables in object
- Functions in objects are called methods

Not OOP
```javascript
let radius = 1;
let x = 1;
let y = 1;
function draw() {}
function move() {}
```

OOP: in object literal style
```javascript
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); //Method
```

### Factory Functions

OOP: factory function
```javascript
//Factory Function
function createCircle(radius, ){
    return {
        radius, // if key:value are same
        draw(){ // draw method
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);
```
### Constructor Functions

OOP: constructor function
```javascript
// Constructor Function
function Circle(radius) {
    this.radius = radius; //new property to empty object
    this.draw = function() {
        console.log('draw');
    }
    return this; // implicitly there
}

// similar to C# or Java (new operator)
const circle = new Circle(1); // new creates empty object eg. const x = {};
```

### [Dynamic Nature of Objects](./01-js-basics/examples/objects-04.js)

You can always add or remove properties from existing objects.

### [Constructor Property](./01-js-basics/examples/objects-05.js)

Every object in JS has property called constructor (object.constructor), references function that is used to create that object.

### [Functions are Objects](./01-js-basics/examples/objects-06.js)

### [Value vs Reference Types](./01-js-basics/examples/objects-07.js)

Value types aka primitives
- Number
- String
- Boolean
- Symbol (new since ES6)
- undefined
- null

Reference Types
- Object
- Function
- Array

Primitives or value types are copies by their value
Reference types or objects are copies by their reference

### [Enumerating Properties of an Object](./01-js-basics/examples/objects-08.js)

### [Cloning an object](./01-js-basics/examples/objects-09.js)

### [Garbage Collection](./01-js-basics/examples/objects-10.js)

JS has automatic memory allocation, called garbage collection. No need to allocate memory to object as in C/C++.

### [Math](./01-js-basics/examples/objects-11.js)

[Built in Math Object - Mozilla dev portal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

### [String](./01-js-basics/examples/objects-12.js)

[Built in String Object - Mozilla dev portal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### [Template Literals](./01-js-basics/examples/objects-13.js)