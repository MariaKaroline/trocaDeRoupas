// models/UsuarioModel.js

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
  
    // Adicione outros métodos conforme necessário para o seu aplicativo
  }
  
  module.exports = Usuario;
  