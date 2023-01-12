// Movies list
let movies = [];

// Function to add a movie to the watch list
function addMovie(title, rating) {
    let movie = {
        title: title,
        rating: rating,
    };
    movies.push(movie);
}

// Function to rate a movie
function rateMovie(title, newRating) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === title) {
            if(newRating>0 && newRating < 11){
                movies[i].rating = newRating;
                console.log(`${title} is now rated ${newRating}`);
                return;
            }
            console.log(`rating must be between 1 to 10`)
            return;
        }
    }
    console.log(`${title} not found`);
}

// Usage:
addMovie("The Shawshank Redemption", 9);
addMovie("The Godfather", 9);
addMovie("The Dark Knight", 8);

console.log(movies); // [{ title: "The Shawshank Redemption", rating: 9 }, { title: "The Godfather", rating: 9 }, { title: "The Dark Knight", rating: 8 }]

rateMovie("The Shawshank Redemption", 10); // "The Shawshank Redemption is now rated 10"
console.log(movies); // [{ title: "The Shawshank Redemption", rating: 10 }, { title: "The Godfather", rating: 9 }, { title: "The Dark Knight", rating: 8 }]

rateMovie("The Godfather", 6); // "The Godfather is now rated 6"
console.log(movies); // [{ title: "The Shawshank Redemption", rating: 10 }, { title: "The Godfather", rating: 6 }, { title: "The Dark Knight", rating: 8 }]

rateMovie("The Shawshank Redemption", -1); // "rating must be between 1 to 10"
console.log(movies); // [{ title: "The Shawshank Redemption", rating: 10 }, { title: "The Godfather", rating: 6 }, { title: "The Dark Knight", rating: 8 }]

rateMovie("The Shawshank Redemption", 12); // "rating must be between 1 to 10"
console.log(movies); // [{ title: "The Shawshank Redemption", rating: 10 }, { title: "The Godfather", rating: 6 }, { title: "The Dark Knight", rating: 8 }]
