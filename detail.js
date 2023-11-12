
let movieDetail = document.querySelector(".movie-detail");
let API_URL = "https://api.tvmaze.com";

let id = new URLSearchParams(location.search).get("id");
async function getAllMoviesByID(id) {
    let globalData;
    await axios.get(API_URL + `/shows/${id}`).then((result) => {
        globalData = result.data;
    });
    return globalData;
}


getMovieData();

async function getMovieData() {
    let movie = await getAllMoviesByID(id);
    movieDetail.innerHTML = `
    <div class="col-8 mt-5 ">
        <div class="cards d-flex">
            <div class="left-part">
                <div class="image-wrapper">
                    <img src="${movie.image.medium}"
                    alt="">
                </div>

                <div class="features">
                        <h4><strong>${movie.name}</strong></h4>
                        <p>Language:${movie.language}</p>
                        <p>Rating:${movie.rating.average}</p>
                </div>
            </div>

            <div class="right-part">
                <p>${movie.summary}</p>
                <p>Date:    ${movie.premiered}</p>
                <p class="movieGenres">Genres:${movie.genres.join(',')}</p>
            </div>
        </div>
    </div>

    
    `;
}



