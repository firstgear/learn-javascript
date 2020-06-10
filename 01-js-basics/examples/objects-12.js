// String primitive
const message = 'This is my first message.';

// String object via constructor
const another = new String('hi');

console.log(typeof message);
// "string"
console.log(typeof another);
// "object"
console.log(message.length);
// 2
console.log(message[0]);
// "T"
console.log(message[1]);
// "h"
console.log(message.includes('my'));
// true
console.log(message.includes('not'));
// false
console.log(message.startsWith('This'));
// true (capital sensitive)
console.log(message.endsWith('.'));
// true
console.log(message.indexOf('my'));
// 8
console.log(message.replace('first','second'));
// 'This is my second message.' - Returns new string, does not change original string.
console.log(message.toUpperCase());
// THIS IS ...
console.log(message.trim());
// gets rid of all whitespace before and after.

// escape notation
// eg. single quote inside the string (\')
console.log('This is my \' first message.');

// escape notation
// eg. newline (\n)
console.log('This is my \n first message.');

// create array from string
console.log(message.split(' '));