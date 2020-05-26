// Exercise 8 - sum of multiples of 3 and 5

console.log(sum(10)); // 33

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum (limit){
    let sum = 0;
    
    for ( let i = 0; i <= limit; i++){
        if (!(i % 3) || !(i % 5)){
            sum += i;
        }
    }
    return sum;
}