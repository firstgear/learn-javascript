// Value vs Reference Types 

// primitives or value types are copies by their value
// x & y are independant
let x = 10;
let y = x;
x = 20;
// x = 20 and y = 10

// reference types or objects are copies by their reference
x = { value: 10};
y = x; // reference copies
x.value = 20;
// x and y = 20

// value type
let number = 10;

function increase(number){
    number++;
}
increase(number);
console.log(number); // output = 10


// reference type
let obj = { value: 10 };

function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj); // output = 11
