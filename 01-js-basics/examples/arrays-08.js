// 08 - combining and slicing arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // [1, 2, 3, 4, 5, 6]
console.log(combined);

const slice = combined.slice(2, 4); // [3, 4]

console.log(combined);
console.log(slice);

// primitives will be copied
// objects references will be copied

const firstN = [ {id :1 }];
const secondN = [4, 5, 6];

const combinedN = firstN.concat(secondN); // [1, 2, 3, 4, 5, 6]
firstN[0].id = 10;
console.log(combinedN);
