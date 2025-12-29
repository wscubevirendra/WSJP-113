const TOPMOVIESAPIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const inp = document.querySelector("#inp");


const container = document.querySelector(".container")


const movieSearch = async (API) => {
    console.log(API)
    const response = await fetch(API);
    const data = await response.json()
    showMovies(data.results || [])
}

function showMovies(movies) {
    container.innerHTML = ""
    movies.forEach(
        (data, index) => {
            const path = data.poster_path ? IMGPATH + data.poster_path : "https://easimages.basnop.com/default-image_600.png"

            const divElm = document.createElement("div");
            divElm.classList.add("card")
            divElm.innerHTML = `
             <img src=${path} alt="">
            <div class="overview">
                <h4>${data.title}</h4>
                <p>
                    <b>Overview</b> :
                   ${data.overview}
                </p>

            </div>
            <button>${data.vote_average}</button>
            `
            container.appendChild(divElm)
        }
    );
}


inp.addEventListener(
    "keyup",
    (event) => {
        if (event.target.value == "") {
            movieSearch(TOPMOVIESAPIURL)
        } else {
            movieSearch(SEARCHAPI + event.target.value)
        }
    }
)




movieSearch(TOPMOVIESAPIURL)