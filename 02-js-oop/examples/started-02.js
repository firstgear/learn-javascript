// procedural implementation
// underscore used as numeric separator
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){ // functions with lots of parameters
    return baseSalary + (overtime * rate)
}

console.log(getWage(baseSalary, overtime, rate));


// OOP alternative
// create employee object

let employee = {
    baseSalary: 30_000, // modeled as properties of object
    overtime: 10,
    rate: 20,
    getWage: function(){  // getWage no parameters
        return this.baseSalary + (this.overtime * this.rate)
    }
};

console.log(employee.getWage());

// "The best functions are those with no parameters!""
// Uncle Bob - Robert C Martin, author of Clean Code