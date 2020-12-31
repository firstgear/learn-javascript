// 11 - joining arrays

const numbers = [1, 2, 3]; // array
const joined = numbers.join(','); //creates a string
console.log(joined);

// create a URL slug (slak), indicates a short internal name for article
const title = "K3 Meet and greet tijdens Corona";
const parts = title.toLowerCase().split(" ");
const url = parts.join('-'); // creates a string
console.log(url); // k3-meet-and-greet-tijdens-corona

// similar split can create array from string