// exercise 05 - Constructor Functions
// create blogpost with properties
// previous exercise
let post1 = {
    title : "What is object literal syntax in JS?",
    body : "Lorem Ipsum",
    author : "Klaasje Meijer",
    views : 0,
    // array because multiple comments are possible
    comments : [
        {author : "Reaguurder", body : "Nee hoor."},
        {author : "Reaguurder", body : "Nee hoor."}
    ],
    isLive : true
};
console.log(post1);

// exercise 05
// constructor function for blogpost not published yet
// aim to have functions with fewer parameters ! (best practice)
function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0; // init zero views
    this.comments = []; // init empty array
    this.isLive = false;
}

let post2 = new Post ("What is object literal syntax in JS?", "Lorem Ipsum","Klaasje Meijer");
console.log(post2);
