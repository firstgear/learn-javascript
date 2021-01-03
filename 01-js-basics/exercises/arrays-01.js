// exercise 01 - array from Range

const numbers = arrayFromRange(1,4);
console.log(numbers);

function arrayFromRange(min,max){
    const newArray = []; // initialize array
    for (let i = min; i <= max; i++) { // for loop to generate numbers
        newArray.push(i);
    }
    return newArray;
}