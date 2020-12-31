// 10 - iterating an array

const numbers = [1, 2, 3];
for (let number of numbers)
    console.log(number);

numbers.forEach( function(number){
    console.log(number);
});

//callback passed to forEach function
numbers.forEach(number => console.log(number));

//callback can take 2nd parameter, index
numbers.forEach((number, index) => console.log(index, number));