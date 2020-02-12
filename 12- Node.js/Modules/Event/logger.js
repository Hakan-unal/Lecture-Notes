const Event = require("events");

class Logger extends Event {

    log(message) {
        console.log(message);
        let object = { name: "Hakan", surname: "Ünal" }
        this.emit("connection", object);
    }
}

module.exports.Logger = Logger;