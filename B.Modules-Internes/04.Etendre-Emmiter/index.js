const evenEmitter = require("events");

class MyEmitter extends evenEmitter {
  constructor() {
    super();
  }

  faireqqchose() {
    console.log("faire qq chose");
    this.emit("faireqqchose", " action emis avec succès");
  }
}
