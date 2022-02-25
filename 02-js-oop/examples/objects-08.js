// create/remove property from dynamic object
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(20);

circle.location = { x: 1 };
circle['location'] = { x: 1 };

// dynamic property name
const propertyName = 'location';
circle[propertyName] = { x: 1 };
