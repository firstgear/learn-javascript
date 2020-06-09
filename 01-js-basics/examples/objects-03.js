// Camel Notation: oneTwoThree
// Pascal Notation: OneTwoThree

// Constructor Function
function Circle(radius) {
    this.radius = radius; //new property to empty object
    this.draw = function() {
        console.log('draw');
    }
    return this; // implicitly there
}

// similar to C# or Java (new operator)
const circle = new Circle(1); // new creates empty object eg. const x = {};
circle.draw();