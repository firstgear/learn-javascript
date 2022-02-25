// getters and setters
// use Object.defineProperty()

function Circle(radius){
    this.radius = radius; // object property

    // private property, no access from outside
    let defaultLocation = { x: 0, y: 0 };
    
    // add method to access property
    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    // define getter
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });

    this.draw = function(){        
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.getDefaultLocation(); // access via method
circle.defaultLocation;
circle.defaultLocation = { x:1, y:1 };
circle.draw();