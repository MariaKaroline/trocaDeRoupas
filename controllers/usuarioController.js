// usuarioController.js

const express = require('express');
const router = express.Router();

// Rota para exibir o formulário de cadastro de usuário
router.get('/cadastro', (req, res) => {
  res.render('cadastroUsuario'); // Renderiza a página EJS de cadastro
});

// Rota para lidar com o envio do formulário de cadastro
router.post('/cadastro', (req, res) => {
  const { nome, endereco, cpf, email, senha, confirmaSenha } = req.body;

  // Lógica para validar e salvar o usuário no banco de dados
  // Você pode chamar funções do modelo (model) de usuário aqui

  res.send('Usuário cadastrado com sucesso'); // Substitua por uma página de sucesso
});

module.exports = router;
