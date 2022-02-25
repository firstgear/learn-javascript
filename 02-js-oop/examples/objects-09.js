// enumerating properties
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// returning both values and methods (radius, draw)
const circle = new Circle(10);
// enumerate all members in object for...in loop
for (let key in circle){
    if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

// get all the keys
const keys = Object.keys(circle);
console.log(keys);

// in operator checks existence of method / property
if ('radius' in circle)
    console.log('Circle has a radius.');