// Exercise 7 - object properties

const movie = {
    title: 'Contagion',
    releaseYear: 2011,
    rating: 6.7,
    leadRole: 'Gwyneth Paltrow'
};

showProperties(movie);

// use for..in to iterate over properties of object
function showProperties (movie) {
    for (let key in movie) {
        console.log( key, movie[key] );
    }
}
