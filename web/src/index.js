const express = require("express");

// Creamos una vari con el servidor
const server = express();

// Arrancamos el servidor en el puerto 4000
const port = 4000;
server.listen(port, () => {
  console.log(`Servidor iniciado <http://localhost:${port}>`);
});

server.get("/", (req, res) => {
  console.log("Holis"); // -> Se ve en la terminal

  res.send("Holis Adalabers!!!"); // -> Se ve en la página
});
