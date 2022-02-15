// 16 - Reducing an Array
const numbers = [1, -1, 2, 3];

// works but old way to write code, use reducer algorithm instead
let sum = 0;
for(let n of numbers)
    sum += n;
console.log(sum);

// use array.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial); // 5


// same but using the reduce() method
// a = 0, c = 1
// a = 1, c = -1
// a = 0, c = 2
// a = 2, c = 3
// a = 5
const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum2);

// exclude inititalization accumulater, then takes 1st value of array
// a = 1, c = -1
// a = 0, c = 2
// a = 2, c = 3
// a = 5
const sum3 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum3);

// most elegant solution to use reducer algoritm
// remove return, semicolumn, braces
const sum4 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum4);