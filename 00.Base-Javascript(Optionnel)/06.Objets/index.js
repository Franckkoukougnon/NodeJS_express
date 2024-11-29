let person = {
  name: "John",
  age: 26,
  ville: "bordeaux",
};

console.log(person);
console.log("================================================");
console.log(person.name);
person.name = "Johnathan";
console.log(person.name);
person["name"] = "David";
console.log(person.name);
