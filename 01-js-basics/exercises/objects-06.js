// Exercise 06 - Price Range Object

// on yelp price categories are shown as $, $$, $$$, $$$$

// create array of objects, each object is a price range object

let priceRanges = [
    { label :    "$", tooltip: "Goedkoop", minPerPerson: 0, maxPerPerson: 10 },
    { label :   "$$", tooltip: "Gemiddeld", minPerPerson: 10, maxPerPerson: 25 },
    { label :  "$$$", tooltip: "Prijzig", minPerPerson: 25, maxPerPerson: 45 },
    { label : "$$$$", tooltip: "Hoog Segment", minPerPerson: 45, maxPerPerson: 100 }
];
console.log(priceRanges);

let restaurants = [
    { averagePerPerson: 5 }
]