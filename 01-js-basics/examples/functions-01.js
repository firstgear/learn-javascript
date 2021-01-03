// Function Declaration
function walk(){
    console.log('walk');
}

// Anonymous Function Expression
let run = function(){
    console.log('run');
}; // a function is an object
let move = run;
run();
move();
