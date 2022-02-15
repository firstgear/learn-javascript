// What if numbers were a boolean, null, undefined, number variable?
// Add error handling.
// Try / Catch Block

function countOccurrences(array, searchElement) {
  // let count = 0; 
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  if (!Array.isArray(array))
    throw new Error('Value is not array.');

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}

const numbers = [1, 2, 3, 4];
//const numbers = null;

try{
    const count = countOccurrences(numbers, 1); 
    console.log(count); 
}
catch (e) {
    console.log(e);
}