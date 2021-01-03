// exercise 02 - includes

const numbers = [1, 2, 3, 4];

console.log(includes(numbers,2));
console.log(includesOfficialSolution(numbers,2));

// 2 solutions with writing an own function

function includes(array, searchElement){
    return array.some(
        function(value) { return value == searchElement; } 
    )
}

function includesOfficialSolution(array, searchElement){
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}


// integrated includes method function

console.log( numbers.includes(1) );