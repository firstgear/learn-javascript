// Hoisting - 
// moving function declaration to top of the file,
// happens automatically in JS for function declarations

// Function Declaration
walk();

function walk(){
    console.log('walk');
}

// Function Expression
run(); // ERROR - cannot access before init

const run = function(){
    console.log('run');
};