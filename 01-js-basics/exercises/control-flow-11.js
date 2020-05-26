// Exercise 11 - Prime Numbers

// console.log(isPrime(29));

showPrimes(21);

// Prime whose factors are only 1 and itself
// Composite

function showPrimes(limit){
    for(let number = 2; number<limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime ( integer ) {
    for (let factor = 2; factor < integer; factor++)
        if (!(integer % factor)) return false;
    return true;
}

