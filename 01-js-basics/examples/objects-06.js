// Every function is an object
function Circle(radius) {
    this.radius = radius; //new property to empty object
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

// Go to dev console
// Circle.name (name)
// Circle.length (# of arguments)
// Circle.constructor (function used to crate object, who created?)

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

const circle = new Circle1(1);

Circle.call(window, 1); // window is target of this
Circle.apply({}, [1,2,3]); // pass array as second argument