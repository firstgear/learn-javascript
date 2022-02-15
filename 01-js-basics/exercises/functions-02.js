// exercise 2 - area of circle

// write circle as object literal
const circle = {
    radius: 1,
    //read only property implemented as method
    get area() {return Math.PI * this.radius**2;}
    // no set property, so cannot set from outside
};

// write property
circle.radius = 2;

// read property
console.log(circle.area);