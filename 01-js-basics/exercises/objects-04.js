// exercise 04 - Blog Post Object
// create blogpost with properties

let post = {
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
console.log(post);