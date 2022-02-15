const color = 'red';

function start() {
    const color = 'blue';
    console.log(color);

    for(var i = 0; i<5; i++){
        if (true){
            var color2 = 'red';
        }
    }
    console.log(color2);
    // var is function-scoped
    // let, const is block scoped
}

start();
// "blue"


