// 12 - sorting arrays

const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers); // [1, 2, 3]

numbers.reverse();
console.log(numbers); // [3, 2, 1]

const courses = [
    { id: 1, name: "Zang" },
    { id: 2, name: "Toneel" }
];
courses.sort( function(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(courses); // Toneel komt eerst, watch out for ascii ordering ! T < t