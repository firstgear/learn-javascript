// exercise 04 - moving an element

//const numbers = [1, 2, 3, 4];
console.log(move([1, 2, 3, 4], 0, 0));
console.log(move([1, 2, 3, 4], 0, 1));
console.log(move([1, 2, 3, 4], 0, 2));
console.log(move([1, 2, 3, 4], 0, 3));
console.log(move([1, 2, 3, 4], 0, 4));

function move(array, index, offset){
    // middle use splice methode (start, delete count, elements)
    //return array[index];
    const position = index + offset;

    if (position>=array.length){
        console.error('Invalid offset.')
        return;
    }

    const output = [...array];
    const element = output.splice(index,1)[0]; // splice returns removed elements
    output.splice(position, 0, element);
    return output;
}
// (numbers, 0, 0) => [1,2,3,4]
// (numbers, 0, 1) => [2,1,3,4]
// (numbers, 0, 2) => [2,3,1,4]
// (numbers, 0, 4) => error