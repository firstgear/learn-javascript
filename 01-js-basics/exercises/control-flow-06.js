// Control Flow until exercise 6 - Falsy and Thruthy variables

// Falsy
// undefined
// null
// ''
// false
// 0 
// NaN

function countTruthy(array){
    let counter = 0;
    for (let value of array)
        if (value) counter++;
    return counter;
}

let array = ['Josje', NaN, "34", false, 0];
console.log(countTruthy(array)); // => 2

array = [1,2,3];
console.log(countTruthy(array)); // => 3