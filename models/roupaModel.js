// models/roupaModel.js
const roupasEmDestaque = [
    { imagem: "images/1.jpeg", descricao: "Blusa de Algodão Listrada", tamanho: "M", preco: 30.00 },
    { imagem: "images/2.jpeg", descricao: "Calça Jeans Rasgada", tamanho: "G", preco: 50.00 },
    { imagem: "images/3.jpeg", descricao: "Vestido Floral", tamanho: "P", preco: 40.00 }
  ];
  
  module.exports = {
    getRoupasEmDestaque: () => roupasEmDestaque
  };
  