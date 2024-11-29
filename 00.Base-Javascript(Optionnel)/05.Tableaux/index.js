// ajouter un fruit dans le tableau

console.log("================================================");
console.log("Afficher un tableau");
const fruits = ["pomme", "banane", "poire", "cerise"];
console.log(fruits);

console.log("================================================");
console.log("Ajouter un élément dans un tableau");
fruits.push("fraise");
console.log(fruits);
console.log("================================================");
console.log("retirer le dernier element du tableau");
fruits.pop();
console.log(fruits);
console.log("================================================");
console.log("retirer le premier element du tableau");
fruits.shift();
console.log(fruits);
console.log("================================================");
console.log("ajouter un element au debut du tableau");
fruits.unshift("kiwi");
console.log(fruits);
console.log("================================================");
const tab1 = ["a", "b", "c"];
const tab2 = ["d", "e", "f"];
console.log("Concatener 2 tableaux");
const tab3 = tab1.concat(tab2);
console.log(tab3);
