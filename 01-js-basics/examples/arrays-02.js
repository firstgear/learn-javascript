// 01 - intro
// 02 - adding elements

const numbers = [3, 4];
//numbers = []; //error, but  you can add or remove elements

// 3 methods to add elements to end, begin, middle

// end
numbers.push(5, 6);

// begin
numbers.unshift(1, 2);

// middle use splice methode (start, delete count, elements)
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
// [1, 2, "a", "b", 3, 4, 5, 6]