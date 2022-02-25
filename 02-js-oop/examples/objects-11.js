// private properties and methods

function Circle(radius){
    let color = 'red'; 
    this.radius = radius; // object property

    let defaultLocation = { x: 0, y: 0 };
    // local variable, not an object property

    let computeOptimumLocation = function () {
        // ...
    }

    this.draw = function(){
        computeOptimumLocation(); // closure concept
        // this.radius ...
        
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.defaultLocation = false; // will mess up
//circle.computeOptimumLocation(); // no access due to local function
circle.draw();