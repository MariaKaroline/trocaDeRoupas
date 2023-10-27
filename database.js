const fs = require('fs');
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

// Função para criar a tabela de Usuários
function criarTabelaUsuarios() {
    const sql = `
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        cpf VARCHAR(14) NOT NULL,
        email VARCHAR(255) NOT NULL,
        senha VARCHAR(255) NOT NULL
      );
    `;
  
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Erro ao criar tabela de usuários:', err);
      } else {
        console.log('Tabela de usuários criada com sucesso.');
      }
    });
  }
  
  module.exports = { criarTabelaUsuarios, db };