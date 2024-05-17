const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Este es un servidor basico desde Express!");
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
