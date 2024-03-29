const APIURL = "https://api.themoviedb.org/3/discover/movie?api";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api";
const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get trending movies
obtainMovies(APIURL);
async function obtainMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  console.log(respData);
  displayMovies(respData.results);
}
// Movies section //
function displayMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                  vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;
    main.appendChild(movieEl);
  });
}
// Ratings //
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
// Search function for other movies //
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    obtainMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
});
