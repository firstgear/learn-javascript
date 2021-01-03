// try and catch


const person = {
    firstName : 'Klaasje',
    lastName: 'Meijer',
    get fullName() { 
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.')

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullName = '';

}
catch (e) {
    console.log(e);
    alert(e);
}

console.log(person);

// what happens if we pass boolean as fullName to the setter ? 
// Uncaught TypeError

// Do errorhandling at beginning of function (defensive programming)

// How to throw an exception? Creating error object and throwing it.