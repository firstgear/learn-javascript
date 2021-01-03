// 13 - testing the elements of an array

const numbers = [1,2,3,-1];
const allPositive = numbers.every( function(value){
    return value >= 0;
});
console.log(allPositive); // false


const atLeastOnePositive = numbers.some( function(value){
    return value >= 0;
});
console.log(atLeastOnePositive); // true