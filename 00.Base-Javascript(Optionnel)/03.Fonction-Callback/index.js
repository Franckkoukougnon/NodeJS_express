let fairequelquechose = (callback) => {
  console.log("Je fais quelque chose");
  callback();
};

let add = () => {
  console.log("Je suis une fonction de callback");
};

fairequelquechose(add);
let result = fairequelquechose(add);
