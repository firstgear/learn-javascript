// getters and setters
// method in objects

// Define function in object
// Only problem is that it is readonly.
// Access the method(), not a property without the ()

const person = {
    firstName : 'Klaasje',
    lastName: 'Meijer',
    fullName() { 
        return `${person.firstName} ${person.lastName}`;
    }
};
console.log(person.fullName());

// getters => access properties
// setters => change (mutate) them

const person2 = {
    firstName : 'Klaasje',
    lastName: 'Meijer',
    get fullName() { 
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person2.fullName = 'John Smith';
console.log(person2);