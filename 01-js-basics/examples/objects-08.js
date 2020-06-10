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
for (let key of Object.keys(circle))
    console.log(key, circle[key]);
// Object is built-in constructor function
// function Object() {}
// methods: keys or entries
for (let entry of Object.entries(circle))
    console.log(entry);

// property/method exist in object?
if ('radius' in circle) console.log('yes');