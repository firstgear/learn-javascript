# JS Basics - Part 1

## Getting Started

### What is JS?
- JS most popular programming language (68% of devs use JS). Source: [StackOverflow Survey 2019 to 25k developers](https://insights.stackoverflow.com/survey/2019#technology)
- JS has broad community and vendor support.

Average salary
- [120k$/Y in US for typescript](https://insights.stackoverflow.com/survey/2020) by StackOverFlow Survey 2020
- [Yearly salary in USD](https://2019.stateofjs.com/demographics/#salary) by 4th State of JS survey
- [Salary by language](https://insights.stackoverflow.com/survey/2019#top-paying-technologies) by StackOverFlow Survey 2019
- [Salary by developer type](https://insights.stackoverflow.com/survey/2019#technology) by StackOverFlow Survey 2019

[State of Frontend in 2020](https://tsh.io/State-of-Frontend-2020-by-TSH.pdf)
- 74% using React
- Hosting: AWS, Netflify, GCP, Azure, Vercel
- Static website generators: Gatsby, Next.js

[BOOK - Building Micro-Frontends by Luca Mezzalira](https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/)

[BOOK - Front End Developer Handbook](https://frontendmasters.com/books/front-end-handbook/2019/)

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
  - Install extension live server: CMD or ALT + L + O
  - Access terminal through Control + \`
  - Comment out line through Command + /
  - Move block of text through Option + Up/Down
  - Change variable in multiple places: F2

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

### Brackets used in JS (added)
* {} objects: braces, curly braces, curle brackets, accolade (NL)
* [] arrays: brackets, square brackets, rechte haakjes (NL)
* () code grouping, immediately invoked, gives precedence in math calc: round brackets, parenthesis, ronde haakjes (NL)

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
function createCircle(radius){
    return {
        radius, // if key:value are same
        draw(){ // draw method
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
```
### Constructor Functions

Goal is to create an object

OOP: constructor function
```javascript
// Constructor Function
function Circle(radius) {
    this.radius = radius; //new property to empty object
    this.draw = function() {
        console.log('draw');
    }
    return this; // explicitly there
}

// similar to C# or Java (new operator)
const circle = new Circle(1); // new creates object
// new String, Object, Boolean = object constructor notation
// 1, "", {}, true = object literal notation
```


### [Dynamic Nature of Objects](./01-js-basics/examples/objects-04.js)

Dynamic means, you can always add or remove properties from existing objects.

```javascript
//dynamic nature of objects
const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

console.log(circle);
```

### [Constructor Property](./01-js-basics/examples/objects-05.js)

Every object in JS has property called constructor (object.constructor), references function that is used to create that object.
```javascript
// object literal syntax => object.constructor function
let x = {};
let y = new Object();

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...
```

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

Iterate over all properties including methods in object to copy them to new object.

### [Garbage Collection](./01-js-basics/examples/objects-10.js)

JS has automatic memory allocation, called garbage collection. No need to allocate memory to object as in C/C++.

### [Math](./01-js-basics/examples/objects-11.js)

[Built in Math Object - Mozilla dev portal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

### [String](./01-js-basics/examples/objects-12.js)

* [Built in String Object - Mozilla dev portal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [Escape Notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)

### [Template Literals](./01-js-basics/examples/objects-13.js)

### [Date](./01-js-basics/examples/objects-14.js)

[Built in Date object - Mozilla dev portal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## Arrays

### 2. Adding Elements

```javascript
const numbers = [3, 4];
//numbers = []; //error, but  you can add or remove elements

// 3 methods to add elements
numbers.push(5, 6); // end
numbers.unshift(1, 2); // begin
numbers.splice(2, 0, 'a', 'b'); //middle

console.log(numbers);
// [1, 2, "a", "b", 3, 4, 5, 6]
```

### 3. Finding Elements (Primitives)

```javascript
const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf('a'));     // -1 -> not found
console.log(numbers.indexOf(1));       //  0
console.log(numbers.indexOf('1'));     // -1 -> not found
console.log(numbers.lastIndexOf(1));   //  3

// to check whether element exists use !== -1
console.log(numbers.indexOf(1) !== -1);//  true
console.log(numbers.includes(1));      //  true
```

### 4. Finding Elements (Reference Types)

```javascript
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
]

// do we have course called 'a' ?
console.log(courses.includes({ id: 1, name: 'a' })); // false

// have to pass function, called predicate or callback function
const course = courses.find( function(course) {
    return course.name === 'a';
}); 
console.log(course); // { id ... } or undefined

// using findIndex
const course2 = courses.findIndex( function(course) {
    return course.name === 'a';
}); 
console.log(course2); // 0
```

### 5. Arrow Functions

```javascript
// have to pass function, called predicate or callback function
const course1 = courses.find( function(course) {
    return course.name === 'a';
}); 
console.log(course1); // { id: 1, name: 'a' } or undefined

// remove function keyword en replace with fat arrow =>
const course2 = courses.find( course => {
    return course.name === 'a';
}); 
console.log(course2); // { id ... } or undefined

// remove curly braces
const course3 = courses.find( course => course.name === 'a'); 
console.log(course3); // { id ... } or undefined
```

### 6. Removing Elements

```javascript
const numbers = [1,2,3,4];

const last = numbers.pop() // remove last element
const begin = numbers.shift() // remove first element
numbers.splice(1,1); // remove 1 element starting on on index 1
```

### 7. Emptying an Array

```javascript
let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
numbers = []; // elegant, but doesn't work with multiple reference to array
console.log(numbers);

// Solution 2
numbers.length = 0;
console.log(numbers);

// Solution 3
numbers.splice(0, numbers.length);
console.log(numbers);

// Solution 4
while (numbers.length>0)
    numbers.pop();
console.log(numbers);
```

### 8. Combining and Slicing Arrays

```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second); // [1, 2, 3, 4, 5, 6]

// primitives will be copied
// objects references will be copied

const firstN = [ {id :1 }];
const secondN = [4, 5, 6];
const combinedN = firstN.concat(secondN); // [{id :1 }, 4, 5, 6]
firstN[0].id = 10;
console.log(combinedN); //  [{id :10 }, 4, 5, 6]
```

### 9. The Spread Operator

```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

### 10. Iterating an Array

```javascript
const numbers = [1, 2, 3];
for (let number of numbers)
    console.log(number);

// forEach method that takes parameter number
numbers.forEach( function(number){
    console.log(number);
});

//callback passed to forEach function
numbers.forEach(number => console.log(number));

//callback can take 2nd parameter, index
numbers.forEach((number, index) => console.log(index, number));
```

### 11. Joining Arrays

```javascript
const numbers = [1, 2, 3]; // array
const joined = numbers.join(','); //creates a string
console.log(joined);

// similar split can create array from string
```

### 12. Sorting Arrays

```javascript
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers); // [1, 2, 3]

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
]

courses.sort(function(a, b) {
    // a < b => -1
    // a > b =>  1
    // a == b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return  1;
    return 0;
})

courses.sort();
console.log(courses);
```

### 13. Testing the Elements of an Array

Pass callback function to method array.some() or array.every().

[0,1,2] => true

### 14. Filtering an Array

Pass callback function to method array.filter().

eg. Yelp restaurant filter on "Open Now"

[0,1,2] => [1, 2]

### 15. Mapping an Array

Pass callback function to method array.map() to map every element of array into something else.

eg. html bullet points from array

### 16. Reducing an Array

Pass callback funtion to method array.reduce() including reduce algorithm using accumulator and currentValue.

eg. sum of array

### 17. Exercise 1- Array from Range
### 18. Exercise 2- Includes
### 19. Exercise 3- Except
### 20. Exercise 4- Moving an Element
### 21. Exercise 5- Count Occurrences
### 22. Exercise 6- Get Max
### 23. Exercise 7- Movies

## Functions

### 1. Function Declarations vs Expressions

* Function Declaration
* Anonymous Function Expression
* Named Function Expression

### 2. Hoisting

Moving function declaration to top of the file happens automatically in JS for function declarations. Not for function expressions.

### 3. Arguments

Use argument object inside function to use dynamic number of parameters.

### 4. The Rest Operator

Rest operator (...args) must be the last formal parameter and is NOT the spread operator used with arrays [...array].

### 5. Default Parameters

Create default parameters with the OR (||) operator.

### 6. Getters and Setters

- Getters give you access to properties of objects.
- Setters allow you to mutate properties.

### 7. Try and Catch

- Throwing an error is called an exception.
- Catch exception, display error.

```javascript
let name = true;
const e = new Error('Value is not a string.');
try{
    if  (typeof(name) !== 'string')
        throw e;
}
catch (e) {
    console.log("Au secours!");
}
```

- functions-07.js shows multiple error messages.

### 8. Local vs Global Scope

```javascript
{
    const message = 'hi';
}
console.log(message);
// message is not defined

for (let i=0; i < 5; i++){
    console.log(i);
}
console.log(i);
// i is not defined
```

### 9. Let vs Var

- Avoid using var, because var is function-scoped
- ES6 (ES2015): let, const => block-scoped

```javascript
var color = 'red';
// added to window object, dangerous can override variable of other libraries

let age = 30;
// global object

function sayHi () {}
// window.sayHi, not best practise
```

### 10. The this Keyword

This is referencing the object that is executing current function.
- scope of method is within object
- scope of function is global/window

### 11. Changing this
### 12. Exercise 1- Sum of Arguments
### 13. Exercise 2- Area of Circle
### 14. Exercise 3- Error Handling

Done
