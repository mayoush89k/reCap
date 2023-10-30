let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,
    votes: 2345890,
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    rating: 9.2,
    votes: 1620360,
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    rating: 9.0,
    votes: 1133175,
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    releaseYear: 2008,
    rating: 9.0,
    votes: 2303232,
  },
  {
    id: 5,
    title: "12 Angry Men",
    genre: "Crime, Drama",
    director: "Sidney Lumet",
    releaseYear: 1957,
    rating: 9.0,
    votes: 689845,
  },
];

//Movie Initials:
function initialMovie(movie) {
  let res = movie[0];
  for (let i = 0; i < movie.length; i++) {
    res += movie[i] == " " ? movie[i + 1] : "";
  }
  return res;
}
function getMovieInitials(title) {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}
// console.log("movie: " + movies[3].title + " is : " + getMovieInitials(movies[3].title))
// console.log("movie: " + movies[2].title + " is : " + initialMovie(movies[2].title))

// split genre
function splitGenre(genre) {
  return genre.split(",");
}

// console.log(splitGenre(movies[4].genre));

// arrow Function
const getTotalMovieLength = () => {
  const totalLength = movies.reduce(
    (acc, currentMovie) => (acc += currentMovie.title.length),
    0
  );
  return "Total movie length is " + totalLength + " minutes";
};

function getTotalMovieLength2(movies) {
  let totalLength = 0;
  for (let i = 0; i < movies.length; i++) {
    totalLength += movies[i].length;
  }
  return "Total movie length is " + totalLength + " minutes";
}
// console.log(getTotalMovieLength2());
//Array Methods
// 1. Display Movie Titles
function moviesTitle() {
  return movies.map((movie) => movie.title);
}
// console.log(moviesTitle());

// 2. Highly Rated Movies
function highlyRatedMovies(rate) {
  return movies.filter((movie) => movie.rating >= rate);
}
// console.log(highlyRatedMovies(9.1));

//Average Movie Rating
function averageMovieRating() {
  return (
    movies.reduce((acc, currentRating) => (acc += currentRating.rating), 0) /
    movies.length
  );
}

// console.log(averageMovieRating());

// 3. Sort Movies by Votes
function sortMoviesByVotes() {
  return [...movies].sort((a, b) => b.votes - a.votes);
}

// console.log(sortMoviesByVotes());

//Objects
// Exercise 1: Creating the Movie Database
// 1. database object
// 2.  store movies in the new object

const movieDatabase = {
  movies: [],
  addMovie: function (title) {
    this.movies.push({
      Title: title,
      Ratings: [],
      AverageRatings: 0,
    });
  },
  removeMovie: function (title) {
    return this.movies.splice(
      this.movies.findIndex((movie) => title == movie.Title),
      1
    );
  },
  addRatingToMovie: function (title, rating) {
    this.movies.find((movie) => {
      if (title == movie.Title) {
        movie.Ratings.push(rating);
        movie.AverageRatings = (
          movie.Ratings.reduce((acc, cur) => (acc += cur)) /
          movie.Ratings.length
        ).toFixed(2);
      }
    });
  },
  removeRatingFromMovie: function (title, rating) {
    this.movies.find((movie) => {
      if (movie.Title == title) {
        movie.Ratings.splice(
          movie.Ratings.findIndex((currentRating) => currentRating == rating),
          1
        );
      }
    });
  },
  searchingMovie: function (text) {
    
    return this.movies.filter((movie) => movie.Title.includes(text));
  },
};

movieDatabase.addMovie("Mad Max: Furry Road");
movieDatabase.addMovie("Venom");
movieDatabase.addMovie("White House Down");
movieDatabase.addMovie("Sonic The Hedge");
movieDatabase.addMovie("Fast Five");
movieDatabase.addMovie("The Quick and The Dead");
movieDatabase.addMovie("The Client");
// console.log(movieDatabase.movies);

// movieDatabase.removeMovie("Sonic The Hedge");
// console.log(movieDatabase.movies);

movieDatabase.addRatingToMovie("Mad Max: Furry Road", 9.1);
movieDatabase.addRatingToMovie("Venom", 9.2);
movieDatabase.addRatingToMovie("Venom", 9.1);
movieDatabase.addRatingToMovie("White House Down", 9.1);
movieDatabase.addRatingToMovie("White House Down", 9.2);
movieDatabase.addRatingToMovie("Sonic The Hedge", 9.2);
movieDatabase.addRatingToMovie("Sonic The Hedge", 9.1);
movieDatabase.addRatingToMovie("Fast Five", 9.2);
movieDatabase.addRatingToMovie("Fast Five", 9.1);
movieDatabase.addRatingToMovie("The Quick and The Dead", 9.1);
movieDatabase.addRatingToMovie("The Quick and The Dead", 9.2);
movieDatabase.addRatingToMovie("The Client", 9.2);
movieDatabase.addRatingToMovie("The Client", 9.1);
// console.log(movieDatabase.movies);

movieDatabase.removeRatingFromMovie("The Client", 9.1);
// console.log(movieDatabase.movies);

// console.log(movieDatabase.searchingMovie("The"));
// console.log(movieDatabase.searchingMovie("o"));
