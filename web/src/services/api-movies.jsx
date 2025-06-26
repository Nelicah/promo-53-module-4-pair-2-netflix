// login

// archivo modificado según los comentarios y los ejercicios de nextflix

const getMoviesFromApi = (genreObj) => {
  console.log("Se están pidiendo las películas de la app");

  let url = "http://localhost:4000/api/movies";
  if (genreObj && genreObj.genre) {
    url = `${url}?genre=${genreObj.genre}`;
  }
  console.log("URL de la petición:", url);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
