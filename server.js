// server.js

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta raíz
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
