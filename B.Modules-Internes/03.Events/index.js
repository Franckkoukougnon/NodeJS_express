const EventEmitter = require("events");

const monEmetteur = new EventEmitter();

function eventHandler() {
  console.log("Un événement a été déclenché !");
}

function eventHandler2() {
  console.log("Un autre événement a été déclenché !");
}

monEmetteur.on("event2", eventHandler2);

// Ajout de l'événement
monEmetteur.on("event", eventHandler);

// Déclenchement de l'événement avant suppression
monEmetteur.emit("event");
monEmetteur.emit("event2");
console.log("====================================");
console.log(
  "Avant suppression, écouteurs :",
  monEmetteur.listenerCount("event")
); // Vérifie le nombre d'écouteurs
console.log(
  "Avant suppression, écouteurs :",
  monEmetteur.listenerCount("event2")
); // Vérifie le nombre d'écouteurs

console.log("====================================");

// Suppression de l'événement
monEmetteur.removeListener("event", eventHandler);

// Vérification après suppression
console.log("====================================");
console.log(
  "Après suppression, écouteurs :",
  monEmetteur.listenerCount("event")
); // Vérifie le nombre d'écouteurs
console.log("====================================");

// Déclenchement de l'événement après suppression
monEmetteur.emit("event");
