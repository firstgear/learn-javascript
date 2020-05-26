// Speed Limit = 70
// 5 -> 1 points
// Math.floor(1.3)
// More than 12 points -> license suspended
function checkSpeed (speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    let points = (speed - speedLimit) / kmPerPoint;
    if (points > 12) return "License suspended.";
    if (points <= 0) return "Ok";
    return "Points " + Math.floor(points);
}

console.log(checkSpeed(70)); // Ok
console.log(checkSpeed(71)); // Points 0
console.log(checkSpeed(75)); // Points 1
console.log(checkSpeed(80)); // Points 2
console.log(checkSpeed(25)); // Ok
console.log(checkSpeed(130)); // Points 12
console.log(checkSpeed(180)); // License suspended.
