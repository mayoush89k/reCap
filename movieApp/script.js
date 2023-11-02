const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,
    votes: 2345890,
    img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    rating: 9.2,
    votes: 1620360,
    img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    rating: 9.0,
    votes: 1133175,
    img: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    releaseYear: 2008,
    rating: 9.0,
    votes: 2303232,
    img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    id: 5,
    title: "12 Angry Men",
    genre: "Crime, Drama",
    director: "Sidney Lumet",
    releaseYear: 1957,
    rating: 9.0,
    votes: 689845,
    img: "https://m.media-amazon.com/images/S/pv-target-images/b92d2865829416e35e7102a3934a2ee745f3b903a95678710442d4299d86f39c.jpg",
  },
  {
    id: 6,
    Const: "tt1596343",
    Created: "2/22/2013",
    Modified: "2/22/2013",
    title: "Fast Five",
    URL: "https://www.imdb.com/title/tt1596343/",
    "Title Type": "movie",
    rating: 7.2999999999999998,
    "Runtime (mins)": 130,
    releaseYear: 2011,
    genre: "Action, Crime, Thriller",
    "Release Date": "4/15/2011",
    director: "Justin Lin",
    Rate: 10,
    "Date Rated": "2/22/2013",
    Actor: "Paul Walker",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Fast_Five_poster.jpg",
    alt: "Fast Five Photo",
  },
  {
    id: 7,
    Const: "tt1392190",
    Created: "5/5/2018",
    Modified: "5/5/2018",
    title: "Mad Max: Fury Road",
    URL: "https://www.imdb.com/title/tt1392190/",
    "Title Type": "movie",
    rating: 8.0999999999999996,
    "Runtime (mins)": 120,
    releaseYear: 2015,
    genre: "Action, Adventure, Sci-Fi, Thriller",
    "Release Date": "5/7/2015",
    director: "George Miller",
    Rate: 10,
    "Date Rated": "5/12/2018",
    Actor: "Tom Hardy",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    alt: "Mad Max: Fury Road photo",
  },
];

//DOM Catcher
const mainContainer = document.querySelector("#main-container");
// const movieRow = document.getElementsByClassName("movie-row");
const movieRow = document.querySelector(".movie-row");
function resetMovies(movies) {
  movieRow.innerText = "";
  movies.map((movie) => {
    displayMovie(movie);
  });
}
resetMovies(movies);

function displayMovie(movie) {
  const movieBox = document.createElement("section");
  movieBox.classList.add("movie-box");

  // if (movie.id % 5 == 0) {
  //   movieRow.push(document.createElement("section"));
  //   movieRow[Math.floor(movie.id / 5)].setAttribute('id',`movie-row${movie.id / 5}`);
  //   movieRow[Math.floor(movie.id / 5)].classList.add("movie-row");
  //   // !
  // }
  const img = document.createElement("img");
  img.setAttribute("src", movie.img);
  img.setAttribute("alt", movie.alt);

  const title = document.createElement("h1");
  title.innerText = movie.title;

  const director = document.createElement("section");
  director.innerHTML = "<b>Director: </b>" + movie.director;

  const genre = document.createElement("section");
  genre.innerHTML = "<b>Genres: </b>" + movie.genre;

  const imdbRate = document.createElement("section");
  imdbRate.innerHTML = "<b>Rating: </b>" + movie.rating;

  const year = document.createElement("section");
  year.innerHTML = "<b>Year: </b>" + movie["releaseYear"];

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove");
  removeBtn.addEventListener("click", () => {
    movies.splice(movie.id - 1, 1);
    // document.getElementById(`movie-row${Math.floor(movie.id/5)}`).removeChild(movieBox);
    resetMovies(movies);
  });

  // updating card after clicking on movie card
  movieBox.addEventListener("click", () => {
    // creating new window of current card with same details
    const updatingWindow = document.createElement("section");
    updatingWindow.classList.add("update");

    const img = document.createElement("img");
    // img.style.width = ""
    img.setAttribute("src", movie.img);
    img.setAttribute("alt", movie.alt);
    // updating image src link by alert input output
    img.addEventListener("click", () => {
      const newImgLink = prompt("Enter new img Link")   
      movie.img = newImgLink ? newImgLink : movie.img;
    });

    //adding new labels and inputs of each data of card , and each one of input has listener when updating on input
    const titleLabel = document.createElement("label");
    titleLabel.innerText = "Title: ";
    const title = document.createElement("input");
    title.setAttribute("placeholder", movie.title);
    title.addEventListener('input' , (e) => movie.title = e.target.value)
    
    const directorLabel = document.createElement("label");
    directorLabel.innerText = "Director: ";
    const director = document.createElement("input");
    director.setAttribute("placeholder", movie.director);
    director.addEventListener('input' , (e) => movie.director = e.target.value)
    
    const genreLabel = document.createElement("label");
    genreLabel.innerText = "Genres: ";
    const genre = document.createElement("input");
    genre.setAttribute("placeholder", movie.genre);
    genre.addEventListener('input' , (e) => movie.genre = e.target.value)
    
    const ratingLabel = document.createElement("label");
    ratingLabel.innerText = "Rating: ";
    const imdbRate = document.createElement("input");
    imdbRate.setAttribute("placeholder" , movie.rating)
    imdbRate.addEventListener('input' , (e) => movie.rating = e.target.value)
    
    const yearLabel = document.createElement('label')
    yearLabel.innerText = "Year: ";
    const year = document.createElement("input");
    year.setAttribute("placeholder" , movie.releaseYear)
    year.addEventListener('input' , (e) => movie.releaseYear = e.target.value)

    // adding button to submit my changes to be shown on the list of movies 
    const finishUpdate = document.createElement("button")
    finishUpdate.innerText = "Update"
    finishUpdate.addEventListener("click" , () => {
      mainContainer.removeChild(updatingWindow)
      resetMovies(movies)}
      )

      // adding all elements that have been added recently to the new updating window
    updatingWindow.append(
      img,
      titleLabel,
      title,
      directorLabel,
      director,
      genreLabel,
      genre,
      ratingLabel,
      imdbRate,
      yearLabel,
      year,
      finishUpdate
    );
    mainContainer.appendChild(updatingWindow);
  });
  movieBox.append(img, title, director, genre, imdbRate, year, removeBtn);
  // movieRow[Math.floor(movie.id / 5)].appendChild(movieBox);
  // mainContainer.appendChild(movieRow[Math.floor(movie.id / 5)]);
  movieRow.appendChild(movieBox);
  mainContainer.appendChild(movieRow);
}

// add movie
const formBox = document.querySelector(".form-box");
const addMovieButton = document.querySelector("#add");
addMovieButton.addEventListener("click", () => {
  formBox.classList.remove("form-box");
});

const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const imgLink = document.querySelector("#imgLink");
const directorInput = document.querySelector("#director");
const ratingInput = document.querySelector("#rating");
const yearInput = document.querySelector("#year");
const genreInput = document.querySelector("#genre");

form.addEventListener("submit", addMovieFunction);

function addMovieFunction(e) {
  e.preventDefault();
  movies.push({
    id: movies.length,
    title: titleInput.value ? titleInput.value : "",
    img: imgLink.value ? imgLink.value : "",
    alt: titleInput.value + " Photo",
    director: directorInput.value ? directorInput.value : "",
    genre: genreInput.value ? genreInput.value : "",
    releaseYear: yearInput.value ? yearInput.value : 0,
    rating: ratingInput.value ? ratingInput : 0,
  });
  displayMovie(movies[movies.length - 1]);
  formBox.classList.add("form-box");
}

// search input
const searchInput = document.querySelector("#search-input");
const search = document.querySelector("#search-input");
search.addEventListener("input", (e) => {
  const text = e.target.value;
  console.log(text);
  resetMovies([
    ...movies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    ),
  ]);
});

//update movie
// function updateMovie(e)
