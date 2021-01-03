// exercise 06 - get Max

const numbers = [1, 2, 3, 4];

console.log(getMax(numbers));
console.log(getMax([]));

// function getMax(array){
//  return Math.max(...array);
// }

function getMax(array){
    if(array.length === 0) return undefined;
    return array.reduce( function(accumulator, currentValue) {
        if (accumulator > currentValue) return accumulator;
        else return currentValue;
    }
    ,0);
}

function getMaxShorter(array){
    if(array.length === 0) return undefined;
    array.reduce( (a,b) => {
        return (a>b) ? a : b;  
    });
}
