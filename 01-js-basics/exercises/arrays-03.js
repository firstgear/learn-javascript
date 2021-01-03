// exercise 03 - except

const numbers = [1, 2, 3, 4];
const output = except(numbers, [1]);
const output2 = exceptOfficialSolution(numbers, [1]);
console.log(output);
console.log(output2);

function except(array, excluded){
    return array.filter( function(value){
        return value !== excluded[0]; // strict unequality
    });
}

function exceptOfficialSolution(array, excluded){
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}
