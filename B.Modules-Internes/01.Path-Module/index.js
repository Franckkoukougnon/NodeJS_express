const path = require("node:path");

console.log(path.basename(__filename)); // route relative du fichier

console.log(path.basename(__dirname)); // route relative du dossier

console.log(path.extname(__filename)); // extension du fichier

console.log(path.parse(__filename)); // objet avec les infos du fichier

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename)); // verifie si le chemin est absolu

console.log(path.resolve("test", "test2", "index.html")); // chemin absolu
