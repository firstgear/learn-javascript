// exercise 02 Factory and Constructor Functions

// Initialize objects using factory and constructor functions

// Create object
// street
// city
// zipcode
// with function showAddress ( address )


// PART1 - Factory Function

function createAddress(street, city, zipCode){
    return{
        street: street,
        city: city,
        zipCode: zipCode,
        showAddress: function() {
            for (let key in this)
                console.log(this[key]);
        }
    }
};

const address1 = createAddress("De Boelalaan", "Amsterdam", "1082RD");
console.log(address1);

// PART2 - Constructor Function

function Address(street, city, zipCode) {
    this.street = street; //new property to empty object
    this.city = city;
    this.zipCode = zipCode;
    this.showAddress = function() {
        for (let key in this)
        console.log(this[key]);
    }
    return this; // implicitly there
}

const address2 = new Address("Beethovenstraat", "Amsterdam", "1077HZ");
address2.showAddress();