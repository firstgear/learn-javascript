// 05 - arrow functions

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
]

// find() method returns the value of the first element in the 
// provided array that satisfies the provided testing function.

// array.find( function(test) )

// have to pass function, called predicate or callback function
const course1 = courses.find( function(course) {
    return course.name === 'a';
}); 
console.log(course1); // { id: 1, name: 'a' } or undefined

// remove function keyword en replace with fat arrow =>
const course2 = courses.find( course => {
    return course.name === 'a';
}); 
console.log(course2); // { id ... } or undefined

// remove curly braces
const course3 = courses.find( course => course.name === 'a'); 
console.log(course3); // { id ... } or undefined

// callback often used to interact with API, 
// you have to wait for response before acting on that response
// api.get( path, params, callback(err, data, response){} );
