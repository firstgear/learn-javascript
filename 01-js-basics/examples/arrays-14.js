// 14 - filtering an array

const numbers = [1, -1, 2, 3];

// pass callback function to filter
const filtered = numbers.filter( function(value){
    return value >= 0;
});
console.log(filtered);

// arrow alternative
const filtered2 = numbers.filter(v => v >= 0);
console.log(filtered2);

// could be used by Yelp to filter restaurants that are Open Now