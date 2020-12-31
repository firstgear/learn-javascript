// 04 - finding elements (reference types)

// Shortcut copy line up/down 
// Ubuntu - CTRL + ALT + SHIFT + numpad down

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
]

// do we have course called 'a' ?
console.log(courses.includes({ id: 1, name: 'a' })); // false

// have to pass function, called predicate or callback function
const course = courses.find( function(course) {
    return course.name === 'a';
}); 
console.log(course); // { id ... } or undefined

// using findIndex
const course2 = courses.findIndex( function(course) {
    return course.name === 'a';
}); 
console.log(course2); // 0