function faireQuelqueChose(callback) {
  setTimeout(function () {
    callback("la tâche est terminée");
  }, 2000);
}

faireQuelqueChose(function (message) {
  console.log(message);
});
