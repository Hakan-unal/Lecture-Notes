const fileLogger = require("./logger");
classLogger = fileLogger.Logger;
let object = new classLogger();


object.on("connection", function (args) {
    console.log(`bağlantı kuruldu.`,args);
});

object.log("message");