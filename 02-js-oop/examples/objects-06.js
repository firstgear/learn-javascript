function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// first argument specifies target of this
Circle.call({}, 1, 2, 3, 4);

// 2nd argument as array
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);

// Internally presented like this
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log('draw');
}
`);
const another2 = new Circle1(1);

// Circle.constructor
// Circle.name
// Circle.length

// purple = methods
// blue = properties

