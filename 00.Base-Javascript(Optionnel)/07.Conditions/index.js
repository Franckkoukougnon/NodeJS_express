const randomNumber = Math.floor(Math.random() * 16);
console.log(randomNumber);

if (randomNumber < 5) {
  console.log(`randomNumber is ${randomNumber} est un inferieur a 5`);
} else {
  console.log(` randomNumber is ${randomNumber} est un superieur a 5`);
}

// Random name
const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "John", "Romeo"];
const randomIndex = Math.floor(Math.random() * names.length);
const randomName = names[randomIndex];
console.log(`le type de names est ${typeof names}`);
console.log(`le type de randomNames est ${typeof randomName}`);

console.log(randomName);

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

console.log("================================================");

const nbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getRandomElement(nbs));

console.log("================================================");

const randomCity = ["New York", " Washington", " Houston", "Dallas"];
console.log(getRandomElement(randomCity));

console.log("================================================================");
console.log(getRandomElement(names));
