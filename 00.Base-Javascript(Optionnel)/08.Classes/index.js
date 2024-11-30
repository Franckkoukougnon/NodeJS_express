class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saluer() {
    console.log(`je m'appelle ${this.name} et j'ai ${this.age} ans`);
  }
}

console.log("====================================");
console.log("Instance d'une nouvelle Person");
const person1 = new Person("John", 22);
console.log(person1);

console.log("====================================");
console.log("====================================");
console.log("utilisation de la methode");
console.log("====================================");
person1.saluer();
