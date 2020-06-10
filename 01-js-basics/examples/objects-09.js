// cloning an object
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};
// option 1 - for in loop to iterate over all properties
for (let key in circle)
    another[key] = circle[key];
console.log(another);

// option 2 - use assign method
const another2 = {};
Object.assign(another2,circle);
console.log(another2);

// option 3 - use spread operator (simplest way to clone)
const another3 = { ...circle };
console.log(another3);