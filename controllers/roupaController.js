// controllers/roupaController.js
const roupaModel = require('../models/roupaModel');

module.exports = {
  mostrarRoupas: (req, res) => {
    const pageTitle = "Bem-vindo à nossa Loja de Roupas Usadas";
    const roupasEmDestaque = roupaModel.getRoupasEmDestaque();

    res.render("index", { pageTitle, roupasEmDestaque });
  }
};

