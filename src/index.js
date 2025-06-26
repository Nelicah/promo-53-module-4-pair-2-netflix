const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

//fake movies data
const fakeMovies = [
  {
    id: 1,
    title: "Wonder Woman",
    genre: "Action",
    image:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/12/gal-gadot-como-wonder-woman-universo-extendido-dc-2895594.jpg?tf=3840x",
    category: "Superhero",
    year: 2017,
    director: "Patty Jenkins",
  },
  {
    id: 2,
    title: "Inception",
    genre: "Science Fiction",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
    category: "Thriller",
    year: 2010,
    director: "Christopher Nolan",
  },
];

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get("/api/movies", async (req, res) => {
  console.log("Query params:", req.query);
  const genreFilterParam = req.query.genre;
  console.log("Género recibido:", genreFilterParam);
  //Conectamos a la bbdd
  const datosConexion = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  };

  const conexion = await mysql.createConnection(datosConexion);

  await conexion.connect();

  //Lanzamos la query

  const datos = await conexion.query(`Select * FROM netflix.movies`);

  // Recuperamos los datos

  const [resultado] = datos;

  //Cerramos la conexión
  await conexion.end();

  //Dev en el res los datos
  res.json({
    success: true,
    movies: resultado,
  });
});

/* server.get("/api/movies", (req, res) => {
  res.json({
    success: true,
    movies: fakeMovies,
  });
}); */
