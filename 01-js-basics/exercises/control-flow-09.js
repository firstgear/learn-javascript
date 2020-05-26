// Exercise 9 - grade

const marks = [80, 80, 50];

// 01-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

// 2 functions, each responsible for 1 thing
function calculateGrade(marks){

    const average = calculateAverage( marks );

    // console.log( sum );

    if      (average <= 59) return 'F';
    else if (average <= 69) return 'D';
    else if (average <= 79) return 'C';
    else if (average <= 99) return 'B';
    return 'A';

}

function calculateAverage (array) {
    let sum = 0;
    // iterate over elements of array
    for (let value of array)
        sum += value;
    return sum / array.length; // get average
}


