// 15 - Mapping an Array

// bullet point list (string)
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);
const items = filtered.map(n => '<li>' + n +'</li>');
const html = '<ul>' + items.join('') + '</ul>';

console.log(filtered); // [1, 2, 3]
console.log(items); // ["<li>1</li>", "<li>2</li>", "<li>3</li>"]
console.log(html); // <ul><li>1</li><li>2</li><li>3</li></ul>


// map to object
const items2 = filtered.map(n => {
    const obj = { value: n }; // object literal notation
    return obj;
});
console.log(items2); // returns array with 3 objects


// map to object - shorter notation
const items3 = filtered.map(n => ({ value: n }) ); // object need to be in ()
console.log(items3); // returns array with 3 objects

// {} objects in JS: curly braces, braces, accolade (NL)
// [] arrays in JS: brackets, square brackets, rechte haakjes (NL)
// () code grouping, immediately invoked, gives precedence in math calc: parenthesis, round brackets, ronde haakjes (NL)


// chain methods
const items4 = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}) )
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
console.log(items4); // [2, 3]
