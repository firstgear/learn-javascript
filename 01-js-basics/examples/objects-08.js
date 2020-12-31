const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

//iterate over object

// for in loop (objects)
for (let key in circle)
    console.log(key, circle[key]);

// for of loop (maps, arrays)
// object is not iterable circle. => error use Object.keys
for (let key of Object.keys(circle))
    console.log(key, circle[key]);
// every Object is with built-in constructor function
// function Object() {}
// access properties and methods through dot notation (Object.)

// methods: keys or entries
// each entry is an array
for (let entry of Object.entries(circle))
    console.log(entry);

// property/method exist in object?
if ('radius' in circle) console.log('yes');