// Boucle
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//Boucle For of
let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

for (let key in fruits) {
  console.log(`${key} : ${fruits[key]}`); // 0 : Apple 1 : Banana 2 : Orange
}

let string = "Hello";
for (let mot of string) {
  console.log(char);
}

// boucle For in
let person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
  console.log(`${key} : ${person[key]} `);
}
