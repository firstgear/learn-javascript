// the Rest Operator (...args) is not spread [...array]
// must be last formal parameter

function sum(...args){
    console.log(args);
    return args.reduce((a,b) => a + b);
}
console.log(sum(1,2,3,4,5)); // 15
console.log(sum(1,2,3)); // 6
console.log(sum(1,2)); // 3

function sumPrices(discount,...args){
    console.log(args);
    const total = args.reduce((a,b) => a + b);
    return total * (1 - discount);
}
console.log(sumPrices(0.1, 20, 30)); // 45
