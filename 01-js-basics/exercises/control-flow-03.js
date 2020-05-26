function fizzBuzz (input){
    if (typeof(input) !== "number") return("Not a number.");
    else if (!(input % 3) & !(input % 5)) return("fizzBuzz");
    else if (!(input % 3)) return("fizz");
    else if (!(input % 5)) return("Buzz");
    else return("input");
}

console.log(fizzBuzz(3)); // divisible by 3 => fizz
console.log(fizzBuzz(5)); // divisible by 5 => Buzz
console.log(fizzBuzz(15)); // divisible by 5 & 3 => fizzBuzz
console.log(fizzBuzz(17)); // Not divisible by 5 & 3 => input
console.log(fizzBuzz("cola")); // Not a number.
