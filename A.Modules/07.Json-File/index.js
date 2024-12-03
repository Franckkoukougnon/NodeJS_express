const data = require("./data.json");

const donnee = data.produit.map((produit) => {
  return `Id : ${produit.id} | Nom : ${produit.nom} | Prix : ${produit.prix}`;
});

const result = data.produit.forEach((produit) => {
  console.log(`id: ${produit.id}, nom: ${produit.nom}, prix: ${produit.prix}`);
});

//console.log(donnee);
console.log(result);
