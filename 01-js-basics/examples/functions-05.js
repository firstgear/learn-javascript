// Default parameters

function interest(principal, rate, years){
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}
console.log(interest(10000, 3.5, 5)); // 1750
console.log(interest(10000)); // 1750


function interest2(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}
console.log(interest(10000, 3.5, 5)); // 1750
console.log(interest(10000)); // 1750