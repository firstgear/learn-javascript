// This is my first JS code.
console.log('Hello World');
// let name;
// console.log(name);
let name='Mosh';
console.log(name);
//
const interestRate = 0.3;
console.log(interestRate);
//
let person = {
    name: 'Josje', // 2 properties
    age: 34
}; //object literal syntax with curly braces
console.log(person.age);

person.name='Josje'; //dot notation
person['name']='Hanne'; //bracket notation
console.log(person.name);
//
let selectedColors = [ 'red', 'blue']; //square brackets
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(typeof selectedColors);
//
function greet() { // function declaration, no semicolon required
    console.log('Hello World from within f()');
    // body of function in between curly braces
}
greet();
//
function greets(name) { // one parameter
    console.log('Hello ' + name);
    // variable name accessible in this function
}
greets('Josje'); // Jojsje is argument of greet function.
//
function greet3(name, lastName) { 
    console.log('Hello ' + name + ' ' + lastName);
}
greet3('Josje', 'Hanne');
//

function square(number) { 
    return number * number;
}
console.log(square(2));
//
let x = 10;
let y = 3;
console.log(x + y); // addition operator
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // divider
console.log(x % y); // remainder
console.log(x ** y); // exponentiation

console.log(++x); // increment => displays 11
x = 10;

console.log(x++); // increment  => displays 10
x = 10;

console.log(--y); // decrement => displays 2
x = 10;

console.log(y--); // decrement => displays 2
x = 10;
//
console.log(x = x + 5); // addition operator
x = 10;
console.log(x += 5); // addition assignment operator
console.log(x -= 5); // subtract assignment operator
console.log(x *= 5); // multiply assignment operator
console.log(x /= 5); // divide assignment operator
//
x = 1;
console.log(x > 0); // greater than, output boolean
console.log(x >= 0); // greater than or equal to, output boolean
console.log(x < 0); // less than, output boolean
console.log(x <= 0); // less than or equal to, output boolean
//
console.log(x === 1);
console.log(x !== 1);
console.log(x == 1);
console.log(x != 1);
// ternary
let points = 90;
let type = points > 100 ? 'gold' : 'silver'
console.log(type);
// logical
console.log( true && true );
//
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log( eligibleForLoan );
//
eligibleForLoan = highIncome || goodCreditScore;
console.log( eligibleForLoan );
//
console.log('Application Refused', !eligibleForLoan );
//
console.log( false || true );
console.log( false || 'Josje' );
console.log( false || 1 );
console.log( false || 100 || 2 ); // short-circuiting
//
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log( currentColor );
//
console.log(1 | 2); // Bitwise OR (logical OR double ||)
console.log(1 & 2); // Bitwise AND (logical AND double &&)
//
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);
//
let message = 
    (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);
//
x = 2 + 3 * 4;
console.log(x);
//
let a = 'red';
let b = 'blue';
let temp = b;
b = a;
a = temp;
console.log(a);
console.log(b);
//
let hour = 18;
if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else
    console.log('Good evening');
//
let role = '';
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
//
for (let i = 0; i < 5; i++) {
    if (i % 2 !== 0)
        console.log('Hello World', i);
}
//
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }
//
let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5)
//
while ( i < 5 ) {
    console.log(i);
} 
//
while ( false ) {
    console.log("Looping");
} 
//
const singer = {
    name: 'Josje',
    age: 34
};
for (let key in singer) {
    console.log( singer[key] );
}
//
const colors = [ 'red', 'green', 'blue' ];
for (let index in colors) {
    console.log( index, colors[index] );
}
//
for (let color of colors)
    console.log(color);
//
i = 0;
while ( i <= 10 ) {
//    if (i == 5) break;

    if ( i % 2 == 0) {
        i++;
        continue; // jump to beginnen of loop
    }
    console.log(i); 
    i++;
};
//
// function maximum(number1, number2) { 
//     if ( number1 > number2)
//         return number1;
//     else return number2;
// }
// console.log(maximum(2,3));
//
function maximum(number1, number2) { 
    return (number1 > number2) ? number1 : number2;
}
console.log(maximum(2,3));
//
function isLandscape(width, height) { 
    return (width > height);
}
console.log(isLandscape(16,9));
console.log(isLandscape(1024,768));
//
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3,5 => FizzBuzz
// Not divisible by both 3,5 => input
// Not a number => NaN.
const output = fizzBuzz(3);
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
//
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
//
showNumbers(10);
function showNumbers(limit){
    let i = 0;
    while(i <= 10) {
        const message = (i%2==0) ? 'EVEN' : 'ODD';
        console.log(i, message);
        i++;
    }
}
//
//
const array = [0, null, undefined, '', 2, 3];
function countThruthy(array){
    let count = 0;
    for (let key of array)
        if (key) count++;
    return count;
}
console.log(countThruthy(array)); // => 2
//
//

function sum(limit){
    let sum = 0;
    if (limit%3 || limit%5);
}