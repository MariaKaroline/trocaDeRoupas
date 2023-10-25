const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');


app.use(express.static('public'));
app.set("view engine", "ejs");

// Importe o controlador
const roupaController = require('./controllers/roupaController');
const usuarioController = require('./controllers/usuarioController');
const cadastroUsuarioPath = path.join(__dirname, 'views', 'cadastroUsuario.ejs');

// Defina a rota que aciona o controlador para mostrar as roupas
app.get("/", roupaController.mostrarRoupas);
app.use('/usuarios', usuarioController);
app.get('/cadastroUsuario', (req, res) => {
  // Renderize a página de cadastroUsuario.ejs
  res.render(cadastroUsuarioPath);
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.use(express.urlencoded({ extended: true })); // Middleware para analisar dados do formulário

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
  port: 3306,
  ssl: {
    ca: fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")
  }
});
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

global.db = db;
