// exercise 03 - Object Equality

// Constructor Function

function Address(street, city, zipCode) {
    this.street = street; //new property to empty object
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address("Beethovenstraat", "Amsterdam", "1077HZ");
let address2 = new Address("Beethovenstraat", "Amsterdam", "1077HZ");

// objects are reference types
// === checks have same reference
function areEqual(address1, address2){
    for (let key in address1)
        if(!(address1[key] === address2[key]))
            return false
    return true
}
console.log(areEqual(address1, address2)); //true

function areSame(address1, address2){
    return address1 === address2;
}
console.log(areSame(address1, address2)); //false