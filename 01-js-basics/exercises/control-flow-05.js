showNumbers(10);

function showNumbers(limit){
    let parity;
    for (let number = 0; number <= limit; number++) {
        if (!(number % 2)) parity = 'EVEN';
        else parity = 'ODD';
        console.log( number + " " + parity );
    }
}
