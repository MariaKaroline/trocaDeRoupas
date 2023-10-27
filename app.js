const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const portdb = process.env.PORT || 3306;

const db = require('./database');

app.use(express.static('public'));
app.set("view engine", "ejs");

// Middleware express.urlencoded deve vir antes das rotas
app.use(express.urlencoded({ extended: true }));

// Importe o controlador
const roupaController = require('./controllers/roupaController');
const usuarioController = require('./controllers/usuarioController');
const cadastroUsuarioPath = path.join(__dirname, 'views', 'cadastroUsuario.ejs');

// Defina a rota que aciona o controlador para mostrar as roupas
app.get("/", roupaController.mostrarRoupas);
app.get('/cadastroUsuario', (req, res) => {
  // Renderize a página de cadastroUsuario.ejs
  res.render(cadastroUsuarioPath);
});
app.use('/usuarios', require('./controllers/usuarioController')); // Use o controlador para gerenciar as rotas relacionadas aos usuários


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


db.criarTabelaUsuarios();

// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host: "brecho-storage.mysql.database.azure.com",
//   user: "Admin_storage",
//   password: "Bazarcomnode123",
//   database: "brecho_db",
//   port: 3306,
//   ssl: {
//     ca: fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")
//   }
// });
// connection.connect((err) => {
//   if (err) {
//     console.error('Erro ao conectar ao banco de dados:', err);
//   } else {
//     console.log('Conectado ao banco de dados');
//   }
// });

// module.exports = connection;

// global.db = connection;
