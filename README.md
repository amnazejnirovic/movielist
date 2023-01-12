# movielist
Site for adding movies to your watchlist and rating them from 1 to 10
Here, we have defined two functions addMovie and rateMovie for adding a movie to the watchlist and updating the rating of the movie respectively. 
The addMovie function takes in two arguments title and rating and creates an object representing the movie and pushes it to the movies array. 
The rateMovie function takes in two arguments title and newRating and iterates over the movies array searching for the movie object with the given title and updates the rating if it is between 1 to 10 otherwise it shows an error message, it also shows an error message if the movie title is not found in the array.
