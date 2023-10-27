// usuarioController.js

const express = require('express');
const router = express.Router();
const db = require('../database');
const Usuario = require('../models/usuarioModel'); // Importe a classe do modelo do usuário



// Rota para exibir o formulário de cadastro de usuário
router.get('/cadastro', (req, res) => {
  res.render('cadastroUsuario'); // Renderiza a página EJS de cadastro
});

router.post('/cadastrar', (req, res) => {
  const { nome, endereco, cpf, email, senha } = req.body;

  // Crie uma instância do usuário com os dados do formulário
  const novoUsuario = new Usuario(nome, endereco, cpf, email, senha);

  // Chame o método de salvar do modelo para inserir o usuário no banco de dados
  novoUsuario.salvar((err, result) => {
    if (err) {
      res.status(500).send('Erro ao cadastrar o usuário.');
    } else {
      res.redirect('/login'); // Ou redirecione para outra página de confirmação
    }
  });
});

module.exports = router;
