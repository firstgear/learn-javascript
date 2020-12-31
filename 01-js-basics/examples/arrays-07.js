// 07 - emptying an array

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