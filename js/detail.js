document.addEventListener("DOMContentLoaded", function () {

    let gridContainer = document.createElement("section");
    gridContainer.classList.add("gridContainer");
    document.body.append(gridContainer);

    let params = new URLSearchParams(window.location.search);
    let movie_id = params.get("id");
    console.log(movie_id);
  
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=02edc4c44ad4486b6397687549f262c7&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        let detailsArticle = document.createElement("article");
        detailsArticle.classList.add("details");
        detailsArticle.innerHTML = `
          <img class="imgDetails" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}">
            `;
        gridContainer.append(detailsArticle);
      });
  

  let headerTime = document.createElement("section");
  headerTime.classList.add("headerTime");
  headerTime.innerHTML = `
        <p>9:42</p>
        <p>[IIII]</p>`;
  gridContainer.append(headerTime);

  let MymoviesMode = document.createElement("section");
  MymoviesMode.classList.add("Mymovies");
  MymoviesMode.innerHTML = `
    <div class="container1 blog">
        <p><=</p>
        <h1 class="centerPx"></h1>
        <label class="switch" for="toggle-btn">
        <input id="toggle-btn" type="checkbox">
        <span class="slider round"></span>
        </label>
      </div>`;
  gridContainer.append(MymoviesMode);

  /*
        <h2 class="">${data.title}</h2>

  */
});
