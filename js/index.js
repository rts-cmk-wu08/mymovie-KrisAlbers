document.addEventListener("DOMContentLoaded", function () {
  let headerTime = document.createElement("section");
  headerTime.classList.add("headerTime");
  headerTime.innerHTML = `
      <p>9:41</p>
      <p>[IIII]</p>`;
  document.body.append(headerTime);
  
  let MymoviesMode = document.createElement("section");
  MymoviesMode.classList.add("Mymovies");
  MymoviesMode.innerHTML = `
  <div class="container1 blog">
      <p></p>
      <h1 class="centerPx">MyMovies</h1>
      <label class="switch" for="toggle-btn">
      <input id="toggle-btn" type="checkbox">
      <span class="slider round"></span>
      </label>
    </div>`;
  document.body.append(MymoviesMode);

  let NowShowing = document.createElement("section");
  NowShowing.classList.add("headerNowShowing");
  NowShowing.innerHTML = `
  <div class="container1">
      <h1>Now Showing</h1>
      <button class="btnGrey">See more</button>
    </div>`;
  document.body.append(NowShowing);

  let sectionNowShowingContainer = document.createElement("section");
  sectionNowShowingContainer.classList.add("sectionNowShowing");
  document.body.append(sectionNowShowingContainer);

  fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=02edc4c44ad4486b6397687549f262c7&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.results.forEach((result) => {
        let NowShowingLink = document.createElement("a");
        NowShowingLink.setAttribute("href", `detail.html?id=${result.id}`);
        NowShowingLink.classList.add("NowShowingLink");
        NowShowingLink.innerHTML = `
          <img class="nowShowingImg" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}">
          <h2 class="">${result.title}</h2>
          <p>${result.popularity}/10 IMDb</p>
          `;
        sectionNowShowingContainer.append(NowShowingLink);
      });
    });

  let popular = document.createElement("section");
  popular.classList.add("headerNowShowing");
  popular.innerHTML = `
    <div class="container1">
        <h1>Popular</h1>
        <button class="btnGrey">See more</button>
      </div>`;
  document.body.append(popular);


  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=02edc4c44ad4486b6397687549f262c7&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.results.forEach((result) => {
        let popularLink = document.createElement("a");
        popularLink.setAttribute("href", `detail.html?id=${result.id}`);
        popularLink.classList.add("popularLink");
        popularLink.innerHTML = `
          <img class="popularImg" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}">
          <div class="containerPopular">
            <h2 class="">${result.title}</h2>
            <p>${result.popularity}/10 IMDb</p>
            <div>
            <button class="btnBlue">${result.genre_ids}</button>
            <button class="btnBlue">Sere</button>
            <button class="btnBlue">Seore</button>
            </div>
            <p>${result.popularity}/10 IMDb</p>        
      </div>
          `;
        document.body.append(popularLink);
      });
      
      let footer = document.createElement("section");
    footer.classList.add("footer");
    footer.innerHTML = `
            <p class="margin">X</p>
            <p class="margin">X</p>
            <p class="margin">X</p>
            `;
    document.body.append(footer);
    
  });
  /*
          <p>${result.popularity}.toFixed(10)/10 IMDb</p>

  let blogContainer = document.querySelector(".blog");
  let toggleBtn = document.querySelector("#toggle-btn");
  let switchTheme = () => {
    blogContainer.classList.toggle("dark");
  };
  toggleBtn.addEventListener("click", switchTheme);





*/
});
