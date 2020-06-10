// data is constructor function
const now = new Date();

const date1 = new Date('May 11 2018 09:00');

// months start to count a 0, so 4 is May
const date2 = new Date('2018', 4, 11, 9);

now.setFullYear(2017);

now.toDateString();
now.toTimeString();

//commonly used in web applications, to transfer date between client and server
now.toISOString();