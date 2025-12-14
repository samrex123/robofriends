const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'dogpictures.com',
    'catpictures.com',
    'myfavouritecats.com',
];


const googleSearch = (searchInput, db) => {
    const matches = db.filter((site) => site.includes(searchInput));
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

//console.log(googleSearch('cat'));

module.exports = googleSearch;