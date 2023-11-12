import {
    getAllMovies,
  } from "./request.js";
  
  let dataWrapper = document.querySelector(".cards-wrapper");
  
 
  
  getMovies();
  
  
  
  async function getMovies() {
    const movieData = await getAllMovies();
    movieData.forEach((movie) => {
      dataWrapper.innerHTML += `
                        
                    <div class="col-3 mt-5">
                        <div class="card">
                            <div class="card-img">
                                <img src="${movie.image.medium}"
                                 class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                            <h4 class="card-capital"><strong>${movie.name}</strong></h4>
                            <p class="card-capital">${movie.rating.average}</p>
                            <a href="./detail.html?id=${movie.id}" class="btn btn-outline-primary">Detail</a>
                            </div>
                        </div>
                    </div>`;
        });
  }