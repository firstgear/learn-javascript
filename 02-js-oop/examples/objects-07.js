// primitives are copies by their value
let x = 10;
let y = x;
x = 20;

// objects are copies by their reference
let z = { value: 10};
let u = z;
z.value = 20;

// output = 10
let number = 10;
// number parameter is local to function
function increase(number){
    number++;
}
increase(number);
console.log(number);


// output = 11
let obj = {value: 10}; // value property is reference
// number parameter is local to function
function increase2(obj){
    obj.value++;
}
increase2(obj);
console.log(obj.value);