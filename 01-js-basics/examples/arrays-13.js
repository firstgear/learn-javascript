// 13 - testing the elements of an array

const numbers = [1,2,3,-1];

// every: checks whether every element in array
const allPositive = numbers.every( function(value){
    return value >= 0;
});
console.log(allPositive); // false

// some: checks whether at least one element in array
// returns true from the moment element matches given criteria
const atLeastOnePositive = numbers.some( function(value){
    return value >= 0;
});
console.log(atLeastOnePositive); // true