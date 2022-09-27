document.addEventListener("DOMContentLoaded", function () {
  let baseURL = "https://api.themoviedb.org/3";
  let apiKey = "02edc4c44ad4486b6397687549f262c7";
  let wrapper = document.querySelector(".wrapper");

  let header = document.createElement("header");
  header.classList.add("header");
  wrapper.append(header);

  let main = document.createElement("main");
  main.classList.add("main");
  wrapper.append(main);

  let footer = document.createElement("footer");
  footer.classList.add("footer");
  wrapper.append(footer);

  //Time
  let headerTime = document.createElement("section");
  headerTime.classList.add("headerTime");
  headerTime.innerHTML = `
      <p>9:41</p>
      <p>[IIII]</p>`;
  header.append(headerTime);

  //Header
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
  header.append(MymoviesMode);

  let stylesheet = function (title) {
    let css = `link[rel="alternative stylesheet"]`;
    let stylesheets = document.querySelectorAll(css);
    stylesheets.forEach((sheet) => (sheet.disabled = true));
    let selector = `link[title="${title}"]`;
    let aktiveSheet = document.querySelector(selector);
    aktiveSheet.disabled = false;
  };

  let mode = document.querySelector(".myCheckbox");
  mode.addEventListener("click", function (event) {
    if (event.target.checked) {
      stylesheet("dark");
      localStorage.setItem("theme", "dark");
    } else {
      stylesheet("light");
      localStorage.setItem("theme", "light");
    }
  });

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

  let NowShowing = document.createElement("section");
  NowShowing.classList.add("headerNowShowing");
  NowShowing.innerHTML = `
  <div class="container1">
      <h1>Now Showing</h1>
      <button class="btnGrey">See more</button>
    </div>`;
  main.append(NowShowing);

  let sectionNowShowingContainer = document.createElement("section");
  sectionNowShowingContainer.classList.add("sectionNowShowing");
  main.append(sectionNowShowingContainer);

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
          <p>${result.vote_average}/10 IMDb</p>
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
  main.append(popular);

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
            <p>${result.vote_average}/10 IMDb</p>
            <div class="genres"></div>
            <div class="time"></div>
      </div>
          `;
        main.append(popularLink);

        let genres = popularLink.querySelector(".genres");
        console.log(genres);
        let time = popularLink.querySelector(".time");

        fetch(
          `https://api.themoviedb.org/3/movie/${result.id}?api_key=02edc4c44ad4486b6397687549f262c7&language=en-US`
        )
          .then((response) => response.json())
          .then((genreData) => {
            console.log(genreData);

            genreData.genres.forEach((genre) => {
              let buttonGenre = document.createElement("button");
              buttonGenre.classList.add("btnBlue");
              buttonGenre.innerText = `${genre.name}`;
              genres.append(buttonGenre);
            });
            
         });
    
      });

      let footerSection = document.createElement("section");
      footerSection.classList.add("footer");
      footerSection.innerHTML = `
            <p class="margin">X</p>
            <p class="margin">X</p>
            <p class="margin">X</p>
            `;
      footer.append(footerSection);
    });
  /*
          <p>${result.popularity}.toFixed(10)/10 IMDb</p>

  let blogContainer = document.querySelector(".blog");
  let toggleBtn = document.querySelector("#toggle-btn");
  let switchTheme = () => {
    blogContainer.classList.toggle("dark");
  };
  toggleBtn.addEventListener("click", switchTheme);


<p>${genreData.runtime}</p> 

            genreData.runtime.forEach((minutes) => {
              let times = document.createElement("article");
              times.innerHTML = `
              <p>${minutes.runtime}</p>
              `;
            time.append(times);
          });


*/
});
