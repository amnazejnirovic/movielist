const express = require("express");
const ejs = require("ejs");
const app = express();

// Use EJS as the template engine
app.set("view engine", "ejs");

// Store the movies in an array
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

// adding some movies to the watch list
addMovie("The Shawshank Redemption", 9);
addMovie("The Godfather", 9);
addMovie("The Dark Knight", 8);

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.render("index", { movies });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
