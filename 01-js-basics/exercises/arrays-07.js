// exercise 07 - Movies

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// STEP1 - All the movies in 2018 with rating > 4

const filtered = movies.filter( function(value){
    if (value.year === 2018 && value.rating > 4) return 1;
});
console.log(filtered);

// STEP2 - Sort them by their rating in descending order

const sorted = filtered.sort( function(a,b){  // supply comparison function for objects
    if(a.title>b.title) return +1;
    else
        if (a.title===b.title) return 0;
    return -1;
});
console.log(sorted);

// STEP 3 - reverse

const reversed = sorted.reverse();

// STEP 4 - Pick their title

const titles = reversed.map( n => n.title );
console.log(titles);



// official solution

const titles2 = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
console.log(titles2);