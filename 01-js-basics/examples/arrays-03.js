// 03 - finding elements (primitives)

const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf('a'));     // -1 -> not found
console.log(numbers.indexOf(1));       //  0
console.log(numbers.indexOf('1'));     // -1 -> not found
console.log(numbers.lastIndexOf(1));   //  3

// to check whether element exists use !== -1
console.log(numbers.indexOf(1) !== -1);//  true
console.log(numbers.includes(1));      //  true

// all above functions have optional parameters, index at which search begins
