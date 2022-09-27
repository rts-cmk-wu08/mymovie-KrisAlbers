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
      <p></p>
      <h1 class="centerPx">MyMovies</h1>
      <label class="switch">
      <input id="myCheckbox" class="myCheckbox" type="checkbox">
      <span class="slider round"></span>
      </label>
    </div>`;
  gridContainer.append(MymoviesMode);

  let stylesheet = function(title) {
    let css = `link[rel="alternative stylesheet"]`;
    let stylesheets = document.querySelectorAll(css);
    stylesheets.forEach(sheet => sheet.disabled = true);
    let selector = `link[title="${title}"]`
    let aktiveSheet = document.querySelector(selector);
    aktiveSheet.disabled = false;
  }
  
  let mode = document.querySelector(".myCheckbox");
  mode.addEventListener("click", function(event){
    if (event.target.checked){
      stylesheet("dark");
      localStorage.setItem("theme", "dark");
    }else {
      stylesheet("light");
      localStorage.setItem("theme", "light");
    }
  })
  
  let savedSheet = localStorage.getItem("theme");
  console.log(savedSheet);
  if (savedSheet) {
    if (savedSheet == "dark") {
      document.getElementById("myCheckbox").checked = true;
      stylesheet(savedSheet);
    }
  } else {
    stylesheet("light");
  }
  

  let SecondContainer = document.createElement("section");
  SecondContainer.classList.add("SecondContainer");
    document.body.append(SecondContainer);

  fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=02edc4c44ad4486b6397687549f262c7&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);


      function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "min";
        }
        
        var time = timeConvert(`${data.runtime}`);
        console.log(time);
        
        

      let detailsArticle2 = document.createElement("article");
      detailsArticle2.classList.add("details2");
      detailsArticle2.innerHTML = `
        <h2 class="titleDetail">${data.title}</h2>
        <p class="marginDetail">${data.vote_average}/10 IMDb</p>
        <div class="marginDetail genresArray">
        </div>
        <div class="marginDetail flex">
        <p class="">Lenght <br>${time}</p>
        <p class="marginDetail">Language <br>${data.spoken_languages[0].english_name}</p>
        <p class="marginDetail">Vote Count <br>${data.vote_count}</p>
        </div>
        <h2 class="titleDetail">Description</h2>
        <p class="marginDetail">${data.overview}</p>
        <div class="flexSpaceBetween">
        <h2 class="CastDetail">Cast</h2>
        <button class="btnGrey">See more</button>
        </div>
          `;
      SecondContainer.append(detailsArticle2);
      console.log(data.spoken_languages);

      let genresArray = detailsArticle2.querySelector(".genresArray");
      data.genres.forEach((genre) => {
        console.log(genre);
        let genre2 = document.createElement("button");
        genre2.classList.add("btnBlue");
        genre2.innerText = `${genre.name}`;
      genresArray.append(genre2);
      });
    });

    let castElement = document.createElement("section");
    castElement.classList.add("castElement");
    document.body.append(castElement);

    let imgPathCast ="https://image.tmdb.org/t/p/original"

    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=02edc4c44ad4486b6397687549f262c7&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        data.cast.slice(0, 4).forEach((result) => {
          let articleCast = document.createElement("article");
          articleCast.classList.add("castArticle");
          articleCast.innerHTML = `
            <img class="castArticleImg" src="${imgPathCast + result.profile_path}" alt="${result.name}">
            <p class="pCast">${result.name}</p>
            `;
          castElement.append(articleCast);
        });
      });





  /*
        <h2 class="">${data.title}</h2>

  */
});
