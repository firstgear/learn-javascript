// Arguments

let x = 1;
x = 'a';

function sum(a,b){
    return a+b;
}

console.log(sum(1,2,3)); // 3
console.log(sum(1,2)); // 3
console.log(sum(1)); // 1 + undefined = undefined (no error)

// variable number of parameters
// every function has a an arguments object
function sum2(a,b){
    console.log(arguments); //shows all arguments
    return a+b;
}
console.log(sum2(1,2,3,4,5));

// variable number of parameters for sum
function variableSum(){
    let total = 0;
    for (let value of arguments)
        total = total + value;
    return total;
}
console.log(variableSum(1,2,3,4,5)); // 15
console.log(variableSum(1,2,3)); // 6
console.log(variableSum(1,2)); // 3