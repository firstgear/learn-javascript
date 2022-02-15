// Function Declaration
function walk(){
    console.log('walk');
}

// Anonymous Function Expression
let run = function(){
    console.log('run');
}; // a function is an object
run();

let move = run;
move();
