// login

// archivo modificado según los comentarios y los ejercicios de nextflix

const getMoviesFromApi = () => {
  console.log("Se están pidiendo las películas de la app");
  return fetch("//localhost:4000/api/movies")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
