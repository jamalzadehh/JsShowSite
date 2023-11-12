let API_URL = "https://api.tvmaze.com";

  

// moviess get all
export async function getAllMovies() {
  let globalData;
  await axios
    .get(API_URL + "/shows")

    .then((result) => {
      globalData = result.data;
    })
    .catch((err) => {
      console.error(err);
    })

  return globalData;
}




 