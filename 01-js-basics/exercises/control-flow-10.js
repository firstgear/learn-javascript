// Exercise 10 - stars

showStars(10);

function showStars(rows){
    for(let i = 0; i < rows; i++){
        console.log('*'.repeat(1+i))
    }
}