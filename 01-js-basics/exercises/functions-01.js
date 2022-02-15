// accepts both an object and array
//

function sum(...items){
    if (Array.isArray(items[0])){
        return items[0].reduce((a,b) => a + b);
    }
    return items.reduce((a,b) => a + b);
}

console.log(sum(1,2,3,4)); //10
console.log(sum([1,2,3,4])); //array itself, items is array of arrays

