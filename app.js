const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDgyMDlhZTJjODA0OTY3OGJiOGI3MjA1YWE1M2EyMCIsIm5iZiI6MTcxNzUwMTM2Ny44NDE5OTk4LCJzdWIiOiI2NjVlZmRiNzhkZGMzMjBkZTI5ZDc5MTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5Ruo0CjzFl2e7Y8GJvZdFWNCJ2qTC1ntwXElwJqsL54",
    },
  };
  // let api = fetch(
  //   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  //   options
  // );
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-IN&page=1";
  
  const container = document.querySelector(".container");
  // console.log(container);
  // console.log(api);
  // .then(res => res.json())
  // .then(res => console.log(res))
  // .catch(err => console.error(err));
  const tmdbapi = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    let movies = data.results;
  
    //   console.log(movies);
    movies.forEach((movie) => {
      console.log(movie);
      const card = document.createElement("div");
      card.classList.add("movie-card");
      // console.log(card);
      const innerhtml = `
                          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
                  alt="">
              <div class="movie-details">
                  <h2 class="movie-title">${movie.title}</h2>
                  <p class="movie-release-date"><strong>Release Date:</strong> ${movie.release_date}</p>
                  <p class="movie-language"><strong>Language:</strong>English</p>
                  <p class="movie-rating"><strong>Rating:</strong>${movie.vote_average}</p>
                  <p class="movie-overview"><strong>Overview:</strong>
                     ${movie.overview}
                  </p>
                  </div>
        `;
      card.innerHTML = innerhtml;
      container.appendChild(card);
    });
  };
  tmdbapi();
  // tmdbapi();
  // function tmdbapi() {
  // }