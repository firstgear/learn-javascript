// 06 - removing elements

const numbers = [1,2,3,4];

//ADD
//numbers.push
//numbers.unshift
//numbers.splice

//REMOVE
//end - numbers.pop()
const last = numbers.pop() // remove last element
console.log(last); // 4
console.log(numbers); // [1, 2, 3]

//begin - numbers.shift()
const begin = numbers.shift() // remove first element
console.log(begin); // 1
console.log(numbers); // [2, 3]

//middle - numbers.splice()
numbers.splice(1,1); // remove 1 element starting on on index 1
console.log(numbers); // [2]