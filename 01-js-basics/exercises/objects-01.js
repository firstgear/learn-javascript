// exercise 01 - Address Object

// Create object
// street
// city
// zipcode
// with function showAddress ( address )

const address = {
    street: "De Boelalaan",
    city: "Amsterdam",
    zipcode: "1082RD",
    showAddress: function() {
        for (let key in address)
            console.log(address[key]);
    }
};

address.showAddress(); //Method
