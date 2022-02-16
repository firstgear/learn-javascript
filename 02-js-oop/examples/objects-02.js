// object literal notation {}
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};
// 2nd circle, copy/paste above code
// not a good way to duplicate objects
// one or more methods in object is called behavior
circle.draw();

// Factory Function
function createCircle(radius){
    return {
        radius: radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle2 = createCircle(1);
circle2.draw();


// Constructor Function
// first letter uppercase
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    // implicit return statement
}
// new operator will 
// - create empty object
// - this points to objects
// - returns object
const another = new Circle(1);
another.draw();