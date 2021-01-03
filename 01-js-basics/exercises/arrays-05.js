// exercise 05 - count occurrences

const numbers = [1, 2, 3, 4];

console.log(countOccurrences(numbers, 1));
console.log(countOccurrencesWithReduce(numbers, 1));

function countOccurrences(array, searchElement){
    const elements = array.filter(n => n === searchElement);
    return elements.length;
}

function countOccurrencesWithReduce(array, searchElement){
    return array.reduce( function(acc, currentValue){
        if(currentValue === searchElement) 
        return acc + 1;
        else return acc;
    }
    ,0);
}

// function countOccurrencesWithReduce(array, searchElement){
//     return array.reduce((accumulator, currentValue) => {
//         const occurrence = (currentValue === searchElement) ? 1 : 0;
//         console.log(accumulator, currentValue, searchElement);
//         return accumulator + occurrence;
//     }, 0);
// }
