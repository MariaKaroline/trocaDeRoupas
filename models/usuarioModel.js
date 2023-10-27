// models/UsuarioModel.js

const { db } = require('../database');

class Usuario {
  constructor(nome, endereco, cpf, email, senha) {
    this.nome = nome;
    this.endereco = endereco;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
  }

  // Métodos para acessar ou modificar propriedades do usuário, se necessário
  getNome() {
    return this.nome;
  }

  setNome(novoNome) {
    this.nome = novoNome;
  }

  // Método para salvar o usuário no banco de dados
  salvar(callback) {
    const query = 'INSERT INTO usuarios (nome, endereco, cpf, email, senha) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [this.nome, this.endereco, this.cpf, this.email, this.senha], (err, result) => {
      if (err) {
        console.error('Erro ao inserir usuário no banco de dados:', err);
        callback(err, null);
      } else {
        console.log('Usuário cadastrado com sucesso.');
        callback(null, result);
      }
    });
  }

  // Adicione outros métodos conforme necessário para o seu aplicativo
}

module.exports = Usuario;
