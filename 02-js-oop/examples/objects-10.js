// abstraction: hide the details, expose/show only essentials
// essentials are radius, draw method

function Circle(radius){
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0};
    this.computeOptimumLocation = function () {
        // ...
    }

    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.defaultLocation = false; // will mess up
circle.computeOptimumLocation();
circle.draw();
