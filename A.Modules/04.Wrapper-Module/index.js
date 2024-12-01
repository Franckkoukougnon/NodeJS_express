const myModule = require("./MyModule.js");

function addWithModule(a, b) {
  console.log(`adding ${a} and ${b}`);
  return myModule.add(a, b);
}

function soustractWithModule(a, b) {
  console.log(`soustraction ${a} and ${b}`);
  return myModule.remove(a, b);
}

module.exports = { addWithModule, soustractWithModule };

console.log("====================================");
console.log("before");
const result = addWithModule(2, 3);
console.log("====================================");
console.log("after");
console.log(`resultat ${result}`);
console.log("====================================");

console.log("====================================");
console.log("before");
const result2 = soustractWithModule(10, 3);
console.log("====================================");
console.log("after");
console.log(`resultat ${result2}`);
console.log("====================================");
