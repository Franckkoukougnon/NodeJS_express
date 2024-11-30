class Animal {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
  saluer() {
    console.log("dire bonjour");
  }
}

class Chien extends Animal {
  aboyer() {
    console.log("woof woof");
  }
}

const monChien = new Chien("rex", 12);
monChien.aboyer();
monChien.saluer();

console.log(monChien);
